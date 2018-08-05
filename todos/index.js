const fs = require("fs")

const todosJSON = "./data/seed.json"
const TODOS = JSON.parse(fs.readFileSync(todosJSON, 'utf8'))

// const respond = (res, code, data) => {
//     const value = res.status(code).send(data);
//     return value;
// }

const errorMessage = (messageFill) => {
    return {message: messageFill};
}

const request = (key) => {
    return req.body.key;
}

const todos = {
    get: (req, res) => {
        // if (TODOS.todos) 
        //     respond(200, TODOS.todos);
        // else 
        //     respond(400, errorMessage("Todo data list is empty"));

        if (TODOS.todos){
            res.status(200).send(TODOS.todos);
        }
        else{
            res.status(400).send(errorMessage("Your todo list is empty. Please add new todo list"));
        }
    },

    add: (req, res) => {


        // if (req.body.text) {
        //     TODOS.counter += 1
        // }
        // const data = {
        //     id: TODOS.counter,
        //     text: req.body.text
        // }
        // console.log(req.body.text)

        // TODOS.data.push(data)

        // const todosString = JSON.stringify(TODOS, null, 2)

        // fs.writeFileSync(todosJSON, todosString, 'utf8');

        // res.status(201).send(data)
    },

    getOnebyCharacters: (req, res) => {
        // const data = TODOS.data.find(item => {
        //     return item.id === Number(req.params.id)
        // })
        // if (data) {
        //     res.status(200).send(data)
        // }
        // else {
        //     res.status(400).send({
        //         message: "Id is not found"
        //     })
        // }
    },

    updateTodobyId: (req, res) => {
        // const data = TODOS.data.find(item => {
        //     return item.id === Number(req.params.id)
        // })

        // if (data) {
        //     const updateData = {
        //         id: req.params.id,
        //         text: req.body.text
        //     }
        //     data["id"] = updateData.id
        //     data["text"] = updateData.text
        //     res.status(200).send(data)
        // }
        // else {
        //     res.status(404).send({
        //         message: "Id not found"
        //     })
        // }
    },

    deleteTodobyId: (req, res) => {
        // const data = TODOS.data.filter(item => {
        //     return item.id !== Number(req.params.id)
        // })
        // const data_JSON = {
        //     counter: TODOS.counter,
        //     data: data
        // }
        // if (data) {
        //     const todosString = JSON.stringify(data_JSON, null, 2)
        //     fs.writeFileSync(todosJSON, todosString, 'utf8');
        //     res.status(200).send(data)
        // }
        // else {
        //     res.status(404).send({ message: "Id not found" })
        // }
    }
};

module.exports = todos;