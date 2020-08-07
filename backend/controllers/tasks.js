const createTask = (req, res) => {
    res.status(200).json({message: 'Task Created'})
};

const getTask = (req, res) => {
    res.status(200).json({taskId: req.params.id})
};

const updateTask = (req, res) => {
    res.status(200).json({ taskId: req.params.id })
};

const deleteTask = (req, res) => {
    res.status(200).json({ taskId: req.params.id })
};

module.exports = { createTask, getTask, updateTask, deleteTask };