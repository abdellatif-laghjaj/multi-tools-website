const services = document.getElementById('services');
const services_container = services.querySelector('.services-container');


SERVICES_DATA.forEach(service => {
    services_container.innerHTML += `
        <div class="service-card">
            <img src="${service.image}" alt="${service.title}">
            <h4>${service.title}</h4>
            <p>
                ${service.description}
            </p>
        </div>
    `;
});