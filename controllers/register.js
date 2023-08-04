const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const path = require("path");
const basePath = path.join(__dirname, "./../views");
const bcrypt = require("bcrypt");
const validate = require("../public/js/validate");

router.get("/register", (req, res) => {
    res.sendFile(`${basePath}/register.html`);
});

router.post("/registerPost", async (req, res) => {
    let user = req.body;

    try {
        if(!user.name || !user.email || !user.password || !user.company) {
            return res.status(400).json({
                error: true,
                message: "Todos os campos são obrigatórios!"
            });
        }

        const verifyEmail = await User.findOne({
            attributes: ["email"],
            where: {
                email: user.email
            }
        });

        if(verifyEmail) {
            return res.status(400).json({
                error: true,
                message: "Email já cadastrado!"
            });
        }

        if(!validate.Email(user.email)) {
            return res.status(400).json({
                error: true,
                message: "Email inválido!"
            });
        }

        if(!validate.Password(user.password)) {
            return res.status(400).json({
                error: true,
                message: "Senha deve conter 8 caracteres, entre eles, números e letras maiúsculas e minúsculas"
            });
        }

        user.password = await bcrypt.hash(user.password, 8);

        await User.create(user);
        return res.status(200).json({
            error: false,
            message: "Email foi cadastrado com sucesso!"
        });

    } catch (err){
        console.log("Erro ao tentar criar o seu usuário no banco", err);
    }
});

module.exports = router;