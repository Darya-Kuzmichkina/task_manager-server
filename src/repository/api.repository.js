const pool = require('./db');
async function createDataBD(name,surname,email,pwd) {
    const connection = await pool.connect();
    const sql=` insert into users (name,surname,email,pwd) values ($1,$2,$3,$4) returning *`;
     const result= await connection.query(sql,[name,surname,email,pwd]);
    return result.rows;
}
async function authorithtionDataBD(email,pwd) {
    const connection = await pool.connect();
    const sql=` select * from users where email=$1 and pwd=$2`;
     const result= await connection.query(sql,[email,pwd]);
    return result.rows;
}
module.exports={createDataBD,authorithtionDataBD}