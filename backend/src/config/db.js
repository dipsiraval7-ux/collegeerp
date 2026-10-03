const { Pool } = require("pg");

const poolConfig = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.DB_SSL === "false"
            ? false
            : {
                rejectUnauthorized: false
            }
    }
    : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 5432,
        max: 10,
        ssl: process.env.DB_SSL === "true"
            ? {
                rejectUnauthorized: false
            }
            : false
    };

const pool = new Pool(poolConfig);

module.exports = pool;

