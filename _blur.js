const sharp = require('sharp');

const blurImage = () => {
	sharp('./images/fall.jpeg')
		.blur(9)
		.toFile(__dirname + '/processed_images/blur_fall.jpeg');
};

blurImage();
