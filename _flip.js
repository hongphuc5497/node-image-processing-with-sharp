const sharp = require('sharp');

const flipImage = () => {
	sharp('./images/robo.jpeg')
		.flip()
		.toFile(__dirname + '/processed_images/flip_robo.jpeg');
};

flipImage();
