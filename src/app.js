

var app = new Vue(
  {
  el: "#app-menu__header",
  data: {
    menuVoices: [
      {id:'1', text: 'Home', link:"https://vuejs.org/v2/guide/index.html"},
      {id:'2', text: 'Work', link:"https://vuejs.org/v2/guide/index.html"},
      {id:'3', text: 'Articles', link:"https://vuejs.org/v2/guide/index.html"},
      {id:'4', text: "Let's Talk", link:"https://vuejs.org/v2/guide/index.html"},
    ],
    menuHamb: false
  }
})


var app2 = new Vue(
  {
  el: "#app-footer",
  data: {
    rightsVoices: [
      {text: "© Copyright 2012 - 2021"},
      {text: "Avada Theme by ",bold: "Theme Fusion", text2: ""},
      {text: "All Rights Reserved"},
      {text: "Powered by ", bold: "WordPress"},
    ],
    socialIcons: [
      {name: "facebook", link:"https://vuejs.org/v2/guide/index.html", icon:"fab fa-facebook-f"},
      {name: "twitter", link:"https://vuejs.org/v2/guide/index.html", icon:"fab fa-twitter"},
      {name: "instagram", link:"https://vuejs.org/v2/guide/index.html", icon:"fab fa-instagram"},
      {name: "youtube", link:"https://vuejs.org/v2/guide/index.html", icon:"fab fa-youtube"}
    ],
    imgLogo: {src: "img/avada-footer-logo.png"}
  }
})
