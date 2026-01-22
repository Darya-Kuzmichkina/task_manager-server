const { createDataBD, authorithtionDataBD, getUserByEmailDB } = require('../repository/api.repository')
async function createData(name, surname, email, pwd) {
    const result = await createDataBD(name, surname, email, pwd);
    if (!result.length) throw new Error('not found');
    return result;
}

async function authorithtionData(email, pwd) {
    const result = await getUserByEmailDB(email);
    //const result = await authorithtionDataBD(email, pwd);
    if (!result.length) {
        throw new Error('this email not found')
    }
    if (result[0].pwd != pwd) {
        throw new Error('invalid password')
    }
    return result;
}
module.exports = { createData, authorithtionData }