//array of screenshots for cycle in mainInf
let arrOfScreens = [
//    unfortunately I have no enough projects for this array
];
console.log(arrOfScreens)

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

container.append(header, mainInf, footer, buttonUp);

//content in header
let switcher = document.createElement("div");
switcher.className = "switcher";
let about = document.createElement("div");
about.className = "about";

header.append(switcher, about);

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

//content in switcher

//content in me

//content in proj


//main info-block extension

//cycle for screenshots

//content in someInf

//content in conclusion


//footer extension

//content in contacts
let listContact = document.createElement("ul");
listContact.className = ".listOfContacts"





contacts.append(listContact)

//content in links
let messengers = document.createElement("ul");
messengers.className = ".mes"



links.append(messengers)



