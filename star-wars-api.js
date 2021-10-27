(function(){
    "use strict";

    //jQuery
    let $ = (x) => document.querySelector(x);

    let $form = $(".charactersForm");
    let $selection = $(".selectionCharacters");




    $form.addEventListener("submit", (evt) => {
        
        evt.preventDefault();


        getChar($selection.value)
        .then((infos) => {
            putOnDom(infos)
        })
        .catch((erro) => {
            console.log(erro);
        })
    
    })


    async function getChar(id) {

        let url = `https://swapi.dev/api/people/${id}/`

        let promise = await fetch(url);
        
        if (!promise.ok) {
            throw new Error(`Api bulunamadı"`)
        }

        let response = await promise.json()

        return response;

    }


    let putOnDom = (infos) => {
        let divInTheDOM = $(".icerik")
    
        divInTheDOM.innerHTML = `

        <ul>
            <li>Name:
                <span>${infos.name}</span>
            </li>

            <li>Height:
                <span>${infos.height}</span>
            </li>

            <li>Mass: 
                <span>${infos.mass}</span>
            </li>           

            <li>Hair Color:
            <span>${infos.hair_color}</span>
            </li>

            <li>Skin Color:
            <span>${infos.skin_color}</span>
            </li>

            <li>Eye Color:
            <span>${infos.eye_color}</span>
            </li>

            <li>
                Birth Year:
                <span>${infos.birth_year}</span>
            </li>

            <li>Gender:
                <span>${infos.gender}</span>
            </li>

          
    
        </ul>
        
        `

    }

  
    

})()