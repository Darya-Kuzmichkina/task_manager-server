const pool = require('./db');
async function getTaskBD() {
    const connection = await pool.connect();
    const sql = `select * from tasks`;
    const result = await connection.query(sql);
    return result.rows;
}
async function getTaskIdBD(id) {
    const connection = await pool.connect();
    const sql = `select * from tasks where id=$1`;
    const result = await connection.query(sql, [id]);
    return result.rows;
}
async function addTaskBD(task, user_id) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = ` insert into tasks (task,user_id) values ($1,$2) returning *`;
        const result = await connection.query(sql, [task, user_id]);
        await connection.query('COMMIT')
        return result.rows;

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}

async function updateTaskBD(id, task, user_id) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = ` update tasks set task=$1,user_id=$2 where id= $3 returning *`;
        const result = await connection.query(sql, [task, user_id, id]);
        await connection.query('COMMIT')
        return result.rows;

    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function deleteTaskBD(id) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = `delete from tasks where id= $1 returning *`;
        const result = await connection.query(sql, [id]);
        await connection.query('COMMIT')
        return result.rows;
    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
async function patchTaskBD(id, data) {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN')
        const sql = `select * from tasks where id= $1`
        const result = await connection.query(sql, [id]);
        const object = { ...result.rows[0], ...data }
        const sql2 = `update tasks set task=$1,user_id=$2 where id= $3 returning *`;
        const result2 = await connection.query(sql2, [object.task, object.user_id, id]);
        await connection.query('COMMIT')
        return result2.rows
    } catch (error) {
        await connection.query('ROLLBACK')
        throw new Error(error.message)
    }
}
module.exports = { addTaskBD, getTaskBD, getTaskIdBD, updateTaskBD, deleteTaskBD, patchTaskBD }