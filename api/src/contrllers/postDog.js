const { Router } = require('express');
const app = Router();
const {Op} = require ("sequelize");
const axios = require("axios");
const { Dog,Temperament} = require('../db.js');
app.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temp } = req.body;
	
	if (temp.length === 0) {
		return res.sendStatus(500);
	}
	try {
		let newDog = await Dog.create({
			name,
			height,
			weight,
			life_span,
			image
		
		});	
		await newDog.addTemperament(temp);

		return res.json(newDog);
	} catch (error) {
		return res.status(404).json(error);
	}
});
module.exports = app;