// const API_BASE = "http://localhost:8080"; // Update this after Java backend is ready
const API_BASE = "http://localhost:8080";
function viewTrains() {
  fetch(`${API_BASE}/trains`)
    .then(res => res.json())
    .then(data => {
      const html = data.map(train => `
        <div>
          ${train.trainNumber} - ${train.trainName} (${train.source} to ${train.destination}) | Seats: ${train.seatsAvailable}
        </div>`).join("");
      document.getElementById("content").innerHTML = html;
    });
}

function showBookingForm() {
  document.getElementById("content").innerHTML = `
    <h3>Book Ticket</h3>
    <input id="name" placeholder="Your Name" />
    <input id="train" placeholder="Train Number" />
    <button onclick="bookTicket()">Book</button>
  `;
}

function bookTicket() {
  const name = document.getElementById("name").value;
  const trainNumber = parseInt(document.getElementById("train").value);
  fetch(`${API_BASE}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ passengerName: name, trainNumber })
  })
  .then(res => res.text())
  .then(msg => alert(msg));
}

function showCancelForm() {
  document.getElementById("content").innerHTML = `
    <h3>Cancel Ticket</h3>
    <input id="cancelId" placeholder="Booking ID" />
    <button onclick="cancelTicket()">Cancel</button>
  `;
}

function cancelTicket() {
  const bookingId = parseInt(document.getElementById("cancelId").value);
  fetch(`${API_BASE}/cancel/${bookingId}`, { method: "DELETE" })
    .then(res => res.text())
    .then(msg => alert(msg));
}

function viewBookings() {
  fetch(`${API_BASE}/bookings`)
    .then(res => res.json())
    .then(data => {
      const html = data.map(b => `
        <div>Booking ID: ${b.bookingId}, Name: ${b.passengerName}, Train: ${b.trainNumber}</div>
      `).join("");
      document.getElementById("content").innerHTML = html;
    });
}

