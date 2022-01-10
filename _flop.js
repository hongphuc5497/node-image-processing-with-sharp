const sharp = require('sharp');

const flopImage = async () => {
	await sharp('./images/robo.jpeg')
		.flop()
		.toFile(__dirname + '/processed_images/flop_robo.jpeg');
};

flopImage();
