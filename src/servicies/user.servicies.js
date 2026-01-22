const { getDataBD, getDataIdBD, updateDataBD, deleteDataBD, patchDataBD } = require('../repository/user.repository')

async function getData() {
    const result = await getDataBD();
    if (!result.length) throw new Error('not found');
    return result;
}
async function getIdData(id) {
    const result = await getDataIdBD(id);
    if (!result.length) throw new Error('not found');
    return result;
}

async function updateData(id, name, surname, email, pwd) {
    const result = await updateDataBD(id, name, surname, email, pwd);
    if (!result.length) throw new Error('not found');
    return result;
}
async function deleteData(id) {
    const result = await deleteDataBD(id);
    if (!result.length) throw new Error('not found');
    return result;
}
async function patchData(id, data) {
    const result = await patchDataBD(id, data);
    if (!result.length) throw new Error('not found');
    return result;
}
module.exports = { getData, getIdData, updateData, deleteData, patchData }