const sharp = require('sharp');

const resizeImage = async () => {
  const resize =
    await sharp('./images/robo.jpeg')
            .resize(350, 260)
            .toFile(__dirname + '/processed_images/resize_robo.jpeg');

	console.info(resize);
};

resizeImage();
