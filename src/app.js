/*
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

/* ADD UI COMPONENTS */
var UI = require('ui');
var Vector2 = require('vector2');

/* NEW UI CARD - LANDING */
var main = new UI.Card({
  title: "Perfect Day",
  icon: 'images/menu_icon.png',
//   subtitle: 'A Weather Permitting Alarm Clock',
  body: 'A Weather Permitting Alarm Clock.'
});

/* NEW UI CARD - SET ALARM */
var alarm = new UI.Card({
  title: "Set Alarm"
});

/* NEW UI CARD - SET WEATHER CONDITIONS */
var weather = new UI.Card({
  title: "Set Weather Conditions"
});

/* NEW UI CARD - TOGGLE ALARM */
var alarmToggle = new UI.Card({
  title: "Alarm On/Off"
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Set Alarm',
//         icon: 'images/menu_icon.png',
        subtitle: 'AM / PM'
      }, {
        title: 'Set Weather Conditions',
        subtitle: 'Temperature, no rain, etc.'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
