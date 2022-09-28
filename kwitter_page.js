//YOUR FIREBASE LINKS
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

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}



function zend() {
      msg=document.getElementById("Message").value;
 firebase.database().ref(room_name).push({
      name:user_name,
      message: msg,
      like:0
 });
 document.getElementById("Message").value="";

}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log (firebase_message_id);
      console.log (message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];
      name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML +=row;
   } });  }); }
getData();

function updateLike(message_id) {
      console.log (message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
      
}