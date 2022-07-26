function returnApi() {
  
  let random = Math.floor((Math.random() * 61) + 1)
  
  axios.get('https://swapi.dev/api/planets/' + random).then(function(response){
    console.log(response.data)

      let name = document.querySelector('#name')
      let rotation_period = document.querySelector('#rotation_period')
      let orbital_period = document.querySelector('#orbital_period')
      let diameter = document.querySelector('#diameter')
      let climate = document.querySelector('#climate')
      let gravity = document.querySelector('#gravity')
      let terrain = document.querySelector('#terrain')
      let surface_water = document.querySelector('#surface_water')
      let population = document.querySelector('#population')

      name.innerText = response.data.name
      rotation_period.innerText = `Período de rotação: ${response.data.rotation_period}`
      orbital_period.innerText = `Período orbital: ${response.data.orbital_period}`
      diameter.innerText = `Diâmetro: ${response.data.diameter}`
      climate.innerText = `Clima: ${response.data.climate}`
      gravity.innerText = `Gravidade: ${response.data.gravity}`
      terrain.innerText = `Terreno: ${response.data.terrain}`
      surface_water.innerText = `Água da superfície: ${response.data.surface_water}`
      population.innerText = `População: ${response.data.population}`
  

    })
}