const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const path = require("path");
const basePath = path.join(__dirname, "./../views");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
                error: true,
                message: "Usuário ou a senha incorreta! Nenhum usuário com este e-mail"
            });
        }

        if(!(await bcrypt.compare(req.body.password, user.password))){
            return res.status(400).json({
                error: true,
                message: "Usuário ou a senha incorreta! Senha incorreta!"
            });
        }


        let token = jwt.sign({id: user.id}, "SDHASDYASDBH6ASDA", {
            expiresIn: 1800
        });

        res.cookie('authToken', token, { httpOnly: true });

        return res.status(200).json({
            error: false,
            message: "Logado com sucesso!"
        });

    }catch (err){
        console.log("Erro ao tentar validar o seu usuário: ", err);
    }
})

module.exports = router;
