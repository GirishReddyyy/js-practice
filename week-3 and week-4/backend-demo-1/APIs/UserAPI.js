import exp from 'express'

//create mini- express(Seperate Route) app
export const userApp=exp.Router()


//Test local in-memory data
let users = [];

//Create USER API (req handlers - route )

//get req handling route(read user)
userApp.get('/users', (req, res) => {
    //send users data in response
    res.status(200).json({ message: "all users data", payload: users }) //message,payload
})

//post req handling route(create user)
userApp.post('/users',(req, res) => {
    //get user resource from req
    let newUser = req.body
    // console.log("newUser",newUser)
    //insert new user into users array
    users.push(newUser)
    //send res
    res.status(201).json({ message: "user created", payload: newUser })


})

//put req handling route(update user)
userApp.put('/users', (req, res) => {
    //get modified user from req
    let modifiedUser = req.body
    //console.log(modifiedUser)

    //find the user with id exists in array
    //let userObj=users.find(user=>user.id===modifiedUser.id)
    let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id)

    //if user not found,send res as "user not found"
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" })
    }

    //if user found,then modify the user
    let deletedUser = users.splice(userIndex, 1, modifiedUser)

    //send res as "User modified"
    res.status(200).json({ message: "User modified", payload: modifiedUser })
})


//read user by id
// : before id make it a parameter
userApp.get('/users/:id', (req, res) => {

    //console.log(req.params)
    //read id form url parameter
    //let userId=req.params.id
    let userId = Number(req.params.id) //return obj {id: 100}
    //read user by this id
    let user = users.find(userObj => userObj.id === userId)
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    //send res
    res.status(200).json({ message: "user", payload: user })
})


//delete req handling route(delete user)
userApp.delete('/users/:id', (req, res) => {
    let userId = Number(req.params.id)
    let user = users.findIndex(userObj => userObj.id === userId)
    if (user === -1) {
        return res.status(404).json({ message: "user not found" })
    }
    let deletedUser = users.splice(user, 1)
    res.status(200).json({ message: "user deleted", payload: deletedUser })
})