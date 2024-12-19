
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import {getFirestore,setDoc,doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDRUyUBIgpw5nwwo1FJThq3xtSkhlKXexg",
    authDomain: "pzzahut-da3af.firebaseapp.com",
    projectId: "pzzahut-da3af",
    storageBucket: "pzzahut-da3af.firebasestorage.app",
    messagingSenderId: "194311464764",
    appId: "1:194311464764:web:827bc22f5ed126d62c2039"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

  const signUp=document.getElementById('submitSignUp');
  signUp.addEventListener('click', (event)=>{
     event.preventDefault();
     const email=document.getElementById('rEmail').value;
     const password=document.getElementById('rPassword').value;
     const firstName=document.getElementById('fName').value;
     const lastName=document.getElementById('lName').value;
 
     const auth=getAuth();
     const db=getFirestore();
 
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
         const user=userCredential.user;
         const userData={
             email: email,
             firstName: firstName,
             lastName:lastName
         };
         showMessage('Account Created Successfully', 'signUpMessage');
         const docRef=doc(db, "users", user.uid);
         setDoc(docRef,userData)
         .then(()=>{
             window.location.href='index.html';
         })
         .catch((error)=>{
             console.error("error writing document", error);
 
         });
     })
     .catch((error)=>{
         const errorCode=error.code;
         if(errorCode=='auth/email-already-in-use'){
             showMessage('Email Address Already Exists !!!', 'signUpMessage');
         }
         else{
             showMessage('unable to create User', 'signUpMessage');
         }
     })
  });