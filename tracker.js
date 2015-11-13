var brand = [];
var photo1 = document.getElementById('photo1');
var photo2 = document.getElementById('photo2');
var data = [];
var stringify;

var CarBrand = function(name, path) {
this.name = name;
this.path = path;
this.votes = 0;
brand.push(this);
data.push({
  votes: this.votes,
  value: 1,
  color:"#F7464A",
  highlight: "#FF5A5E",
  label: this.name,

})
};

var refreshChart = function(){
  for (var i = 0; i < brand.length; i++) {
    myPieChart.segments[i].value = brand[i].votes;
  }
  stringify = JSON.stringify(data);
}

var updateData = function(car) {
  for(var i = 0; i < data.length; i++) {
    if (data[i].label == car.name) {
      data[i].votes = car.votes;
    }
  }
}

var tracker = {
  pic1: 0,
  pic2: 0,



//gets random number
randomNumber: function() {
  return Math.floor(Math.random() * brand.length);
},
//displays
displayPhoto: function() {
  this.pic1 = brand[this.randomNumber()];
  this.pic2 = brand[this.randomNumber()];
  photo1.src = this.pic1.path;
  photo2.src = this.pic2.path;

  while (photo1.src === photo2.src){
    photo2.src = brand[this.randomNumber()].path;
    };
  },
};

var voteLeft = function() {
  tracker.pic1.votes ++;
  updateData(tracker.pic1)
  refreshChart();
  myPieChart.update();
  console.log(tracker.pic1.votes);
  tracker.displayPhoto();
  saveVotes();
}

var voteRight = function() {
  tracker.pic2.votes ++;
  updateData(tracker.pic2)
  refreshChart();
  myPieChart.update();
  console.log(tracker.pic2.votes);
  tracker.displayPhoto();
  saveVotes();
}

var astonMartin = new CarBrand('Aston Martin', 'img/aston-martin.jpg');
var audi = new CarBrand('Audi', 'img/audi.png');
var bentley = new CarBrand('Bentley', 'img/Bentley.png');
var benz = new CarBrand('Mercedez Benz', 'img/Benz.png');
var bmw = new CarBrand('BMW', 'img/BMW.png');
var bugatti = new CarBrand('Bugatti', 'img/bugatti.jpg');
var ferrari = new CarBrand('Ferrari', 'img/ferrari.jpg');
var lamborghini = new CarBrand('Lamborghini', 'img/lamborghini.png');
var maserati = new CarBrand('Maserati', 'img/Maserati.png');
var porsche = new CarBrand('Porsche', 'img/porsche.png');
var rollsRoyce = new CarBrand('Rolls Royce', 'img/rolls-royce.png');
var tesla = new CarBrand('Tesla', 'img/tesla.png');

var saveVotes = function () {
  localStorage.setItem('chart', stringify);
}
photo1.addEventListener('click', voteLeft)
photo2.addEventListener('click', voteRight)

tracker.displayPhoto();



//calling local storage
if (!(localStorage.getItem('chart'))) {
  console.log('no local')
  var ctx = document.getElementById("pieChart").getContext("2d");
  var myPieChart = new Chart(ctx).Pie(data);
  saveVotes();
  } else {
    console.log('local')
    var ctx = document.getElementById("pieChart").getContext("2d");
    var myPieChart = new Chart(ctx).Pie(data);
    var newArray = JSON.parse(localStorage.getItem('chart'));
    for (var i = 0; i < newArray.length; i++) {
      myPieChart.segments[i].value = newArray[i].votes;
    }
}










