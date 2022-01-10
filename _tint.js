const sharp = require('sharp')

const tintImage = () =>
  sharp('./images/robo.jpeg')
    .tint({ r: 255, g: 0, b: 0 })
    .toFile(__dirname + '/processed_images/tint_robo.jpeg')

tintImage()
