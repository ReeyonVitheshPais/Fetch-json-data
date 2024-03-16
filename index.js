fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const citiesContainer = document.getElementById('cities');
        data.forEach(city => {
            const cityCard = document.createElement('div');
            cityCard.classList.add('city-card');
            cityCard.innerHTML = `
                <h2>${city.name}</h2>
                <p>State: ${city.state}</p>
                <p>District: ${city.district}</p>
                <p>Population: ${city.population}</p>
                <p>Area: ${city.area} km²</p>
                <p>Location: ${city.location.latitude}, ${city.location.longitude}</p>
            `;
            citiesContainer.appendChild(cityCard);
        });
    })
    .catch(error => {
        const citiesContainer = document.getElementById('cities');
        citiesContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    });