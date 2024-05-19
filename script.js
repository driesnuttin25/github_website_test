// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCWSBStmBWQA8IzZtEyxeb2tco0xXVhpsg",
  authDomain: "project-katara.firebaseapp.com",
  projectId: "project-katara",
  storageBucket: "project-katara.appspot.com",
  messagingSenderId: "7288655338",
  appId: "1:7288655338:web:06b74e8aa116e677a07693"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById('humidityChart').getContext('2d');
  var humidityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // Time labels
      datasets: [{
        label: 'Humidity',
        data: [], // Humidity data
        backgroundColor: 'rgba(0, 150, 136, 0.2)',
        borderColor: 'rgba(0, 150, 136, 1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'minute',
            stepSize: 5, // Adjusted step size to handle a wider range of dates
            displayFormats: {
              minute: 'HH:mm'
            }
          },
          title: {
            display: true,
            text: 'Time'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Humidity (%)'
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });

  // Fetch data from Firestore
  db.collection("humidity").orderBy("createTime").onSnapshot((querySnapshot) => {
    var labels = [];
    var data = [];
    querySnapshot.forEach((doc) => {
      var createTime = doc.data().createTime;
      if (createTime && createTime.seconds && createTime.seconds > 1000000000) { // Ignore timestamps before ~2001
        var timestamp = createTime.seconds * 1000;
        labels.push(new Date(timestamp));
        data.push(doc.data().humidity);
      }
    });

    if (labels.length > 0 && data.length > 0) {
      humidityChart.data.labels = labels;
      humidityChart.data.datasets[0].data = data;
      humidityChart.update();
    }
  });
});
