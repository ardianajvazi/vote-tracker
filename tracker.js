var choices = [];

var CarBrand = function(path) {
this.path = path;
this.votes = 0;
choices.push(this);
};


var astonMartin = new CarBrand('img/aston-martin.jpg');
var audi = new CarBrand('img/audi.png');
var bentley = new CarBrand('img/Bentley.png');
var benz = new CarBrand('img/Benz.png');
var bmw = new CarBrand('img/BMW.png');
var bugatti = new CarBrand('img/bugatti.jpg');
var ferrari = new CarBrand('img/ferrari.jpg');
var lamborghini = new CarBrand('img/lamborghini.png');
var maserati = new CarBrand('img/Maserati.png');
var porsche = new CarBrand('img/porsche.png');
var rollsRoyce = new CarBrand('img/rolls-royce.jpg');
var tesla = new CarBrand('img/tesla.png');

//gets random photo
var randomPhoto = function() {
  return Math.floor(Math.random() * choices.length);
}
//displays on HTML
function render() {
  var photo1 = document.getElementById('photo1');
  var photo2 = document.getElementById('photo2');
  photo1.src = choices[randomPhoto()].path;
  photo2.src = choices[randomPhoto()].path;

}

render();
