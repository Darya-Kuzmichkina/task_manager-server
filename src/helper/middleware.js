function checkTaskBody(req, res, next) {
    const { task, user_id } = req.body;
    if (isNaN(user_id)) throw new Error('error user_id!')
    if (!isNaN(task) || task == null) throw new Error('error task!')
    next();
}
function checkUserBody(req, res, next) {
    const { name, surname, email, pwd } = req.body;
    if (!isNaN(name)) throw new Error('error name!')
    if (!isNaN(surname)) throw new Error('error surname!')
    if (!/^[a-zA-Z0-9\-\_\.]+@[a-z]+\.[a-z]+$/gm.test(email)) throw new Error('email is not valid!')
    if (pwd.length < 8) throw new Error('error password length!')
    next();
}
function checkTaskId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('error Id!');
    if (id < 0) throw new Error('error Id!');
    next();
}
function checkUserId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('error Id!');
    if (id < 0) throw new Error('error Id!');
    next();
}
module.exports = { checkTaskBody, checkTaskId, checkUserId, checkUserBody }