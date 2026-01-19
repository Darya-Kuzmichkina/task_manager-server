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

async function updateTaskBD(id,task,user_id) {
     const connection = await pool.connect();
    const sql=` update tasks set task=$1,user_id=$2 where id= $3 returning *`;
     const result= await connection.query(sql,[task,user_id,id]);
    return result.rows;
}
async function deleteTaskBD(id) {
    const connection = await pool.connect();
    const sql = `delete from tasks where id= $1 returning *`;
    const result = await connection.query(sql,[id]);
    return result.rows;
}
async function patchTaskBD(id,data) {
    const connection = await pool.connect();
    const sql = `select * from tasks where id= $1`
    const result = await connection.query(sql,[id]);
    const object={...result.rows[0], ...data}    
    const sql2 = `update tasks set task=$1,user_id=$2 where id= $3 returning *`;
   const result2= await connection.query(sql2,[object.task, object.user_id, id]);
    return result2.rows
}
module.exports={addTaskBD,getTaskBD,getTaskIdBD,updateTaskBD,deleteTaskBD,patchTaskBD}