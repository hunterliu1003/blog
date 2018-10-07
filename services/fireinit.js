const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')

const config = require('../firebase.config.js')

!firebase.apps.length ? firebase.initializeApp(config) : ''

const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings)

module.exports = {
  auth: firebase.auth(),
  db: firestore
}
