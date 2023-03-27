import mysql from'mysql2';
import config from "../config/config.json" assert { type: "json" };

const { host, user, database, password } = config;

const pool = mysql.createConnection({
    host, user, database, password
});

export default pool.promise();
