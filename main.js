const container = document.getElementById('superherodex')
 

const fetchSuperheros =  async () => {
    for(let i=1;i<=731;i++) {
      await getSuperhero(i);
    }
}

const getSuperhero = async id => {
  try {
  const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`
  const res = await fetch(url)
  const superhero = await res.json()
  createCard(superhero)
  } catch(err) {
    console.log(err)
  }
}

const createCard = (superhero) => {
  console.log(superhero)

  const superheroCard = document.createElement('div')
  
  const pic = superhero.images.sm
  const bio = superhero.biography
  const strength = superhero.powerstats.strength
  const power = superhero.powerstats.power
  const combat = superhero.powerstats.combat

  


  const superInnerHTML =  `
    <li class="card"> 
      <img class="card-image" src="${pic}"/>
      <h2 class="card-name"> ${superhero.name} </h2>
      <h4 class="card-stats">
        <div class="strength"> Strength: ${strength}</div>
        <div class="power"> Power: ${power}</div>
        <div class="power"> Combat: ${combat}</div>
      </h4>
      <p class= "card-publisher">  Publisher: ${bio.publisher}</p>
    </li>
  `
  
  superheroCard.innerHTML = superInnerHTML
  container.appendChild(superheroCard)
  
} 




fetchSuperheros()




