const express = require('express')

const router = express.Router()
const UserService = require('../Services/users')
const {successMessage,errorMessage} = require('../utils/responses/responses')

router.get("/", (req, res) => {
    const us = new UserService();
    us.getUsers()
        .then(result => successMessage(res,200,"lista de usuarios",result))
        .catch(err => errorMessage(res,500,"lista no obtenida",err));
            


            });
    
    router.post('/create-user', (req, res) => {
        const us = new UserService()
        const{name,password}=req.body
        if (name&& password){
        us.insertUser(name,password)
        .then((data)=>successMessage(res,201,"usuario agregado",data))
        .catch((error)=> errorMessage(res,400,"usuario no ingrersado",error))
        } else {
            errorMessage(res,400,"los campos deben ser name y password")
        }

        });
        

    // nos permite exportar el contenido del archivo
    module.exports = router;