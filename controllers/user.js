const User = require("../models/user");

module.exports.register = async (req, res, next) => {
    try {
        const { username } = req.body;
        await User.create({name: username});
        const data = {
            message: "SUCCESS",
            status: 200
        };
        res.json(data);
    }catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { username } = req.body;
        console.log(username);
        const user = await User.findByPk(username);
        const data = {
            data: user,
            status: 200
        };
        res.json(data);
        
    } catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}