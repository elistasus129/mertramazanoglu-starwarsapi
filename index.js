const showCharacters = document.getElementById("showCharacters");
showCharacters.addEventListener("click", handleClick);
function handleClick(){
    fetch('https://swapi.dev/api/people/').then(response => response.json()).then(data => renderCharacters(data.results))
}

function renderCharacters(characters){
    const characterDiv = document.querySelector('#starwars-collection')
    
    characters.forEach(character => {
    characterDiv.append(buildCharacterElement(character))
  });
}

function buildCharacterElement(character) {
    
    const div = document.createElement('div')
    div.className = "col-md-2 renk";
    const name = document.createElement('h2')
    name.innerHTML = character.name;

    const height = document.createElement('p')
    height.innerHTML = `Height: ${character.height}`;

    const mass = document.createElement('p')
    mass.innerHTML = `Mass: ${character.mass}`;

    const hainColor = document.createElement('p')
    hainColor.innerHTML = `Hain Color: ${character.hainColor}`;

    const skinColor = document.createElement('p')
    skinColor.innerHTML = `Skin Color: ${character.skin_color}`;

    const eyeColor = document.createElement('p')
    eyeColor.innerHTML = `Eye Color: ${character.eyeColor}`;

    const birthyear = document.createElement('p')
    birthyear.innerHTML = `Birth Year : ${character.birthyear}`;

    const gender = document.createElement('p')
    gender.innerHTML = `Gender: ${character.gender}`;   
  
    div.append(name, height, mass,hainColor,skinColor,eyeColor,birthyear,gender);
    return div
  }

