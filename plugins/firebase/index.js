import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config.js'

!firebase.apps.length ? firebase.initializeApp(config) : ''

const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true
}

firestore.settings(settings)

export const auth = firebase.auth()
export const db = firestore