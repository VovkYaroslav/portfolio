//array of screenshots for cycle in mainInf
let arrOfScreens = [//    unfortunately I have no enough projects for this array
    {
        picture: "",
        name: "Adaptation",
        info: "",
        link: "https://ru.w3docs.com/snippets/html/kak-sozdat-html-knopku-kotoraia-deistvuet-kak-ssylka.html"
    },
    {
        picture: "",
        name: "Use Fetch",
        info: "",
        link: "https://vovkyaroslav.github.io/some/"
    },
    {
        picture: "",
        name: "Primitive calculator",
        info: "",
        link: ""
    },
    {
        picture: "",
        name: "Primitive calculator calories",
        info: "",
        link: ""
    },
    {
        picture: "",
        name: "Compound interests calculator",
        info: "",
        link: ""
    },
    {
        picture: "",
        name: "Primitive React project with using axios",
        info: "",
        link: ""
    },
    {
        picture: "",
        name: "Page mountains",
        info: "",
        link: "https://vovkyaroslav.github.io/Try1/#"
    },
];


//arrays with my contact information
let liContacts = [
    {
        content: "Phone", link: "tel:+38 097 100 9043", name: "+38(097) 100 9043"
    },
    {
        content: "Email", link: "mailto:vovkyarik32@gmail.com", name: "vovkyarik32@gmail.com"
    },
];

let liLinks = [

    {
        link: "https://github.com/VovkYaroslav", name: "GitHub"
    }, {
        link: "https://t.me/vovk_zvir", name: "Telegram"

    }, {
        link: "https://www.instagram.com/vovk_yaroslav_olegovich/", name: "Instagram"
    }, {
        link: "https://www.facebook.com/profile.php?id=100063281010655", name: "Facebook"
    }
];
//structure of my portfolio
//This part mast have all main blocks like header, main info block, footer. It will have content in all main blocks
// like:
// header - switcher(it`s button which changed theme from light to dark and conversely), about(it`s also button
// but this one mast have reference to pge with my projects);

// main info-block - someInf(some information about my projects), proj(some screenshots from my projects) and conclusion
// (conclusions about all projects);

// footer - contacts, links;

//in this part I create container in which the project will be build
let container = document.createElement("scroll-container");
container.className = "container";

document.body.append(container);

//content in container

let navigate = document.createElement("nav");
navigate.className = 'navigate';

let titleNavigate = document.createElement("h3");
titleNavigate.innerText = 'navigate'

let headerA = document.createElement("a");
headerA.href = '#header';
headerA.innerText = 'Header'

let mainInfA = document.createElement("a");
mainInfA.href = '#mainInf';
mainInfA.innerText = 'Info'

let footerA = document.createElement("a");
footerA.href = '#footer';
footerA.innerText = 'Footer'

navigate.append(titleNavigate, headerA, mainInfA, footerA)

let header = document.createElement('scroll-page');
header.id = "header";
let mainInf = document.createElement('scroll-page');
mainInf.id = "mainInf";
let footer = document.createElement('scroll-page');
footer.id = "footer";
// let buttonUp = document.createElement("button");
// buttonUp.className = "buttonUp"
// // let switcher = document.createElement("div");
// switcher.className = "switcher";

container.append(navigate, header, mainInf, footer);

//content in header
let title = document.createElement("h1");
let about = document.createElement("div");
about.className = "about";

title.innerText = "Portfolio page";


header.append(title, about);

//content in about
let me = document.createElement("div");
me.className = "me";
let proj = document.createElement("div");
proj.className = "projects"

about.append(me, proj);

//content in main info-block
let aboutProj = document.createElement("div");
aboutProj.className = "aboutProj";
let conclusion = document.createElement("div");
conclusion.className = "conclusion";


mainInf.append(aboutProj, conclusion);

//content in footer
let contacts = document.createElement("div");
contacts.className = "contacts";
let links = document.createElement("div");
//in this block I add links on my GitHub, Telegram, Viber, Facebook and maybe Instagram
links.className = "links";

footer.append(contacts, links);


//header extension

//content in me
let port = document.createElement("div");
port.className = "port"
let img = document.createElement("img");
img.className = "img"
img.src = "img/12-depositphotos-bgremover.png";

port.append(img);

let infoAboutMe = document.createElement("div");

let secondTitle = document.createElement("h3");
secondTitle.innerText = "Some information about me"

