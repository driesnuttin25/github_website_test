document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById('humidityChart').getContext('2d');
  var humidityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [new Date(), new Date(Date.now() + 60000), new Date(Date.now() + 120000)], // Example time labels
      datasets: [{
        label: 'Humidity',
        data: [10, 20, 30], // Example humidity data
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
            unit: 'minute'
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
});
