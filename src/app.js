//
// Vue.component('ul', {
//   props: ['item'],
//
//   template:
//   <p>Hello</p>
//
// });
//
//
// var app = new Vue(
//
//   {
//   el: '#app',
//
//   data: {
//       items: [
//         { },
//         { title: 'Title 2', description: 'Description for tab 2.' },
//         { title: 'Title 3', description: 'Description for tab 3.' },
//       ]
//     }
//   }
// });
// Vue.component('voiceMenu', {
//   props: ['menu'],
//   template: '<li>{{ menu.menuVoice }}</li>'
// })
// var app = new Vue({
//   el: '#app',
//   data: {
//     menuList: [
//       { id:1, menuVoice: 'Home' },
//       { id:2, menuVoice: 'Work' },
//       { id:3, menuVoice: 'Articles' },
//       { id:4, menuVoice: "Let's Talk" }
//     ]
//   },
//   methods: {
//     hideShow: function() {
//       var hamburger = '#menuHamb';
//       hamburger.fadeOut()
//     }
//   }
// })

Vue.component('menu-item', {
  props: ['menu'],
  template: '<li><a href="{{menuVoices.link}}">{{menu.text}}</a></li>'
})
var app7 = new Vue({
  el: '#app-menu__header',
  data: {
    menuVoices: [
      { id: 0, text: 'Home', link:"https://www.worldtimebuddy.com/" },
      { id: 1, text: 'Work', link:"https://stackoverflow.com/questions/33731939/vue-js-toggle-class-on-click" },
      { id: 2, text: 'Articles', link:"https://somiibo.com/pricing/" },
      { id: 3, text: "Let's Talk", link:"https://www.worldtimebuddy.com/" }
    ]
  }
})
