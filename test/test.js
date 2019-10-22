const UserService = require('../Services/users')

const us = new UserService()

us.insertUser("tu papi", "12345")
    .then((result) => {
        console.log(result)

    })
    .catch((error) => {
        console.log(error)
    })

