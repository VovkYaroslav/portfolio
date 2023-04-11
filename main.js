//array of screenshots for cycle in mainInf
let arrOfScreens = [//    unfortunately I have no enough projects for this array
    {
        picture: "",
        name: "",
        info: "",
        link: ""
    }
];
console.log(arrOfScreens)

//arrays with my contact information
let liContacts = [
    {
        content: "Phone", link: "tel:+38 097 100 9043", name: "+38(097) 100 9043"
    },
    {
        content: "Gmail", link: "mailto:vovkyarik32@gmail.com", name: "vovkyarik32@gmail.com"
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
let container = document.createElement("div");
container.className = "container";

document.body.append(container);

//content in container
let header = document.createElement("div");
header.className = "header";
let mainInf = document.createElement("div");
mainInf.className = "mainInf";
let footer = document.createElement("div");
footer.className = "footer";
let buttonUp = document.createElement("button");
buttonUp.className = "buttonUp"
let switcher = document.createElement("div");
switcher.className = "switcher";

container.append(header, mainInf, footer, buttonUp, switcher);

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

//content in aboutProj
let screenshots = document.createElement("div");
//in this part l`d like to do some cycle. This cycle must create element "div" for everyone img.
screenshots.className = "screenshots";
let someInf = document.createElement("div");
someInf.className = "someInf";

aboutProj.append(screenshots, someInf);
mainInf.append(conclusion, aboutProj);

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
img.src = "img/12.jpg";

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

infoAboutMe.className = "infoAboutMe"

infoAboutMe.append(secondTitle, par)

me.append(port, infoAboutMe)

//content in proj


//main info-block extension

//cycle for screenshots

//content in someInf

//content in conclusion


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


//content in switcher





//In this page I want also create some interesting design and try create moving parts