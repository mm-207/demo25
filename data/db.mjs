import pg from "pg"

const config = {
    connectionString: process.env.DB_CREDENTIALS,
    ssl: process.env.DB_SSL === "true" ? process.env.DB_SSL : { "rejectUnauthorized": false }
}

async function create(statment, ...values) {
    return await runQuery(statment, ...values);
}

async function update(statment, ...values) {
    return await runQuery(statment, ...values);
}

async function read(statment, ...values) {
    return await runQuery(statment, ...values);
}

async function purge(statment, ...values) {
    return await runQuery(statment, ...values);
}

async function runQuery(query, ...values) {
    const client = new pg.Client(config);

    try {
        client.connect();
        const result = client.query(statment, [...values])

        if (result.rowcount <= 0) {
            throw new Error("No records created");
        }
        return result.row[0];

    } catch (error) {

        // Feilhåndtering 
        console.error(error);
        return null;

    } finally {
        client.close();
    }
}


const DbManager = { create, update, read, purge };

export default DbManager;