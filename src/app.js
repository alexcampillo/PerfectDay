/*
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

/* ADD UI COMPONENTS */
var UI = require('ui');
// var Vector2 = require('vector2');

/* NEW UI CARD - LANDING */
var main = new UI.Card({
  title: "Perfect Day",
//   icon: 'images/menu_icon.png',
  body: 'A Weather Permitting Alarm Clock.'
});

/* NEW UI CARD - SET ALARM */
var alarm = new UI.Window({
  title: "Set Alarm",
  body: "6:00 AM"
});

/* NEW UI CARD - SET WEATHER CONDITIONS */
var weather = new UI.Card({
  title: "Set Temperature",
  body: "45° F"
});

/* NEW UI CARD - TOGGLE ALARM */
var alarmToggle = new UI.Card({
  title: "Alarm On/Off",
  subtitle: "ON"
});

main.show();

// main.on('click', 'down', function(e) {
//   alarm.show();
//   main.hide();
// });
  
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Set Alarm',
//         icon: 'images/menu_icon.png',
//         subtitle: 'AM / PM'
//       }, {
//         title: 'Set Weather Conditions',
//         subtitle: 'Temperature, no rain, etc.'
//       }, {
//         title: 'Alarm Settings',
//         subtitle: 'on, off, recurring, etc.'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();



