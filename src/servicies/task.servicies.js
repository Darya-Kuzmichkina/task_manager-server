const { addTaskBD,getTaskBD,getTaskIdBD,updateTaskBD,deleteTaskBD,patchTaskBD} = require('../repository/task.repository')

async function getTask() {
    const result = await getTaskBD();
    return result;
}
async function getTaskId(id) {
    const result = await getTaskIdBD(id);
    return result;
}
async function addTask(task, user_id) {
    const result = await addTaskBD(task, user_id);
    return result;
}
async function updateTask(id,task, user_id) {
    const result = await updateTaskBD(id,task, user_id);
    return result;
}
async function deleteTask(id) {
    const result = await deleteTaskBD(id);
    return result;
}
async function patchTask(id,data) {
    const result = await patchTaskBD(id,data)
    return result;
}
module.exports = { addTask,getTask,getTaskId,updateTask,deleteTask,patchTask }