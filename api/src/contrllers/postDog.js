const { Router } = require('express');
const app = Router();
const {Op} = require ("sequelize");
const axios = require("axios");
const { Dog} = require('../db.js');
app.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temp} = req.body;
	try {
		let newDog = await Dog.findOrCreate({
		where:{
			name,
			height,
			weight,
			life_span,
			image,
		}
		} );
		//console.log(newDog[0].dataValues.id)	
		//await newDog[0].dataValues.id.addTemperament(temp);
		return res.json(newDog);
	} catch (error) {
		return res.status(200).json(error);
	}
});
module.exports = app;