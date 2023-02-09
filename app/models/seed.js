// run by the script with `npm run seed`

const mongoose = require('mongoose')
const Team = require('./team')
const db = require('../../config/db')

const startTeams = [
  { name: 'Cardinals', type: 'baseball', rank: 1, joinable: false},
  { name: 'Blues', type: 'hockey', rank: 12, joinable: false},
  { name: 'Vikings', type: 'football', rank: 5, joinable: true},
  { name: 'Chiefs', type: 'football', rank: 1, joinable: false}
]

// connect to db
// remove all teams
// add start teams
// always close connection

mongoose.connect(db, {
  useNewUrlParser: true
})
  .then(() => {
    Team.deleteMany()
      .then(deletedTeams => {
        console.log('the deleted teams: ', deletedTeams)
        Team.create(startTeams)
          .then(newTeams => {
            console.log('the new teams:', newTeams)
            mongoose.connection.close()
          })
          .catch(error => {
            console.log(error)
            mongoose.connection.close()
          })
      })
      .catch(error => {
        console.log(error)
        mongoose.connection.close()
      })
  })
  .catch(error => {
    console.log(error)
    mongoose.connection.close()
  })