const { Router } = require("express");



const FileRouter = Router();

FileRouter.get('/',(req,res) => {
    if(!req.isAuthenticated()) {
        res.send("Not Authenticated");
    }
    res.send("You are in Files...");
})

module.exports = FileRouter;