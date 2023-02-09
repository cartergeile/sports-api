
const express = require('express')
const passport = require('passport')
const Team = require('../models/team')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// ROUTES

//POST -> create a player
// POST /players/:teamId
router.post('/players/:teamId', removeBlanks, (req, res, next) => {
  const player = req.body.player
  const teamId = req.params.teamId
  Team.findById(teamId)
    .then(handle404)
    .then(team => {
      team.players.push(player)
      return team.save()
    })
    .then(team => res.status(201).json({ team: team }))
    .catch(next)
})


// PATCH -> update a player
// PATCH /players/:teamId/:playerId
router.patch('/players/:teamId/:playerId', requireToken, removeBlanks, (req, res, next) => {
  // get and save the IDs to variables
  const teamId = req.params.teamId
  const playerId = req.params.playerId

  Team.findById(teamId)
    .then(handle404)
    .then(team => {
      const thePlayer = team.players.id(playerId)
      //requireOwnership(req, team)
      thePlayer.set(req.body.player)

      return team.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})


// DELETE -> destroy a player
// DELETE /players/:teamId/:playerId
router.delete('/players/:teamId/:playerId', requireToken, removeBlanks, (req, res, next) => {
  const teamId = req.params.teamId
  const playerId = req.params.playerId

  Team.findById(teamId)
  .then(handle404)
  .then(team => {
    const thePlayer = team.players.id(playerId)
    //requireOwnership(req, team)
    thePlayer.remove()
    return team.save()   
  })
  .then(() => res.sendStatus(204))
  .catch(next)
})


// export router
module.exports = router