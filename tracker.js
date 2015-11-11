var userPick = [];
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');

var CarBrand = function(path) {
this.path = path;
this.votes = 0;
userPick.push(this);
};

var tracker = {
  pic1: 0,
  pic2: 0,

//gets random number
randomNumber: function() {
  return Math.floor(Math.random() * userPick.length);
},
//displays on HTML
displayPhoto: function() {
  this.pic1 = userPick[this.randomNumber()];
  this.pic2 = userPick[this.randomNumber()];
  photo1.src = this.pic1.path;
  photo2.src = this.pic2.path;

  while (photo1.src === photo2.src){
    photo2.src = userPick[this.randomNumber()].path;
    };
  },
};

var voteLeft = function() {
  tracker.pic1.votes +=1;
  console.log(tracker.pic1.votes);
  tracker.displayPhoto();
}
var voteRight = function() {
  tracker.pic2.votes +=1;
  console.log(tracker.pic2.votes);
  tracker.displayPhoto();
}

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
var rollsRoyce = new CarBrand('img/rolls-royce.png');
var tesla = new CarBrand('img/tesla.png');


photo1.addEventListener('click', voteLeft)
photo2.addEventListener('click', voteRight)






tracker.displayPhoto();
