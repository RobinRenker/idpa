const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user().onCreate(function (event) {
    var uid = event.data.uid;
    var displayName = event.data.displayName;

    var newUserRef = admin.firestore().collection("users").doc(uid);

    newUserRef.set({
        uid: uid,
        username: displayName
    });

    return true;


});