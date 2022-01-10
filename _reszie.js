const sharp = require('sharp');

const formatImage = async () => {
	sharp('./images/fall.jpeg')
		.toFormat('png', { palette: true })
		.toFile(__dirname + '/processed_images/format_fall.png');
};

formatImage();