let par = document.createElement("p");
par.innerText = "Hello! My name is Yaroslav, and I am currently a student at the National Aviation University, as well" +
    " as a full-stack developer student at OctenSchool. Although I am new to development, I have completed tasks assigned" +
    " to me in my courses, which I can share with you to demonstrate my current skill level.\n" + "\n" + "My ultimate goal" +
    " is to expand my knowledge and gain experience working on real-world projects. While I am aware that most employers" +
    " require some level of experience, I am eager to find opportunities where I can contribute and learn without prior " +
    "experience. I am committed to learning through any available means to gain the necessary experience as quickly as possible.\n"
    + "\n" + "I believe that I can be a valuable addition to any team, and I am motivated to earn a fair salary for my work." +
    " If given the chance, I am confident that I can demonstrate my abilities and contribute meaningfully to your company." +
    " Thank you for considering my application."

par.className = 'parText'

let butLearnMore = document.createElement("button");
butLearnMore.className = 'buttonLearnMore';
butLearnMore.innerText = 'more/less';

butLearnMore.addEventListener('click', ()=>{

    if (butLearnMore.innerText === 'more/less'){
        butLearnMore.innerText = 'more/less';
        par.classList.toggle('showMore');
    }else {
        butLearnMore.innerText = 'Read more'
    }
})


infoAboutMe.className = "infoAboutMe"

infoAboutMe.append(secondTitle, port, par)

me.append(infoAboutMe, butLearnMore)

//content in proj


//main info-block extension

//cycle for screenshots
for (const arrOfScreen of arrOfScreens) {
    let divProj = document.createElement("div");
    divProj.className = "divProj";

    let screenshot = document.createElement("img");
    screenshot.src = `${arrOfScreen.picture}`;

    let infProj = document.createElement("div");

    let parProj = document.createElement("p");
    parProj.innerText = `${arrOfScreen.info}`;

    let titleProj = document.createElement("h4");
    titleProj.innerText = `${arrOfScreen.name}`


    let linkProj = document.createElement("form");
    linkProj.action = arrOfScreen.link
    let butProj = document.createElement("button");
    butProj.type = "submit"
    butProj.innerText = "click for details"
    linkProj.append(butProj)

    infProj.append(titleProj, parProj)
    divProj.append(screenshot, infProj, linkProj)
    aboutProj.append(divProj)
}

//content in someInf

//content in conclusion

let parCon = document.createElement("p");
parCon.innerText = "In conclusion, I recognize that there is much for me to learn and comprehend. However, I am eager to" +
    " continue my learning journey and consistently develop my skills. My aspiration is to always aim for excellence, and" +
    " I am highly motivated to achieve extraordinary accomplishments. My goal is to reach the level of a senior in web" +
    " development and continue to grow beyond that."

conclusion.append(parCon);


//footer extension

//content in contacts
let listContact = document.createElement("ul");
listContact.className = "listOfContacts"

for (const liContact of liContacts) {

    let xx = document.createElement("li");
    xx.innerText = `${liContact.content}: `

    let aOfContact = document.createElement("a")
    aOfContact.href = `${liContact.link}`
    aOfContact.innerText = `${liContact.name}`

    xx.append(aOfContact)
    listContact.append(xx)
}

contacts.append(listContact);

//content in links
let messengers = document.createElement("ul");
messengers.className = "mes";

for (const liLink of liLinks) {

    let li = document.createElement("li");


    let aOfLinks = document.createElement("a");
    aOfLinks.href = `${liLink.link}`
    aOfLinks.innerText = `${liLink.name}`

    li.append(aOfLinks);
    messengers.append(li)
}

links.append(messengers)

//
// //content in switcher
//
// let switcherButton = document.createElement("button");
// switcherButton.className = "switcherButton";
//
// let switcherA = document.createElement("a")
// switcherA.innerText = "Click for change theme"
// switcherA.href = "#"
// switcherA.className = "switcherA"
//
// switcherA.addEventListener('click', () => {
//
//     if (localStorage.getItem('theme') === 'dark') {
//         localStorage.removeItem('theme');
//     } else {
//         localStorage.setItem('theme', 'dark')
//     }
//     addDerkClass()
// });
//
// let addDerkClass = () => {
//     try {
// if (localStorage.getItem('theme')==='dark'){
//     document.querySelector('body').classList.add('dark')
// }
//     } catch (err) {
//
//     }
// }
// addDerkClass()
//
// switcherButton.append(switcherA)
// switcher.append(switcherButton);

//In this page I want also create some interesting design and try create moving parts