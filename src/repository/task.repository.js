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
    const result = await connection.query(sql,[id]);
    return result.rows;
}
async function addTaskBD(task,user_id) {
    const connection = await pool.connect();
    const sql=` insert into tasks (task,user_id) values ($1,$2) returning *`;
     const result= await connection.query(sql,[task,user_id]);
    return result.rows;
}
module.exports={addTaskBD,getTaskBD,getTaskIdBD}