import Task from "../models/Task";

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({tasks});
    } catch (e) {
        console.log(e);
    }
}

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        });

        res.json({
            message: 'Task created successfully'
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task deleted successfully'
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    try {

        const task = await Task.findOne({
            attributes: ['name', 'projectid', 'done', 'id'],
            where: { id }
        });

        const updatedTask = await task.update({
            name,
            done,
            projectid
        },
        {
            where: { id }
        });
        
        return res.json({
            message: 'Task updated successfully',
            updatedTask
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOneTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            attributes: [ 'id', 'projectid', 'name', 'done',],
            where: { id }
        });
        res.json({task});
    } catch (e) {
        console.log(e);
    }
}

export async function getTasksByProject(req, res) {
    try {
        const { projectid } = req.params;
        const tasks = await Task.findAll({
            attributes: [ 'id', 'projectid', 'name', 'done',],
            where: {
                projectid
            }
        }); 
        res.json({ tasks });
    } catch (e) {
        console.log(e);
    }
}