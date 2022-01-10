const sharp = require('sharp')

const sharpenImage = () => {
  sharp ('./images/fall.jpeg')
  .sharpen(13)
  .toFile(__dirname + '/processed_images/sharpen_fall.jpeg')
}

sharpenImage()