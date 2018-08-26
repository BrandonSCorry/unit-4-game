//TODO: fix so all variables on html screen reset on win/lose condition!! -look back at word guess game, make all variables reset on win / lose and add to win/lose counter!!
//Crystal random number game
//$().html (and .innerHTML) rewrite content, use $.append and and then reset on gamestart/update?
//jQuery document on ready load JS
$(document).ready(function() {

//global variables

//assign crystal random number 1-12 into object array as a new property 'number'
  //TODO: assign crystals.name to correct button/image!

  //TODO: rand number array / should loop this!!
  var randNumberArr = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];


  //use method for number to generate random num?
  var crystals = [
    {name: 'redCrystal', img: './assets/images/red.jpg', number: randNumberArr[0]},
    {name: 'blueCrystal', img: './assets/images/blue.jpg', number: randNumberArr[1]},
    {name: 'yellowCrystal', img: './assets/images/yellow.jpg', number: randNumberArr[2]},
    {name: 'greenCrystal', img: './assets/images/green.jpg', number: randNumberArr[3]}
  ];

  console.log(crystals);



  var userTotal = 0;
  var crystalTotal = 0;
  var crystalNum = 0;
  var id;
  var wins = 0;
  var losses = 0;
  var num;



//static numbers in random function
  function randCrystalTotal() {
    crystalTotal = Math.floor(Math.random() * 106) + 19;
    console.log(crystalTotal);
  }
//dynamic numbers based on arguments passed in function
  function randCrystalNum(min, max) {
    crystalNum = Math.floor(Math.random() * (max - min) ) + min;
    console.log(crystalNum);
  }
  // randCrystalTotal(); //run this function before reset or inside? to get new number
  console.log(crystalTotal);
  console.log(crystalTotal);

  function gameStart () {

    //get new random crystal total target number
    randCrystalTotal();

    //html reset variables
    userTotal = 0;
    $("#crystalsContainer").empty();
    $("#crystalTotal").html(crystalTotal);
    $("#userTotal").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);





    var num = 0;


    $.each(crystals, function(key, value){
      console.log(key,value);


      //how to use objName to label each one

      //assign random number to crystal & store it in object array?
      // var num = Math.floor(Math.random() * 12) + 1;
      // var objNum= this.num;
      //
      // $.extend(crystals, {"number" : objNum});

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

      //assign name to crystal img id
      // var objName = this.name;
      // idCount = 0;
      // idCount++;
      // $('.crystal').attr("id", "crystal" + idCount);

      $("img.crystal").each(function(i) {
        var count = 0;
        $(this).attr('id', "crystal" + (count + i)); //FINALLY!
      });


      // $(".closethis").click(function(){
      //   var $this = $(this).parent().parent();
      //   if ($this.attr("id") == "mainArea") {
      //     $("#myTbl").removeClass("myClass");
      //   }
      // });


      //need to use a counter? or something to make sure id doesn't over write and end up as all the last obj property value
    });
  }

  function checkTotal() {
    //  checkTotal function to check userTotal against target random total 19-125
    //if win condition , else lose condition - put into checkTotal function? with true/false value

    if (userTotal === crystalTotal) {
      //fix to correctly update and display wins counter
      wins++;
      $("#wins").html(wins);
      alert("win condition");
      console.log(wins);
      reset();
      console.log(id);
      console.log(num);
    }

    else if (userTotal > crystalTotal ) {
      //fix to correctly update and display losses counter
      losses++;
      $("#losses").html(losses);
      alert("lose condition");

      console.log(losses);
      gameStart();
      console.log(id);
      console.log(num);
    }
    console.log(userTotal);
    console.log(crystalTotal);
  }
  //run this reset function before iterating the crystals! (gameStart)
  function reset() {
    //reset html with default variable
    randCrystalTotal();

    //html reset variables
    userTotal = 0;
    $("#crystalsContainer").empty();
    $("#crystalTotal").html(crystalTotal);
    $("#userTotal").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);





    num = 0;

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


  function update() {
    //TODO: add randomized 1-12 crystal value to userTotal based on which button clicked (use name property of crystals object?)
    // if img id clicked == redCrystal,GreenCrystal.. etc, then add # assigned to that crystal
    //check if userTotal == crystalTotal for win, less than for keep playing, more than for loss
    //if statement
    id = event.target.id;

    if (event.target.id === "crystal0") {
      //get stored array random number 1-12 for individual crystals
      num = randNumberArr[0];
      console.log(num);
      console.log('Image clicked: ' + $("img.crystal").attr('id'));

      id = 0;
      //get random number 1-12 and then assign it to redCrystal
    }
    else if (event.target.id === "crystal1") {
      num = randNumberArr[1];
      console.log(num);

      id = 1;

      console.log(id);

      //get random number 1-12 and then assign it to redCrystal
    }
    else if (event.target.id === "crystal2") {
      num = randNumberArr[2];
      console.log(num);
      console.log(id);
      id = 2;
      //get random number 1-12 and then assign it to redCrystal
    }
    else if (event.target.id === "crystal3") {
      num = randNumberArr[3];
      id = 3;
      //get random number 1-12 and then assign it to redCrystal
    }
 // add random num from crystal to userTotal
    //working userTotal score counter!!!!
    userTotal = userTotal + num;
    console.log(userTotal);




    //push html to page w jquery
    $("#userTotal").html(userTotal);



  }

// call functions
  gameStart();


  //jQuery on click event listener for crystals
  //dont put random num gen on click!! do it on win or lose, also win++, lose++ respectively
  $("#crystalsContainer img").click(function() {
    update();
    checkTotal();

  });




}); //end document on ready