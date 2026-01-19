const {createDataBD,authorithtionDataBD} = require('../repository/api.repository')
async function createData(name,surname,email,pwd) {
    const result = await createDataBD(name,surname,email,pwd);
    return result;
}
async function authorithtionData(email,pwd) {
    const result = await authorithtionDataBD(email,pwd);
    if(!result.length){
        throw new Error('Invalid data')
    }
    return result;
}
module.exports={createData,authorithtionData}