document.addEventListener('DOMContentLoaded', function () {
    const coordenadas = {
        lat: -7.67522033805875, 
        lng: -41.87884276754277
    };

    const map = L.map('map').setView([coordenadas.lat, coordenadas.lng], 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([coordenadas.lat, coordenadas.lng])
        .addTo(map)
        .bindPopup('Clique no mapa para abrir a navegação.')
        .openPopup();

    map.on('click', function () {
        const confirmar = confirm('Você deseja abrir o aplicativo de mapas para seguir a rota?');
        if (confirmar) {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${coordenadas.lat},${coordenadas.lng}`;
            window.open(url, '_blank');
        } else {
            alert('Redirecionamento cancelado!');
        }
    });
});
