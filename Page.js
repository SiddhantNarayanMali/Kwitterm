var firebaseConfig = {
    apiKey: "AIzaSyCG8W291gKUrkSP9bX5sePS2FJmQr-2wTg",
    authDomain: "enter-your-project-name-ad340.firebaseapp.com",
    databaseURL: "https://enter-your-project-name-ad340-default-rtdb.firebaseio.com",
    projectId: "enter-your-project-name-ad340",
    storageBucket: "enter-your-project-name-ad340.appspot.com",
    messagingSenderId: "442661005053",
    appId: "1:442661005053:web:60eb4fe70c90c05758c094"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Room = localStorage.getItem("room");
Username = localStorage.getItem("Username");

function getData() { firebase.database().ref("/"+Room).on('value', function(snapshot) { document.getElementById("div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    Name = message_data["Name"];
    Message = message_data["Message"];
    Like = message_data["Like"];

    NameTag = "<h4>"+Name+"<img class='user_tick' src='tick.png'></h4> ";
    MessageTag = "<h4 class='message_h4'>"+Message+"</h4>";
    LikeTag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(this.id)'>";
    SpanTag = "<span class='glyphicon glyphicon-thumbs-up'>Like : "+Like+"</span></button><hr>";
    Row = NameTag+MessageTag+LikeTag+SpanTag;
    document.getElementById("div").innerHTML += Row;

} });  }); }
getData();

function send()
{
    Message  =  document.getElementById("message").value;
    firebase.database().ref(Room).push
    (
        {
            Name : Username,
            Message : Message,
            Like : 0
        }
    );
    document.getElementById("message").value 

}

function updateLike(Id)
{
    console.log("Like Button"+Id);
    Like = Id;
    Likes = document.getElementById(Like).value;
    update = Number(Likes)+1;
    console.log(update);
    firebase.database().ref(Room).child(Id).update
    (
            {
                Like : update
            }
    );
}

    
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room");

      window.location.replace("index.html");
}
