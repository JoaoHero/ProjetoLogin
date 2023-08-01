const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const path = require("path");
const basePath = path.join(__dirname, "./../views");
const bcrypt = require("bcrypt");

router.get("/login", (req, res) => {
    res.sendFile(`${basePath}/login.html`);
});

router.post("/loginUser", async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'name', 'email', 'password'],
            where: {
                email: req.body.email
            }
        });

        if(user === null){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail"
            });
        }

        if(!(await bcrypt.compare(req.body.password, user.password))){
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!"
            });
        }

        return res.redirect("/home");

    }catch (err){
        console.log("Erro ao tentar validar o seu usuário: ", err);
    }
})

module.exports = router;
