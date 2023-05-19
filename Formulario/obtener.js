
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCqNvZMTLyG4U2UmpVfvP3OChtJVgxM0mU",
      authDomain: "educarte-3bc4b.firebaseapp.com",
      projectId: "educarte-3bc4b",
      storageBucket: "educarte-3bc4b.appspot.com",
      messagingSenderId: "175450238774",
      appId: "1:175450238774:web:a5a261932cf3d07ade8d97"

      // Initialize Cloud Firestore and get a reference to the service
    };

        // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    var db = firebase.firestore();

    const guardarDatos = (user) => {
    db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
      mensajeExitoso();
    })
    .catch((error) => {
      mensajeError();
    });
  }

  const mensajeExitoso = () => {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

  const mensajeError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  