const sharp = require('sharp');

const addText = () => {
	const width = 90;
	const height = 50;
	const text = 'E.T, go home';

	const svgText = `
  <svg width="${width}" height="${height}">
    <style>
      .title { fill: red; font-size: 85px}
    </style>
    <text x="45%" y="40%" text-anchor="middle" class="title">${text}</text>
  </svg>`;

	const svgBuffer = Buffer.from(svgText);

	sharp('./images/robo.jpeg')
		.composite([{ input: svgBuffer, left: 50, top: 50 }])
		.toFile(__dirname + '/processed_images/text_robo.jpeg');
};

addText();
