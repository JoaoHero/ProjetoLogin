const Sequelize = require("sequelize");

const sequelize = new Sequelize("think", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com banco de dados foi realizada com sucesso!");
}).catch((err) => console.log("Erro ao conectar com o banco de dados: ", err))

module.exports = sequelize;