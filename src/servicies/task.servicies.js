const { addTaskBD,getTaskBD,getTaskIdBD } = require('../repository/task.repository')

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

module.exports = { addTask,getTask,getTaskId }