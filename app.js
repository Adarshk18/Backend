const express = require("express");
const app = express();

const userModel = require("./usermodel");
const { modelNames } = require("mongoose");


app.get("/create", async (req, res) => {
    let createdUser = await userModel.create({
        name: "Adarsh1",
        userName: "As712",
        email: "adarsh@gmail.com",
    });

    res.send(createdUser);
});

app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ name: "Adarsh" }, { name: "Adarsh Sharma" }, { new: true })
    res.send(updatedUser);
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get("/delete", async(req,res)=>{
    let users = await userModel.findOneAndDelete({name: "Adarsh1"});
    res.send(users);
    alert('user deleted');
})

app.listen(3000);