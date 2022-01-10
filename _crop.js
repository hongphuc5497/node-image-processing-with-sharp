const sharp = require('sharp');

const cropImage = () => {
	sharp('./images/robo.jpeg')
		.extract({ left: 740, width: 500, height: 300, top: 340 })
		.toFile(__dirname + '/processed_images/crop_robo.jpeg');
};

cropImage();
