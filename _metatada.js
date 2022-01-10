const sharp = require('sharp')

const imageMetadata = async () => {
  const metadata = await sharp('./images/robo.jpeg').metadata()

  console.info(metadata)
}

imageMetadata()
