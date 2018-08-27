//TODO: add 'number' object property to crystal and store random value in each on gamestart() function
//TODO: show last num + userTotal to userTotal before win/lose condition alert
//TODO: why did $(this) work and not this for .attr each loop? because attr is jquery method?
//TODO: possible to use crystals method function for individ random number?
//TODO: try to make more things 'DRY'
//Crystal random number game
//$().html (and .innerHTML) rewrite content, use $.append and and then reset on gamestart/update?
//jQuery document on ready load JS
$(document).ready(function() {


//global variables

//assign crystal random number 1-12 into object array as a new property 'number'
  //TODO: assign crystals.name to correct button/image!

  //TODO: rand number array / should loop this!! how to put value from randomNumberArr into crystals object as new property 'number', and get that number?
  var randNumberArr = [];


  //use method for number to generate random num?
  var crystals = [
    {name: 'redCrystal', img: './assets/images/red.jpg'},
    {name: 'blueCrystal', img: './assets/images/blue.jpg'},
    {name: 'yellowCrystal', img: './assets/images/yellow.jpg'},
    {name: 'greenCrystal', img: './assets/images/green.jpg'}
  ];

  console.log(crystals);



  var userTotal = 0;
  var crystalTotal = 0;
  var crystalNum = 0;
  var id;
  var wins = 0;
  var losses = 0;
  var num;



//function to get new random crystal target #
  function randCrystalTotal() {
    crystalTotal = Math.floor(Math.random() * 106) + 19;
    console.log(crystalTotal);
  }
//function to get new random individual crystal #s
  function randCrystalNum() {
    //for each object array?
    //TODO: rand number array / should loop this!! ahhh
     randNumberArr = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
      console.log(crystalNum); //TODO: got random numbers, how to assign to crystals object?

  }

  function gameStart () {
    //set certain vars to 0, wins,losses, usertotal

    //reset num (used to store individual crystal random number on click and add to userTotal)
    num = 0;
    //get new random crystal total target number
    randCrystalTotal();

    //TODO: get new random individual crystal number for each crystal
     randCrystalNum();
    // $(crystals).each(function (j) {
    //   var count = 0;
    //   crystals.number2 = "testing add object prop" + count + j;
    //   console.log(crystals.number2);
    // });
    // console.log(crystals.number2);
    // console.log(crystals);


      //html reset variables
      userTotal = 0;
      $("#crystalsContainer").empty();
      $("#crystalTotal").html(crystalTotal);
      $("#userTotal").html(userTotal);
      $("#wins").html(wins);
      $("#losses").html(losses);





      $.each(crystals, function () {
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

    $("img.crystal").each(function (i) {
      var count = 0;
      $(this).attr('id', "crystal" + (count + i)); //FINALLY!
    });
    }

  function checkTotal() {
    //  checkTotal function to check userTotal against target random total 19-125
    //if win condition , else lose condition - put into checkTotal function? with true/false value
     //win condition
    if (userTotal === crystalTotal) {
      $("#userTotal").html(userTotal);

      wins++;
      $("#wins").html(wins);
      console.log(wins);

      console.log(id);
      console.log(num);
      alert("WIN! Your score: " + userTotal + " is equal to the target: " + crystalTotal);
      gameStart();
    }
     // lose condition
    else if (userTotal > crystalTotal ) {
      $("#userTotal").html(userTotal);

      losses++;
      $("#losses").html(losses);
      console.log(losses);

      console.log(id);
      console.log(num);
      alert("You lost. Your score: " + userTotal + " is > the target: " + crystalTotal);
      gameStart();
    }

    console.log(userTotal);
    console.log(crystalTotal);
  }


  //update on click - check which crystal is clicked and assign random number 1-12 to num with randNumberArr
  function update() {
    //TODO: add randomized 1-12 crystal value to userTotal based on which button clicked (use name property of crystals object?)
    // if img id clicked == redCrystal,GreenCrystal.. etc, then add # assigned to that crystal
    //check if userTotal == crystalTotal for win, less than for keep playing, more than for loss
    //if statement
    // id = event.target.id; dont need this!


    if (event.target.id === "crystal0") {
      //get stored array random number 1-12 for individual crystals
      num = randNumberArr[0];
      console.log(num);
      console.log('Image clicked: ' + $("img.crystal").attr('id'));
      id = 0;
      console.log("ID= " +id);
    }
    else if (event.target.id === "crystal1") {
      num = randNumberArr[1];
      console.log(num);
      id = 1;
      console.log(id);
    }
    else if (event.target.id === "crystal2") {
      num = randNumberArr[2];
      console.log(num);
      id = 2;
      console.log(id);
    }
    else if (event.target.id === "crystal3") {
      num = randNumberArr[3];
      id = 3;
      console.log(id);
    }
 // add random num from crystal to userTotal

    userTotal = userTotal + num;
    console.log(userTotal);




    //push html to page w jquery
    $("#userTotal").html(userTotal);



  }

// call gameStart function
  gameStart();


  //jQuery on click event listener for crystals
  //dont put random num gen on click!! do it on win or lose, also win++, lose++ respectively
  //$document.on ... etc fixed reset click functionality, using $('#id').click(function... did not work
  $(document).on("click", "#crystalsContainer img", function() {
    update();
    checkTotal();

  });




}); //end document on ready