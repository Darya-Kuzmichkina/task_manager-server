const {getDataBD,getDataIdBD,updateDataBD,deleteDataBD,patchDataBD} = require('../repository/user.repository')

async function getData() {
    const result = await getDataBD();
    return result;
}
async function getIdData(id) {
    const result = await getDataIdBD(id);
    return result;
}

async function updateData(id,name,surname,email,pwd) {
    const result = await updateDataBD(id,name,surname,email,pwd);
    return result;
}
async function deleteData(id) {
    const result = await deleteDataBD(id);
    return result;
}
async function patchData(id,data) {
    const result = await patchDataBD(id,data)
    return result;
}
module.exports={getData,getIdData,updateData,deleteData, patchData}