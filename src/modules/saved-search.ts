import { difference, extend, isUndefined, omitBy, remove } from "lodash";
import { arrayBuffer } from "stream/consumers";

export type SavedSearch = {
    listingType: "rent" | "sell",
    countyIds: string[];
    propertyTypes: ("house" | "land" | "condo" | "townhome")[];
};

type DiffableObject = Record<string, string | string[]> 
type Diff<TObject extends DiffableObject> = {
    [k in keyof TObject]? : TObject[k] extends string[] ? 
    {
        added: string[], removed: string[]
    }:
    {before:string , after:string};
}

const diffString = (before:string, after:string)=>{
    if(before === after) return undefined;
    return {before,after};
}


const diffArray = (before: string[], after: string[]) => {
    return {
        added: difference(after,before),
        removed: difference(before,after),
    };
}



const diff =<TObject extends DiffableObject> (before:TObject, after:TObject):Diff<TObject> =>{ 
    // const result = {
    //     listingType: diffString(before.listingType,after.listingType),
    //     countyIds: diffArray(before.countyIds, after.countyIds),
    //     propertyTypes: diffArray(before.propertyTypes,after.propertyTypes),
    // }

    const entries = Object.entries(before).map(([key,value]) => {
        if(typeof value === "string") {return [key, diffString(value,after[key] as string)]};
        return [key ,diffArray(value, after[key] as string[])]
    });

    const result  = Object.fromEntries(entries);

    return omitBy(result, isUndefined);
}

const ModSavedSearch = {
   diff
};

export default ModSavedSearch;