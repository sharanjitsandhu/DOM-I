const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//navigation
const navItems = Array.from(document.getElementsByTagName("a"));
navItems[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItems[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItems[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItems[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItems[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItems[5].innerHTML = siteContent["nav"]["nav-item-6"];

/*
let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})
*/

//add two items to navigation
newNavItems = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => { 
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode; 
}
newNavItems.prepend(createNewNode("Home"));
newNavItems.append(createNewNode("Testimonial"));


//navigation text color
navItems.forEach(element => {
    element.style.color = "green";
    });

/* selectedNavLinks.forEach((link,i) => {
  link.style.color = "green";
})
*/

//h1 tag
const ctaText = document.getElementsByTagName("h1")[0];
ctaText.innerHTML = siteContent["cta"]["h1"];

//button
const btn = document.getElementsByTagName("button")[0];
btn.innerHTML = siteContent["cta"]["button"];

//cta image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


//h4 tags
const mainContent = Array.from(document.getElementsByTagName('h4'));
mainContent[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContent[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[4].innerHTML = siteContent["main-content"]["vision-h4"];

//p tags
const textContent = Array.from(document.getElementsByTagName('p'));
textContent[0].innerHTML = siteContent["main-content"]["features-content"];
textContent[1].innerHTML = siteContent["main-content"]["about-content"];
textContent[2].innerHTML = siteContent["main-content"]["services-content"];
textContent[3].innerHTML = siteContent["main-content"]["product-content"];
textContent[4].innerHTML = siteContent["main-content"]["vision-content"];

//middle image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact
const contact = Array.from(document.getElementsByClassName("contact"))[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];


//footer
const footer = Array.from(document.getElementsByTagName('footer'))[0];
footer.innerHTML = siteContent["footer"]["copyright"];
