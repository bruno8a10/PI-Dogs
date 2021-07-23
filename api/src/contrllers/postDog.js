const { Router } = require('express');
const app = Router();
const {Op} = require ("sequelize");
const axios = require("axios");
const { Dog,Temperament} = require('../db.js');
app.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temperaments } = req.body;
	console.log("name :"+name,"h:"+height,"w:"+weight,"l:"+life_span, "imagen :"+image)
	try {
		let [newDog,create] = await Dog.findOrCreate({
		where:{
			name,
			height,
			weight,
			life_span,
			image,
		}
		});	
        //  let arr = temperaments.split(',')
		// for(let i= 0; i< arr.length;i++){
		// 	console.log(arr[i])
		// 	await newDog.addTemperament(arr[i]);
		// }
		// no lo toma con el set da vacio await newDog.setTemperament(temperaments);
		console.log
		await newDog.addTemperament(temperaments);
		
		return res.json(newDog);
	} catch (error) {
		return res.status(404).json(error);
	}
});
module.exports = app;