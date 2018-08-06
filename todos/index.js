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

// const request = (key) => {
//     return req.body.key;
// }

const todos = {
    get: (req, res) => {
        // if (TODOS.todos) 
        //     respond(200, TODOS.todos);
        // else 
        //     respond(400, errorMessage("Todo data list is empty"));
        TODOS.todos ? res.status(200).send(TODOS.todos):res.status(400).send(errorMessage("Your todo list is empty. Please add new todo list"));
    },

    add: (req, res) => {
        todoTask = req.body.task;
        todoPriority = req.body.priority;
        todoDeadline = req.body.deadline;

        if(todoTask && todoPriority && todoDeadline) {
            TODOS.idCounter += 1;

            const todoData = {
                id: TODOS.idCounter,
                task: todoTask,
                priority: todoPriority,
                deadline: todoDeadline
            }

            TODOS.todos.push(todoData);

            const todosString = JSON.stringify(TODOS, null, 2);
            fs.writeFileSync(todosJSON, todosString, 'utf8');

            console.log(todoData);

            res.status(201).send(todoData);
        }
        else{
            res.status(400).send(errorMessage("You have to fill all of your data properties"))
        }
    },

    getOnebyCharacters: (req, res) => {
        const searchedTask = String(req.params.search).toLowerCase();

        if (searchedTask){
            const todoData = TODOS.todos.filter(task => {
                return task.task.toLowerCase().includes(searchedTask);
            })
            if (todoData) res.status(200).send(todoData);
            else res.status(400).send(errorMessage("Task you have searched is empty")); 
        }
        else{
            res.status(400).send(errorMessage("Please fill your keyword"));
        }
    },

    updateTodoById: (req, res) => {
        const updatedId = Number(req.params.id);
        
        const todoTask = req.body.task;
        const todoPriority = req.body.priority;
        const todoDeadline = req.body.deadline;

        if (updatedId){
            if(todoTask && todoPriority && todoDeadline) {
                const todoData = TODOS.todos.find(item => {
                    return item.id === updatedId;
                });

                if (todoData){
                    todoData.task = todoTask;
                    todoData.priority = todoPriority;
                    todoData.deadline = todoDeadline;

                    const todosString = JSON.stringify(TODOS, null, 2);
                    fs.writeFileSync(todosJSON, todosString, 'utf8');

                    res.status(202).send(todoData);
                }
                else{
                    res.status(400).send(errorMessage(`Data with ID ${updatedId} doesn't exists`));
                }
            }
            else{
                res.status(400).send(errorMessage("You have to fill all of your data properties"));
            }
        }
        else{
            res.status(400).send(errorMessage("Please choose task you want to edit"));
        }
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