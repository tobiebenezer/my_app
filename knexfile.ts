import { Knex } from "knex";

const pg : Knex.Config ={
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        extension:'ts'
    }
};

export default pg;