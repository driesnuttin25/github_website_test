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
  var moistureCtx = document.getElementById('moistureChart').getContext('2d');
  var temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
  var conductivityCtx = document.getElementById('conductivityChart').getContext('2d');

  var chartConfig = {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'minute',
            stepSize: 5,
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
            text: 'Value'
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  };

  var moistureChart = new Chart(moistureCtx, {
    ...chartConfig,
    data: {
      labels: [],
      datasets: [{
        label: 'Moisture',
        data: [],
        backgroundColor: 'rgba(0, 150, 136, 0.2)',
        borderColor: 'rgba(0, 150, 136, 1)',
        borderWidth: 2,
        fill: true
      }]
    }
  });

  var temperatureChart = new Chart(temperatureCtx, {
    ...chartConfig,
    data: {
      labels: [],
      datasets: [{
        label: 'Temperature',
        data: [],
        backgroundColor: 'rgba(0, 100, 50, 0.2)',
        borderColor: 'rgba(0, 100, 50, 1)',
        borderWidth: 2,
        fill: true
      }]
    }
  });

  var conductivityChart = new Chart(conductivityCtx, {
    ...chartConfig,
    data: {
      labels: [],
      datasets: [{
        label: 'Conductivity',
        data: [],
        backgroundColor: 'rgba(0, 50, 25, 0.2)',
        borderColor: 'rgba(0, 50, 25, 1)',
        borderWidth: 2,
        fill: true
      }]
    }
  });

  db.collection("sensorData").orderBy("createTime").onSnapshot((querySnapshot) => {
    var moistureLabels = [];
    var moistureData = [];
    var temperatureLabels = [];
    var temperatureData = [];
    var conductivityLabels = [];
    var conductivityData = [];
    
    querySnapshot.forEach((doc) => {
      var createTime = doc.data().createTime;
      if (createTime && createTime.seconds && createTime.seconds > 1000000000) { // Ignore timestamps before ~2001
        var timestamp = createTime.seconds * 1000;
        var moisture = doc.data().moisture;
        var temperature = doc.data().temperature;
        var conductivity = doc.data().conductivity;
        
        if (moisture != null) {
          moistureLabels.push(new Date(timestamp));
          moistureData.push(moisture);
        }
        if (temperature != null) {
          temperatureLabels.push(new Date(timestamp));
          temperatureData.push(temperature);
        }
        if (conductivity != null) {
          conductivityLabels.push(new Date(timestamp));
          conductivityData.push(conductivity);
        }
      }
    });

    // Update Moisture Chart
    if (moistureLabels.length > 0 && moistureData.length > 0) {
      moistureChart.data.labels = moistureLabels;
      moistureChart.data.datasets[0].data = moistureData;
      moistureChart.update();
    }

    // Update Temperature Chart
    if (temperatureLabels.length > 0 && temperatureData.length > 0) {
      temperatureChart.data.labels = temperatureLabels;
      temperatureChart.data.datasets[0].data = temperatureData;
      temperatureChart.update();
    }

    // Update Conductivity Chart
    if (conductivityLabels.length > 0 && conductivityData.length > 0) {
      conductivityChart.data.labels = conductivityLabels;
      conductivityChart.data.datasets[0].data = conductivityData;
      conductivityChart.update();
    }
  });

  // Plant selection event
  document.getElementById('plant-select').addEventListener('change', function() {
    var selectedPlant = this.value;
    console.log("Selected plant:", selectedPlant);
    // Add any additional functionality for selected plant here
  });
});
