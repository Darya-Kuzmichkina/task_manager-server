const pool = require('./db');
async function getDataBD() {
    const connection = await pool.connect();
    const sql = `select * from users`;
    const result = await connection.query(sql);
    return result.rows;
}
async function getDataIdBD(id) {
    const connection = await pool.connect();
    const sql = `select * from users where id= $1`;
    const result = await connection.query(sql, [id]);
    return result.rows;
}

async function updateDataBD(id, name, surname, email, pwd) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = ` update users set name=$1,surname=$2,email=$3,pwd=$4 where id= $5 returning *`;
        const result = await connection.query(sql, [name, surname, email, pwd, id]);
        await connection.query('COMMIT')
        return result.rows;

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function deleteDataBD(id) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = `delete from users where id= $1 returning *`;
        const result = await connection.query(sql, [id]);
        await connection.query('COMMIT')
        return result.rows;

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function patchDataBD(id, data) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = `select * from users where id= $1`
        const result = await connection.query(sql, [id]);
        const object = { ...result.rows[0], ...data }
        const sql2 = `update users set name=$1,surname=$2,email=$3,pwd=$4 where id= $5 returning *`;
        const result2 = await connection.query(sql2, [object.name, object.surname, object.email, object.pwd, id]);
        await connection.query('COMMIT')
        return result2.rows

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
module.exports = { getDataBD, getDataIdBD, updateDataBD, deleteDataBD, patchDataBD }