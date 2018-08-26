//Crystal random number game
//$().html (and .innerHTML) rewrite content, use $.append and and then reset on gamestart/update?
//jQuery document on ready load JS
$(document).ready(function() {

//global variables

//assign crystal random number 1-12 into object array as a new property 'number'
  //TODO: assign crystals.name to correct button/image!
  var crystals = [
    {name: 'redCrystal', img: './assets/images/red.jpg',},
    {name: 'blueCrystal', img: './assets/images/blue.jpg',},
    {name: 'yellowCrystal', img: './assets/images/yellow.jpg'},
    {name: 'greenCrystal', img: './assets/images/green.jpg'}
  ];
     console.log(crystals);


  var userTotal = 0;
  var crystalTotal = 0;
  var wins = 0;
  var losses = 0;
  var num = 0;
  var counter = 0;




  function randCrystalTotal() {
    crystalTotal = Math.floor(Math.random() * 106) + 19;
    console.log(crystalTotal);
  }
randCrystalTotal(); //run this function before reset or inside? to get new number
  console.log(crystalTotal);
  reset(); //use inside win/lose condition onclick to reset the game
  console.log(crystalTotal);
  //run this reset function before iterating the crystals!
  function reset() {
    //reset html with default variable
    $("#crystalsContainer").empty();
    $("#crystalTotal").html(crystalTotal);
    $("#userTotal").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
    console.log(crystalTotal);
    //reset individual crystal random value #


    //need to do something with crystal array - if i cant just hardcode it

    //displays img src property from crystals jQuery .each loops though crystals.img property.
    //TODO: assign different random 1-12 value to each image? or button
    // $.each(crystals.img, function(name, image){
    //   $("#crystals").html("<img src='" + image +"'>"  );
    //   console.log(crystals.name);
    //   console.log(crystals.image);
    //
    // });
    // $.each(crystals.name, function(i, v){
    //   //assign crystal name to corresponding buttons, use this to assign random number and input into crystals object?
    //   console.log(crystals.i);
    //   console.log(crystals.v);
    //
    // });
    //
    // // trying to do name, image, and random number at the same time
    // $.each(crystals, function(name, image){
    //   var crystalName = crystals.name.name;
    //   var crystalImage = crystals.img.image;
    //
    //   console.log(crystalName);
    //   console.log(crystalImage);
    //
    //   $("#crystals").html("<img src='" + crystalImage +"'>"  );
    //   console.log(crystals.name.name)
    //   console.log(crystals.name.name)
    //   console.log(crystals.image);
    //
    // });
    //
    // for (var i = 0; i < crystals.length; i++) {
    //   // var crystal = crystals[Math.floor(Math.random() * wordArray.length)];
    //   crystals[i].innerHTML = "<img src='crystals.img'>";
    //   console.log(crystals);
    // }
      // access object property - look up
      //loops through crystals and add image + random value for each
  }

  //get crystals properties and assign to crystal button/image

  $.each(crystals, function(key, value){
    console.log(key,value);
    //assign name to crystal button/img
    var objName = this.name;



    //how to use objName to label each one

    console.log(objName);
    //assign random number to crystal & store it in object array
    var  num = Math.floor(Math.random() * 12) + 1;
    var objNum= this.num;

    $.extend(crystals, {"number" : objNum});

     console.log(crystals);
    console.log(userTotal);
    console.log(num);


    console.log("Crystal: " + this.name);
    //generate crystal images - done for now

    var objCrystals = this.img;
    $("#crystalsContainer").append("<img class='crystal' src='" + objCrystals + "'>");
    // console.log(objCrystals)

    console.log("Crystal image: " + this.img);
    //assign number to each crystal button/img


    console.log("secretNumber: " + this.number);
  });


  function update() {
    //TODO: add randomized 1-12 crystal value to userTotal based on which button clicked (use name property of crystals object)
    userTotal = userTotal + num;
    //check if userTotal == crystalTotal for win, less than for keep playing, more than for loss
    //if statement
    //push html to page w jquery
  }


  //jQuery on click event listener for crystals
  //dont put random num gen on click!! do it on win or lose, also win++, lose++ respectively
  $("#crystalsContainer img").click(function() {
    update();
    alert("working");

    // add assignment of randomly generated crystal value 0-9 to clicked crystal

    // if value === 0-9?
    //if name === red/blue/etcCrystal, then


  });




}); //end document on ready