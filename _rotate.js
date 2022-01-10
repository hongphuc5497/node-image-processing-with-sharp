const sharp = require('sharp')

const rotateImage = () => {
  sharp('./images/robo.jpeg')
    .rotate(250)
    .toFile(__dirname + '/processed_images/rotate_robo.jpeg')
}

rotateImage()
