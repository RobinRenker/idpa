const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendWelcomeEmail = functions.auth.user().onCreate(function (event) {
    var uid = event.data.uid;
    var displayName = event.data.displayName;



    admin.firestore().collection("users").add({
        first: "HURE TEST",
        last: "SOHN",
        uid: uid,
        username: displayName
    });


});