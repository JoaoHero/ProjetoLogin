const express = require("express");
const router = express.Router();
const User = require("./../models/User");
const path = require("path");
const basePath = path.join(__dirname, "./../views");
const bcrypt = require("bcrypt")

router.get("/register", (req, res) => {
    res.sendFile(`${basePath}/register.html`);
});

router.post("/registerPost", async (req, res) => {
    let user = req.body;

    user.password = await bcrypt.hash(user.password, 8);

    try {
        if(!user.email || !user.password) {
            return res.status(400).json({
                error: true,
                message: "E-mail e senha são obrigatórios"
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

        await User.create(user);
        return res.status(200).redirect("/login");

    } catch (err){
        console.log("Erro ao tentar criar o seu usuário no banco", err);
    }
});

module.exports = router;