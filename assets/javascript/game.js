//Crystal random number game

//jQuery document on ready load JS
$(document).ready(function() {

//global variables

//create array to store random individual crystal #s
  var randNumberArr = [];

//crystals object
  var crystals = [
    {name: 'redCrystal', img: './assets/images/red.jpg'},
    {name: 'blueCrystal', img: './assets/images/blue.jpg'},
    {name: 'yellowCrystal', img: './assets/images/yellow.jpg'},
    {name: 'greenCrystal', img: './assets/images/green.jpg'}
  ];

//set values to 0 on doc ready
  var userTotal = 0;
  var crystalTotal = 0;
  var crystalNum = 0;
  var id;
  var wins = 0;
  var losses = 0;
  var num;



//new random crystal target #
  function randCrystalTotal() {

    crystalTotal = Math.floor(Math.random() * 106) + 19;
  }
//new random individual crystal #s
  function randCrystalNum() {

    randNumberArr = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
  }
 //gameStart function, called at doc .ready and on win/lose condition
  function gameStart () {

    //reset num (used to store individual crystal random number on click and add to userTotal)
    num = 0;
    //reset userTotal on start/win/lose
    userTotal = 0;

    //get new random crystal total target number
    randCrystalTotal();

    //get new random individual crystal number for each crystal
    randCrystalNum();

    //html reset variables
    $("#crystalsContainer").empty();
    $("#crystalTotal").html(crystalTotal);
    $("#userTotal").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);

    //loop to display imgs from crystal.img obj prop
    $.each(crystals, function () {

      //generate crystal images
      var objCrystals = this.img;
      $("#crystalsContainer").append("<img class='crystal' src='" + objCrystals + "'>");
    });


    //adds index to the end of crystal img ID, need to use $.val instead? to make more dry
    $("img.crystal").each(function (i) {
      var count = 0;
      $(this).attr('id', "crystal" + (count + i));
    });
  }

  function checkTotal() {
    //  checkTotal function to check userTotal against target random total 19-125

    //win condition
    if (userTotal === crystalTotal) {

      $("#userTotal").html(userTotal);
      wins++;
      $("#wins").html(wins);

      alert("WIN! Your score: " + userTotal + " is equal to the goal: " + crystalTotal);
      gameStart();
    }
    // lose condition
    else if (userTotal > crystalTotal ) {

      $("#userTotal").html(userTotal);
      losses++;
      $("#losses").html(losses);

      alert("You lost. Your score: " + userTotal + " is > the goal: " + crystalTotal);
      gameStart();
    }
  }

  //update on click - check which crystal is clicked and assign random number 1-12 to num with randNumberArr
  function update() {
    //checks which crystal is clicked, gets random number from array,
    //TODO:  use $.val instead to assign value to crystal and get value to check, loop. (Makes it more DRY)
    if (event.target.id === "crystal0") {
      num = randNumberArr[0];
      id = 0;
    }
    else if (event.target.id === "crystal1") {
      num = randNumberArr[1];
      id = 1;
    }
    else if (event.target.id === "crystal2") {
      num = randNumberArr[2];
      id = 2;
    }
    else if (event.target.id === "crystal3") {
      num = randNumberArr[3];
      id = 3;
    }
    // add random num from crystal to userTotal
    userTotal = userTotal + num;

    //push userTotal to page w jquery
    $("#userTotal").html(userTotal);
  }

// gameStart function
  gameStart();

  //jQuery on click event listener for crystal img, updates and checks total for win/lose condition
  $(document).on("click", "#crystalsContainer img", function() {
    update();
    checkTotal();
  });
}); //end document on ready