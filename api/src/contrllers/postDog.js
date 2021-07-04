const { Router } = require('express');
const router = Router();
const { Dog, Temperament, Dog_Tem } = require('../db.js');
router.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temperaments} = req.body;
	console.log(temperaments);
	try {
		let newDog = await Dog.findOrCreate({
		where:{
			name,
			height,
			weight,
			life_span,
			image,
		}	
		});
		await newDog.addTemperament(temperaments);
		 return res.json(newDog);
	} catch (error) {
		return res.status(500).json(error);
	}
});
module.exports = router;