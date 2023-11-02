const { nanoid } = require("nanoid");
import { PrismaClient } from "@prisma/client";


const db = new PrismaClient({
    log:['query','info','warn','error']
});

export default db;

export const genId = ()=> nanoid(16);