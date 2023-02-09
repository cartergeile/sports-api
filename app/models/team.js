const mongoose = require('mongoose')

const playerSchema = require('./player')

// TEAM -> has a name, type, rank, canJoin(boolean)
// eventually each team will have a players array
// will use virtuals to produce additional data on each team

const teamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		rank: {
			type: Number,
			required: true
		},
		joinable: {
			type: Boolean,
			required: true
		},
		players: [playerSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
		// include virtuals
		toObject: { virtuals: true },
		toJSON: { virtuals: true }
	}
)

// virtuals go here
teamSchema.virtual('fullTitle').get(function () {
	return `The ${this.name} are a ${this.type} team`
})

module.exports = mongoose.model('Team', teamSchema)
