const Mysql = require('../lib/sql')
class Users {
    constructor() {
        this._mysql = new Mysql()
    }

    getUsers = () => {
        return new Promise((resolve, reject) => {

            this._mysql.connection()
                .then((connection) => {
                    const SQL = 'SELECT * FROM practica_2.users;'
                    connection.query(SQL, (error, result) => {
                        if (error) {
                            reject(error)

                        } else {
                            const data = JSON.parse(JSON.stringify(result))
                            resolve(data)

                        }
                    })
                })
                .catch(reject)
        })



    }

    insertUser = (name,password) => {
        return new Promise((resolve, reject) => {

            this._mysql.connection()

                .then((conection) => {
                    const SQL = 'INSERT INTO practica_2.users (name,password) VALUES (?,?);'
                    conection.query(SQL, [name, password], (error, result) => {
                        if (error) {
                            reject(error)

                        } else {

                            const resultado= JSON.parse(JSON.stringify(result))
                            const {insertId}=resultado

                            resolve({id:insertId,message:"usuario ingresado"});
                            
                        }
                    });
                    conection.end()

                })
                .catch(reject)

        })
    }
}
module.exports = Users