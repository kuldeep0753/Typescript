console.log("working");
// Get the button element by its ID
const button = document.getElementById("myButton");
// Add a click event listener
button.addEventListener("click", function () {
  alert("Button clicked!");
});

//----------Hover over me
  const div = document.getElementById('myDiv');

  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = 'yellow';
  });

  div.addEventListener('mouseout', function() {
    div.style.backgroundColor = 'red';
  });

  //--------Input
 
  const input = document.getElementById('myInput');

  input.addEventListener('keyup', function(event) {
    console.log(`Key pressed: ${event.key}`);
  });

  //----form event---

  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted!');
    // You can access form data and perform validation here
  });

  //====On Page Load-----
 
  window.addEventListener('load', function() {
    console.log('Page loaded!');
    // You can perform actions after the page has fully loaded
  });

  
// custom button
  const cbutton = document.getElementById('customButton');

cbutton.addEventListener('click', function () {
      console.log("hcek")
    const customEvent = new Event('customEvent');
    button.dispatchEvent(customEvent);
  });

  cbutton.addEventListener('customEvent', function() {
    alert('Custom event triggered!');
  });
  //----------------------==============********************
  // Simulate fetching telemetry data from an API
function fetchTelemetryData(vehicleId) {
  return new Promise((resolve, reject) => {
    // Simulate an HTTP request to an API endpoint
    setTimeout(() => {
      const randomSpeed = Math.random() * 100; // Simulated telemetry data
      resolve({ vehicleId, speed: randomSpeed });
    }, 1000); // Simulate a 1-second delay
  });
}

// Async function to fetch telemetry data for multiple vehicles
async function fetchTelemetryForMultipleVehicles(vehicleIds) {
  try {
    const telemetryData = await Promise.all(
      vehicleIds.map((vehicleId) => fetchTelemetryData(vehicleId))
    );

    console.log('Telemetry Data:');
    telemetryData.forEach((data) => {
      console.log(`Vehicle ID: ${data.vehicleId}, Speed: ${data.speed} km/h`);
    });
  } catch (error) {
    console.error('Error fetching telemetry data:', error);
  }
}

const vehicleIds = [1, 2, 3, 4, 5];

fetchTelemetryForMultipleVehicles(vehicleIds);




