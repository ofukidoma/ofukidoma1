const projectList = document.querySelector('#card-deck');
const projects= [
    {
        name :"Donation of K-yan Device",
        id :"4",
        date :"12/343",
        venue :"Ochetoha Ki Doma",
        about :"This project is aimed at enhancing the teaching delivery for schools for the handicaped and the ophanage home",
        image :"./images/22.jpg",
        images :[
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
            "./images/5.jpg",
            "./images/6.jpg",
            "./images/7.jpg",
            "./images/8.jpg",
            "./images/9.jpg",
            "./images/10.jpg",
            "./images/11.jpg",
            "./images/12.jpg",
            "./images/13.jpg",
            "./images/14.jpg",
            "./images/15.jpg",
            "./images/16.jpg",
            "./images/17.jpg",
            "./images/18.jpg",
            "./images/19.jpg",
            "./images/20.jpg",
            "./images/21.jpg",
            "./images/22.jpg",
            "./images/23.jpg",
            "./images/24.jpg",
        ]
    },
    {
        name :"Donation of School Tools and kits",
        id :"1",
        date :"12/343",
        venue :"Ochetoha Ki Doma",
        about :"This project is aimed at providing the basic tools required for accademics for students",
        image :"./images/32.jpg",
        images :[
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
            "./images/5.jpg",
            "./images/6.jpg",
            "./images/7.jpg",
            "./images/8.jpg",
            "./images/9.jpg",
            "./images/10.jpg",
            "./images/11.jpg",
            "./images/12.jpg",
            "./images/13.jpg",
            "./images/14.jpg",
            "./images/15.jpg",
            "./images/16.jpg",
            "./images/17.jpg",
            "./images/18.jpg",
            "./images/19.jpg",
            "./images/20.jpg",
            "./images/21.jpg",
            "./images/22.jpg",
            "./images/23.jpg",
            "./images/24.jpg",
        ]
    },
    {
        name :"Provision of enhanced Farm products",
        id :"2",
        date :"12/343",
        venue :"Ochetoha Ki Doma",
        about :"This poject is aimed at enhancing farming and agriculture in the community",
        image :"./images/24.jpg",
        images :[
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
            "./images/5.jpg",
            "./images/6.jpg",
            "./images/7.jpg",
            "./images/8.jpg",
            "./images/9.jpg",
            "./images/10.jpg",
            "./images/11.jpg",
            "./images/12.jpg",
            "./images/13.jpg",
            "./images/14.jpg",
            "./images/15.jpg",
            "./images/16.jpg",
            "./images/17.jpg",
            "./images/18.jpg",
            "./images/19.jpg",
            "./images/20.jpg",
            "./images/21.jpg",
            "./images/22.jpg",
            "./images/23.jpg",
            "./images/24.jpg",
        ]
    },
    {
        name :"Presentation of Security/Vigilante Uniforms ",
        id :"3",
        date :"19/02",
        venue :"Ochetoha Kidoma secretariate, GRA, Otukpo",
        about :"Presentation of Security/Vigilante Uniforms to LGA Chairmen in Zone C, Benue State",
        image :"./assets/img/team/ds9.jpg",
        images :[
            "./assets/img/team/ds1.jpg",
            "./assets/img/team/ds2.jpg",
            "./assets/img/team/ds3.jpg",
            "./assets/img/team/ds4.jpg",
            "./assets/img/team/ds5.jpg",
            "./assets/img/team/ds6.jpg",
            "./assets/img/team/ds7.jpg",
            "./assets/img/team/ds8.jpg",
            "./assets/img/team/ds9.jpg",
            "./assets/img/team/ds10.jpg",
            "./assets/img/team/ds11.jpg",
            "./assets/img/team/ds12.jpg",
            "./assets/img/team/ds1.jpg",
            "./assets/img/team/ds2.jpg",
            "./assets/img/team/ds3.jpg",
            "./assets/img/team/ds4.jpg",
            "./assets/img/team/ds5.jpg",
            "./assets/img/team/ds6.jpg",
            "./assets/img/team/ds7.jpg",
            "./assets/img/team/ds8.jpg",
            "./assets/img/team/ds9.jpg",
            "./assets/img/team/ds10.jpg",
            "./assets/img/team/ds11.jpg",
            "./assets/img/team/ds12.jpg"
        ]
    }
]

//create element and render projects

function renderProjects(project){
    let colDiv = document.createElement('div');
        colDiv.className = "col-md-3 col-sm-6";
        colDiv.setAttribute('data-id', project.id)

    let cardDiv =document.createElement('div');
        cardDiv.className="card shadow";
    
    let cardImg = document.createElement('img');
        cardImg.className = "card-img-top";
        cardImg.setAttribute('src', project.image)

    let cardBody = document.createElement('div');
        cardBody.className = "card-body";


    let cardTittle = document.createElement('h5');
        cardTittle.className = "card-title";
       cardTittle.innerText=project.name




    let cardAdress = document.createElement('p');
        cardAdress.className = "card-text lol";
        cardAdress.innerText=project.venue

    let adressIcon = document.createElement('img');
        adressIcon.setAttribute ("src","./images/icons/geo-alt-fill.svg");



    let cardAwardees = document.createElement('p');
        cardAwardees.className = "card-text";
        cardAwardees.innerText='Community Development';

    let awardeesIcon = document.createElement('img');
        awardeesIcon.setAttribute ("src","./images/icons/people-fill.svg");



    let cardWorth = document.createElement('span');
        cardWorth.className = "contiii";
        cardWorth.innerText='455'

    let worthIcon = document.createElement('img');
        worthIcon.setAttribute ("src","./images/icons/coin.svg");



    let cardDate = document.createElement('span');
        cardDate.className = "contiii";
        cardDate.innerText=project.date

    let dateIcon = document.createElement('img');
        dateIcon.setAttribute ("src","./images/icons/calendar-event-fill.svg");
    
    
    let cardLink = document.createElement('a');

    let linkButton = document.createElement('button');
        linkButton.className="btn btn-primary idbtn";
        linkButton.innerText="See More"
        linkButton.setAttribute('id', project.id)
        linkButton.onclick=()=>{
            localStorage.setItem('fileUrls', JSON.stringify(project.images));
            localStorage.setItem('pname', JSON.stringify(project.name));
            localStorage.setItem('adress', JSON.stringify(project.venue));
            window.location.href="gallery.html"
        }


    let cardFooter = document.createElement('div')
        cardFooter.className="card-footer"

    let footNote = document.createElement("small")
    footNote.className="text-muted"
    footNote.innerText=`${project.about} Images/videos`

    //appending children
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardImg)
    cardDiv.appendChild(cardBody)
        cardBody.appendChild(cardTittle)
        cardBody.appendChild(cardAdress)
            cardAdress.appendChild(adressIcon)
        cardBody.appendChild(cardAwardees)
            cardAwardees.appendChild(awardeesIcon)
        cardBody.appendChild(cardDate)
            cardDate.appendChild(dateIcon)
        cardBody.appendChild(cardLink)
            cardLink.appendChild(linkButton)
        cardBody.appendChild(cardFooter)
            cardFooter.appendChild(footNote)

    projectList.appendChild(colDiv)
}




projects.reverse().forEach(project=>{
    renderProjects(project)
})

function renderGalery(projectId) {
    alert(projectId)
};

