const sharp = require('sharp');

const compositeImage = () => {
	sharp('./images/fall.jpeg')
		.composite([{ input: './images/robo.jpeg', left: 900, top: 750 }])
		.toFile(__dirname + '/processed_images/composite_robo.jpeg');
};

compositeImage();
