const {Router}= require("express");
const {Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/", async (req,res) =>{
    try{
        let bsDog=  await Dog_Tem.findAll();
        console.log(bsDog)
        return res.status(200).json(bsDog)
    }catch(err){
    return res.send("Error")
}
})
module.exports = app;