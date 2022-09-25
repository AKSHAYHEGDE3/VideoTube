import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    setDoc,doc,
    getDocs,
    collection,
    where,
    addDoc,useCollection
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtcGuHJRLVHhYHt7I1haTll9OSP9uqJLs",
    authDomain: "videotube3-18a09.firebaseapp.com",
    projectId: "videotube3-18a09",
    storageBucket: "videotube3-18a09.appspot.com",
    messagingSenderId: "747756331315",
    appId: "1:747756331315:web:d79391dc0bb3f81b631e46",
    measurementId: "G-V26T0N22EW"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signinWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        // console.error(err);
        const error = err.message;
        return error;
    }
};

const getAllUsers = async () => {
    const users =[]
    const querySnapshot = await getDocs(collection(db, "users"));
    //console.log(querySnapshot)
    querySnapshot.forEach(doc => {
        // console.log(doc.data());
        users = users.concat(doc.data());
        
    })
    return users
    
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // await addDoc(collection(db, "users",user.email), {
            await setDoc(doc(db, "users",user.email), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

    } catch (err) {
        // console.error(err);
        alert(err.message);

    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,collection,where,query,setDoc,doc,addDoc,getDocs,
    signinWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getAllUsers
};

export default app;