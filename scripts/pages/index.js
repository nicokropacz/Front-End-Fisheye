    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
     

        var myHeaders = new Headers();

        var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
             };

        var myRequest = new Request ('./data/photographers.json', myInit);


     return fetch (myRequest, myInit).then(data => {

         if(data.ok){
            console.log(data.body.json()); 
            return data.json(); 

          }
   
        }).then(data => {
            console.log(data)
            return data
        }).catch(error => console.log(error))
    
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    