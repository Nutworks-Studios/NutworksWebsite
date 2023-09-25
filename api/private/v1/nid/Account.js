import { app } from "https://nutworks.neocities.org/api/firebase/firebase.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const auth = getAuth(app);

function DoLogin(email, password)
{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return JSON.stringify({"success":true, "user": {"id":user.id, "displayName":user.displayName, "phoneNumber":user.phoneNumber, "photoURI":user.photoURL}});
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

function DoSignup(email, password)
{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        return JSON.stringify({"success":true, "user": {"id":user.id, "displayName":user.displayName, "phoneNumber":user.phoneNumber, "photoURI":user.photoURL}});
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return JSON.stringify({"success":false,"message":errorMessage,"code":errorCode,});
    });
}

function LogOut()
{
    signOut(auth).then(() => {
        return JSON.stringify({"success":true});
    }).catch((error) => {
        return JSON.stringify({"success":false, "errorCode":error.code});
    });
}

function CheckIsLoggedIn()
{
    const user = auth.currentUser;

    if (user) {
        return JSON.stringify({"success":true});
    } else {
        return JSON.stringify({"success":false});
    }
}

function GetAccount()
{
    const user = auth.currentUser;
    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        const uid = user.uid;
    }
}

function ChangeEmail(email)
{
    updateEmail(auth.currentUser, email).then(() => {
        SendVerification(email);
        return JSON.stringify({"success":true});
    }).catch((error) => {
        return JSON.stringify({"success":false, "errorCode":error.code});
    });
}

function SendVerification(email)
{
    sendEmailVerification(auth.currentUser)
    .then(() => {
        return JSON.stringify({"success":true}); 
    }).catch(() => {
        return JSON.stringify({"success":false});
    });
}