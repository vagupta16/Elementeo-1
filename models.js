var Sequelize = require('sequelize');

var sequelize = new Sequelize('database', 'vgupta', 'hello', {
	dialect: 'postgres'
});

var elementCard = sequelize.define('elementCard', {
  element: Sequelize.STRING,
  symbol: Sequelize.STRING,
  name: Sequelize.STRING,
  atomicNumber: Sequelize.INTEGER,
  type: Sequelize.STRING,
  atomicWeight: Sequelize.FLOAT,
  description: Sequelize.STRING,
  state: Sequelize.STRING,
  statePicture: Sequelize.STRING,
  oxidation: Sequelize.INTEGER,
  oxidationPicture: Sequelize.STRING,
  cardPicture: Sequelize.STRING,
});

elementCard
	.sync()
	.on('success', function () {
		elementCard.create({
			element: 'Hydrogen', 
			symbol: 'H', 
			name: 'Princess', 
			atomicNumber: 1, 
			type: 'Non-metal', 
			atomicWeight: 1.01, 
  			description: 'Hydrogen may be the lightest element, but her fiery kingdom holds three fourths of the universe by weight. Who would have thought that just one proton and electron could take over the world?', 
  			state: 'gas', 
  			cardPicture: '/public/images/Elements/BlueElement1.jpg'
		});
	})
	.on('error', function (e) {
		console.log('Something went wrong!', e)
	});

exports.elementCard = elementCard;