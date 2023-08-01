const Sequelize = require("sequelize");

const sequelize = new Sequelize("think", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
    console.log("Conectado com o banco de dados")
})
.catch((err) => console.log("Erro ao conectar com o banco de dados: ", err));

module.exports = sequelize;