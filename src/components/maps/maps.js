function initMap() {
    var location = { lat: -7.67522033805875, lng: -41.87884276754277 };// Definir a localização (exemplo com a latitude e longitude de São Paulo)

    // Cria o mapa
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Nível de zoom
        center: location, // Definir o centro do mapa
    });

    // Adicionar um marcador no mapa
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Club Canto do alto", // Texto que aparece ao passar o mouse sobre o marcador
    });

}
