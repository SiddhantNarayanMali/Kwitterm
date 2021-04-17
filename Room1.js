
 // Your web app's Firebase configuration
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

  User = localStorage.getItem("Username");
  document.getElementById("welcome").innerHTML = "Welcome "+User+"!";
  function rooming()
  {
        Roomname = document.getElementById("Roomname").value;
        firebase.database().ref("/").child(Roomname).update({
              purpose: "adding room in kwitter"
        });

        localStorage.setItem("room", Roomname);
        window.location = "Page.html";

        
  }

  function getData() {firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(
            function(childSnapshot) {childKey =
  childSnapshot.key;
   Rooms = childKey;
   //Start code
   console.log("roomname - "+Rooms);
   Row = "<div class='Roomname' id="+Rooms+" onclick='redirect(this.id)'>#"+Rooms+"</div>"
   document.getElementById("output").innerHTML += Row;
   //End code
                  });
            });
      }
  getData();

  function redirect(PS)
  {
      console.log(PS);
      localStorage.setItem("room", PS);

      window.location = "Page.html";
  }

  function logout()
  {
        localStorage.removeItem("Username");
        localStorage.removeItem("room");

        window.location.replace("index.html");
  }
  