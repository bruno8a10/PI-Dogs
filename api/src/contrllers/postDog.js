const { Router } = require('express');
const app = Router();
const {Op} = require ("sequelize");
const axios = require("axios");
const { Dog, Temperament, Dog_Tem } = require('../db.js');
app.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temp} = req.body;
	try {
		// const apiDog =  await axios.get(URLAPI)
        // const dogsApi = apiDog.data;
        // let bsDog=  await Dog.findAll()
		// console.log("nro Base : "+dogsApi.length+"nro de api : "+ dogsApi.length )
		let newDog = await Dog.findOrCreate({
		where:{
			name,
			height,
			weight,
			life_span,
			image,
		}
		} );	
		//let arr = temp.split(',')
		//for(let i = 0; i < arr.length; i++){
			//console.log(arr[i]);
		 //await newDog.addTemperament(id[i]);
		//}
		//await newDog.addTemperament(temp);
		//await newDog.setTemperament(temp);
		console.log(newDog);
		return res.send(newDog);
	} catch (error) {
		return res.status(200).json(error);
	}
});
module.exports = app;