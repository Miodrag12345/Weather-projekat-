export function getUserLocation() {
    let userLocation = "";

    while (userLocation === null || userLocation.trim() === "") {
        userLocation = prompt("Unesite ime grada vašeg");
    }

    return userLocation;
}

