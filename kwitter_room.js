
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC8Lt7RfKtl3n39S9XA9lrzjZ5-3c3-UJE",
      authDomain: "blah-blah-blah-35525.firebaseapp.com",
      databaseURL: "https://blah-blah-blah-35525-default-rtdb.firebaseio.com",
      projectId: "blah-blah-blah-35525",
      storageBucket: "blah-blah-blah-35525.appspot.com",
      messagingSenderId: "1088130203111",
      appId: "1:1088130203111:web:bd413912e9a1fb721e9142",
      measurementId: "G-ET631Q3FLS"
    };
firebase.initializeApp(firebaseConfig)
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function AddARoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"To Add Ze Room"});
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
      
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("The Name Of The Room Is "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function logout(){
      window.location="index.html"
}


function redirectToRoomName(name) {
      console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
