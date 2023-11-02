import db , {genId} from "../../src/modules/db"

const run = async () => {
    await db.post.createMany({
        data:[
            {
                id : genId(),
                slug: 'ultimat-node-stack',
                title: 'Ultimate Node stack 2023',
                publishedAt: new Date(),
            },
            {
                id: genId(),
                slug: 'draft-post',
                title: 'draft post',
            }
        ]
    });
};

if(require.main === module){
    run().then(()=>{
        console.log('Data seed commpleted');
        process.exit();
    })
}