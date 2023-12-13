/*import { renderCard } from "./component/renderCard";

const container= document.getElementById("divCard");

document.getElementById('formGestion').addEventListener("submit",function(event){
  event.preventDefault();
  
    //por si sale un usuario con snippets
    const formData= new FormData(this);
    const data={};
    formData.forEach((value,key)=>{
      data[key]=value; 
    });
    obtenerDatosDesdeApi(data.ciudad);
})

async function obtenerDatosDesdeApi(city){
  try{
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09e16b8cf249c4538e01612a94f46a3d&units=metric`);
    if(!response.ok){
      throw new Error("Este es el error de fetch");
    }
    const data= await response.json();
    renderCard(container,data);
  }catch{
    throw new Error("Un error grave");
  }
}
*/

import { renderCard } from "./component/renderCard";
const divMain=document.getElementById('divCard');


document.getElementById('formGestion').addEventListener('submit',function(event){
  event.preventDefault();

  const formData= new FormData(this);
  const data={};
  formData.forEach((value,key)=>{
      data[key]=value; 
    });
  getElementAPI(data.ciudad);
});


export function getElementAPI(city){
  return new Promise((resolve,reject)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09e16b8cf249c4538e01612a94f46a3d&units=metric`)
    .then((response=>{
      if(!response.ok){
        throw new Error(`Error en el fecth ${response.status}`);
      }
      return response.json();
    }))
    .then((data2=>{
      renderCard(divMain,data2);
      resolve(data2);  // Resuelve la promesa con los datos
      }))
      .catch((error) => {
        // Manejas cualquier error y lo rechazas
        console.error("Error en la llamada a la API:", error);
        reject(error);
      });
  
  });
}