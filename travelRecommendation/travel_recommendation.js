let travelData = [];

// Fetch Data from JSON File
fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log("Data Loaded:", travelData); // Debugging
    })
    .catch(error => console.error("Error fetching data:", error));

// Search Function
function search() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    
    let results = travelData.filter(place => 
        place.type.toLowerCase().includes(keyword)
    );

    displayResults(results);
}

// Display Results
function displayResults(results) {
    let container = document.getElementById("recommendations");
    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = "<p>No results found.</p>";
    } else {
        results.forEach(place => {
            container.innerHTML += `
                <div class="result-item">
                    <h3>${place.name}</h3>
                    <img src="${place.imageUrl}" alt="${place.name}">
                    <p>${place.description}</p>
                </div>
            `;
        });
    }
}

// Clear Results
function clearResults() {
    document.getElementById("searchInput").value = "";
    document.getElementById("recommendations").innerHTML = "<p>Find your next destination!</p>";
}

// Display Local Time for a Country
function showTimeZone(city, timeZone) {
    const options = { timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const localTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in ${city}: ${localTime}");
}

// Example usage (Modify based on user searches)
showTimeZone("New York", "America/New_York");
showTimeZone("Tokyo", "Asia/Tokyo");
