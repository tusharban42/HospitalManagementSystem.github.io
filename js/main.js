const firebaseConfig = {
    apiKey: "AIzaSyBdLtiHLz2iFiQC0eo7tdswstTGDS_SrCs",
    authDomain: "hospital-management-a2e5e.firebaseapp.com",
    projectId: "hospital-management-a2e5e",
    storageBucket: "hospital-management-a2e5e.appspot.com",
    messagingSenderId: "707351015292",
    appId: "1:707351015292:web:7b06e97e67ec22af637ef9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var database = firebase.database()

var name, email, phone, date, age, doctor, message;

function Ready() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  phone = document.getElementById('phone').value;
  date = document.getElementById('date').value;
  age = document.getElementById('age').value;
  doctor = document.getElementById('doctor').value;
  message = document.getElementById('message').value;

  database.ref('Doctor_Appt').set({
    PatientName: name,
    email: email,
    phone: phone,
    date: date,
    age: age,
    DoctorName: doctor,
    message: message
  })
}