const sharp = require('sharp');

const convertToGrayscale = () =>
	sharp('./images/robo.jpeg')
		.grayscale() // or .greyscale()
		.toFile(__dirname + '/processed_images/grayscale_robo.jpeg');

convertToGrayscale();
