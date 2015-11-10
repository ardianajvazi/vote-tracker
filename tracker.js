var userPick = [];

var CarBrand = function(path) {
this.path = path;
this.votes = 0;
userPick.push(this);
};

//gets random number
var randomNumber = function() {
  return Math.floor(Math.random() * userPick.length);
}
//displays on HTML
function displayPhoto() {
  var photo1 = document.getElementById('photo1');
  var random1 = randomNumber();
  photo1.src = userPick[random1].path;

  var photo2 = document.getElementById('photo2');
  var random2 = randomNumber();
  photo2.src = userPick[random2].path;

  while (photo1.src === photo2.src){
    photo2.src = userPick[randomNumber()].path;
  }
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
var rollsRoyce = new CarBrand('img/rolls-royce.jpg');
var tesla = new CarBrand('img/tesla.png');




photo1.addEventListener('click', function(){
  console.log('click');
  userPick[random1].votes += 1;
  console.log(userPick[random1]);

});
photo2.addEventListener('click', function(){
  console.log('click');
  userPick[random2].votes += 1;
  console.log(userPick[random2]);
});

// var data = [
//     {
//         value: 300,
//         label: "Red"
//     },
//     {
//         value: 50,
//         label: "Green"
//     },
//     {
//         value: 100,
//         label: "Yellow"
//     }
//         {
//         value: 300,
//         label: "Red"
//     },
//     {
//         value: 50,
//         label: "Green"
//     },
//     {
//         value: 100,
//         label: "Yellow"
//     }
//         {
//         value: 300,
//         label: "Red"
//     },
//     {
//         value: 50,
//         label: "Green"
//     },
//     {
//         value: 100,
//         label: "Yellow"
//     }
//         {
//         value: 300,
//         label: "Red"
//     },
//     {
//         value: 50,
//         label: "Green"
//     },
//     {
//         value: 100,
//         label: "Yellow"
//     }
// ]



displayPhoto();
