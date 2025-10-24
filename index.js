let date = new Date();
let dateelement = document.getElementById("date");
dateelement.innerHTML = date.toDateString();

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  
  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

async function fetchIPAddress() {
        try {
            
            const response = await fetch('https://api.ipify.org?format=json');
        
            
            const data = await response.json();
            const ip = data.ip;
            
        
            document.getElementById('your-ip').textContent = `Your IP☠️: ${ip}`;
            
        } catch (error) {
           
            console.error('Failed to fetch IP address:', error);
            document.getElementById('your-ip').textContent = 'Could not load IP☠️';
        }
    }
    
    
    fetchIPAddress();

     function showPosition(position) {
        const locationElement = document.getElementById('location');
        const lat = position.coords.latitude.toFixed(4); 
        const lon = position.coords.longitude.toFixed(4);
        locationElement.textContent = `Your Pinpoint Location: Lat: ${lat}, Lon: ${lon}`;
    }

     const secretCode = "1234"; // 
    const input = document.getElementById("secretInput");
    const videoBox = document.getElementById("videoBox");

    input.addEventListener("input", () => {
      if (input.value === secretCode) {
        videoBox.style.display = "block";
      } else {
        videoBox.style.display = "none";
      }
    });
