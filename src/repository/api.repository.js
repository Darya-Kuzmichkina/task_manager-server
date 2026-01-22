const pool = require('./db');
async function createDataBD(name, surname, email, pwd) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = ` insert into users (name,surname,email,pwd) values ($1,$2,$3,$4) returning *`;
        const result = await connection.query(sql, [name, surname, email, pwd]);
        await connection.query('COMMIT')
        return result.rows;
    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function getUserByEmailDB(email) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = `select * from users where email= $1`;
        const result = await connection.query(sql, [email]);
        await connection.query('COMMIT')
        return result.rows;
    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function authorithtionDataBD(email, pwd) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = ` select * from users where email=$1 and pwd=$2`;
        const result = await connection.query(sql, [email, pwd]);
        await connection.query('COMMIT')
        return result.rows;

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
module.exports = { createDataBD, authorithtionDataBD,getUserByEmailDB }