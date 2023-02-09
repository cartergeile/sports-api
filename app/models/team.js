const mongoose = require('mongoose')

// TEAM -> has a name, type, rank, canJoin(boolean)
// eventually each team will have a players array
// will use virtuals to produce additional data on each team

const TeamSchema = new mongoose.Schema(
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
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			// include virtuals
			toObject: { virtuals: true },
			toJSON: {virtuals: true }
		},
	},
	{
		timestamps: true,
	}
)

// virtuals go here

module.exports = mongoose.model('Team', TeamSchema)
