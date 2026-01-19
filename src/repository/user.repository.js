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
    const result = await connection.query(sql,[id]);
    return result.rows;
}

async function updateDataBD(id,name,surname,email,pwd) {
     const connection = await pool.connect();
    const sql=` update users set name=$1,surname=$2,email=$3,pwd=$4 where id= $5 returning *`;
     const result= await connection.query(sql,[name,surname,email,pwd,id]);
    return result.rows;
}
async function deleteDataBD(id) {
    const connection = await pool.connect();
    const sql = `delete from users where id= $1 returning *`;
    const result = await connection.query(sql,[id]);
    return result.rows;
}
module.exports={getDataBD,getDataIdBD,updateDataBD,deleteDataBD}