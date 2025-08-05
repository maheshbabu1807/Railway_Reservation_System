document.getElementById('viewTrains').addEventListener('click', fetchTrains);

function fetchTrains() {
  fetch('http://localhost:8080')
    .then(response => response.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('output').innerHTML = 'Error fetching train data.';
    });
}
