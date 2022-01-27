const projectList = document.querySelector('#card-deck');


//create element and render projects

function renderProjects(doc){
    let colDiv = document.createElement('div');
        colDiv.className = "col-md-3 col-sm-6";
        colDiv.setAttribute('data-id', doc.id)

    let cardDiv =document.createElement('div');
        cardDiv.className="card shadow";
    
    let cardImg = document.createElement('img');
        cardImg.className = "card-img-top";
        cardImg.setAttribute('src', doc.data().fileUrls[Math.floor(Math.random() *doc.data().fileUrls.length)])

    let cardBody = document.createElement('div');
        cardBody.className = "card-body";


    let cardTittle = document.createElement('h5');
        cardTittle.className = "card-title";
       cardTittle.innerText=doc.data().pname




    let cardAdress = document.createElement('p');
        cardAdress.className = "card-text lol";
        cardAdress.innerText=doc.data().adress

    let adressIcon = document.createElement('img');
        adressIcon.setAttribute ("src","./assets/img/icons/geo-alt-fill.svg");



    let cardAwardees = document.createElement('p');
        cardAwardees.className = "card-text";
        cardAwardees.innerText=doc.data().awardees;

    let awardeesIcon = document.createElement('img');
        awardeesIcon.setAttribute ("src","./assets/img/icons/people-fill.svg");



    let cardWorth = document.createElement('span');
        cardWorth.className = "contiii";
        cardWorth.innerText=doc.data().worth

    let worthIcon = document.createElement('img');
        worthIcon.setAttribute ("src","./assets/img/icons/coin.svg");



    let cardDate = document.createElement('span');
        cardDate.className = "contiii";
        cardDate.innerText=doc.data().date

    let dateIcon = document.createElement('img');
        dateIcon.setAttribute ("src","./assets/img/icons/calendar-event-fill.svg");
    
    
    let cardLink = document.createElement('a');

    let linkButton = document.createElement('button');
        linkButton.className="btn btn-primary idbtn";
        linkButton.innerText="See More"
        linkButton.setAttribute('id', doc.id)
        linkButton.onclick=()=>{
            localStorage.setItem('fileUrls', JSON.stringify(doc.data().fileUrls));
            localStorage.setItem('pname', JSON.stringify(doc.data().pname));
            localStorage.setItem('adress', JSON.stringify(doc.data().adress));
            window.location.href="gallery.html"
        }


    let cardFooter = document.createElement('div')
        cardFooter.className="card-footer"

    let footNote = document.createElement("small")
    footNote.className="text-muted"
    footNote.innerText=`${doc.data().fileUrls.length} Images/videos`

    //appending children
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardImg)
    cardDiv.appendChild(cardBody)
        cardBody.appendChild(cardTittle)
        cardBody.appendChild(cardAdress)
            cardAdress.appendChild(adressIcon)
        cardBody.appendChild(cardAwardees)
            cardAwardees.appendChild(awardeesIcon)
        cardBody.appendChild(cardWorth)
            cardWorth.appendChild(worthIcon)
        cardBody.appendChild(cardDate)
            cardDate.appendChild(dateIcon)
        cardBody.appendChild(cardLink)
            cardLink.appendChild(linkButton)
        cardBody.appendChild(cardFooter)
            cardFooter.appendChild(footNote)

    projectList.appendChild(colDiv)
}




db.collection('projects').get().then(
    (snapshot)=>{
        snapshot.docs.forEach(doc => {
            renderProjects(doc)
        });
    }
) 

function renderGalery(projectId) {
    alert(projectId)
};

