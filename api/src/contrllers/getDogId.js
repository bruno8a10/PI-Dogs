const URLAPI = "https://api.thedogapi.com/v1/breeds?key=ec34df1f-bb5a-43c4-833d-77189fd56edb?limit=2";
const {Router}= require("express");
const { Dog, Temperament, Dog_Tem} = require("../db.js");
const {Op} = require ("sequelize");
const axios = require("axios");
const app = Router();
app.get("/:id", async function (req,res){
    const {id} = req.params;
    console.log(id)
    if(id){
        try{
            let ApiDog =  await axios.get(URLAPI)
            const ApiDogName = ApiDog.data;
            for(let i=0; i< ApiDogName.length;i++){
                if(ApiDogName[i].id == id){
                  const dog = {
                    id: ApiDogName[i].id,
                    name: ApiDogName[i].name,
                    life_span: ApiDogName[i].life_span,
                    weight: ApiDogName[i].weight.metric,
                    height: ApiDogName[i].height.metric,
                    temperaments: ApiDogName[i].temperament,
                    image: ApiDogName[i].image.url 
                  }

                 return res.status(200).json(dog)
                }
            }
         let dogId = await Dog.findByPk(id,
            {
            include:[Temperament] 
        }
        )
        res.status(200).json(dogId)
        }catch(err){
        return res.send("Error")
    }
}
})
module.exports = app;