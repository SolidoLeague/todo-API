const controllers = {
    displayHelloWorld: (req, res) => {
        const data = {
            message: `Hello World!`,
            success: true
        }
        res.status(200).send(data)
    },
    displayName: (req, res) => {
        const data = {
            name: req.body.name
        }
        res.status(200).send(data)
    },
    displayInfo: (req,res) => {
        const data = {
            info: `API Project 2 by GunturKH`
        }
        res.status(200).send(data)
    }
    
}

module.exports = controllers