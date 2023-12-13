// Modifica la función desvanecimiento para aceptar un selector y desvanecer solo ese elemento

import { desvanecimiento } from "./desvanecimiento";


export async function renderCard(container, data) {
    console.log(data.name);
    let icon;
    if (data.weather[0].description === "clear sky") {
        icon = "./assets/images/clear.png";
    } else if (data.weather[0].description == "few clouds") {
        icon = "./assets/images/few.png";
    } else if (data.weather[0].description == "scattered clouds") {
        icon = "./assets/images/nubes.png";
    } else if (data.weather[0].description == "broken clouds") {
        icon = "./assets/images/broken.png";
    } else if (data.weather[0].description == "shower rain") {
        icon = "./assets/images/lluviaS.png";
    } else if (data.weather[0].description == "rain") {
        icon = "./assets/images/rain.png";
    } else if (data.weather[0].description == "thunderstorm") {
        icon = "./assets/images/thunder.png";
    } else if (data.weather[0].description == "snow") {
        icon = "./assets/images/snow.png";
    } else {
        icon = "./assets/images/mist.png";
    }

    const divRender = document.createElement('div');
    divRender.classList.add("card");
    divRender.innerHTML = `
        <img src="${icon}" class="desvanece" alt="imagen">        
        <h1>${data.name}</h1>
        <h2>${data.sys.country}</h2>
        <div class="extra">
            <img src="./assets/images/viento.png" alt="viento">        
            <h4>Velocidad Viento:${data.wind.speed}</h4>
            <img src="./assets/images/humedad.png" alt="humedad">        
            <h4>Humedad:${data.main.humidity}</h4>
        </div>
    `;

    container.appendChild(divRender);

    // Llamada a desvanecimiento solo para el icono recién creado
    await desvanecimiento('.card img.desvanece');
}
