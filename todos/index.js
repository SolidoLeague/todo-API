const fs = require("fs")

const todosJSON = "./data/todos.json"
const TODOS = JSON.parse(fs.readFileSync(todosJSON, 'utf8'))

const todos = {
    get: (req, res) => {
        res.status(200).send(TODOS);
    },

    getOnebyId: (req, res) => {
        const data = TODOS.find(item => {
            return item.id === Number(req.params.id)
        })
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.status(400).send({
                message: "Id is not found"
            })
        }
    },

    add: (req, res) => {
        const data = {
            id: TODOS.length + 1,
            text: req.body.text
        }
        console.log(req.body.text)

        TODOS.push(data)

        const todosString = JSON.stringify(TODOS, null, 2)

        fs.writeFileSync(todosJSON, todosString, 'utf8');

        res.status(201).send(data)
    },

    saveTodo: (req, res) => {
        const data = {
            id: req.body.id + 1,
            text: req.body.text
        }
        res.status(200).send(data)
    },

    deleteTodos: (req, res) => {
        let data = TODOS
        data = []

        const todosString = JSON.stringify(data, null, 2)

        fs.writeFileSync(todosJSON, todosString, 'utf8');

        res.status(200).send(data)
    },

    deleteTodobyId: (req, res) => {
        const data = TODOS.find(item => {
            return item.id === Number(req.params.id)
        })
        if (data) {
            delete data['text']
            delete data['id']
        }
        else {
            res.status(404).send({ message: "Id not found" })
        }
    },

    updateTodobyId: (req, res) => {
        const data = TODOS.find(item => {
            return item.id === Number(req.params.id)
        })

        if (data) {
            const updateData = {
                id: req.params.id,
                text: req.body.text
            }
            data["id"] = updateData.id
            data["text"] = updateData.text
            res.status(200).send(data)
        }
        else {
            res.status(404).send({
                message: "Id not found"
            })
        }
    }
};

module.exports = todos;