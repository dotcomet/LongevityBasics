


// scroll up when new on page
Tracker.autorun(function () {
	var current = Router.current();
	Tracker.afterFlush(function () {
		// Scroll window to top, like a real page reload.
		$(window).scrollTop(0);
	});
});

console.log('hello world');

//############################ SLIDER COLOR
scoreOrange = 40;
scoreGreen = 80;


//################################## 1 - nutrition
//Session.set('scoreNlcp',  '0');
Session.set("currentRoomId", "home");



Session.set('scoreNlcp',  window.localStorage.getItem('scoreNlcp') || 0);
Session.set('colorNlcp',  window.localStorage.getItem('colorNlcp') || "");



Session.set('scoreNcpf',  window.localStorage.getItem('scoreNcpf') || 0);
Session.set('colorNcpf',  window.localStorage.getItem('colorNcpf') || "");

Session.set('scoreNefm',  window.localStorage.getItem('scoreNefm') || 0);
Session.set('colorNefm',  window.localStorage.getItem('colorNefm') || "");

Session.set('scoreNif',  window.localStorage.getItem('scoreNif') || 0);
Session.set('colorNif',  window.localStorage.getItem('colorNif') || "");

Session.set('scoreNkd',  window.localStorage.getItem('scoreNkd') || 0);
Session.set('colorNkd',  window.localStorage.getItem('colorNkd') || "");

Session.set('scoreNw',  window.localStorage.getItem('scoreNw') || 0);
Session.set('colorNw',  window.localStorage.getItem('colorNw') || "");

Session.set('scoreNnff',  window.localStorage.getItem('scoreNnff') || 0);
Session.set('colorNnff',  window.localStorage.getItem('colorNnff') || "");

Session.set('scoreNacd',  window.localStorage.getItem('scoreNacd') || 0);
Session.set('colorNacd',  window.localStorage.getItem('colorNacd') || "");



function setScoreNutrition() {
  //alert("call setScoreNutrition");

  var scoreNutrition = Math.round(
    (
      parseInt(Session.get('scoreNlcp')) +
      parseInt(Session.get('scoreNcpf')) +
      parseInt(Session.get('scoreNefm')) +
      parseInt(Session.get('scoreNif')) +
      parseInt(Session.get('scoreNkd')) +
      parseInt(Session.get('scoreNw')) +
      parseInt(Session.get('scoreNnff')) +
      parseInt(Session.get('scoreNacd'))
    )/8
  );

  // set color
  if (scoreNutrition>=0) {
    Session.set('colorNutrition', "");
    window.localStorage.setItem('colorNutrition', "");
  }
  if (scoreNutrition>scoreOrange) {
    Session.set('colorNutrition', "orange");
    window.localStorage.setItem('colorNutrition', "orange");
  }
  if (scoreNutrition>scoreGreen) {
    Session.set('colorNutrition', "green");
    window.localStorage.setItem('colorNutrition', "green");
  }


  window.localStorage.setItem('scoreNutrition', scoreNutrition);
  Session.set('scoreNutrition',scoreNutrition);
}

setScoreNutrition();





//################################## 2 - workout

Session.set('scoreWst',  window.localStorage.getItem('scoreWst') || 0);
Session.set('colorWst',  window.localStorage.getItem('colorWst') || "");

Session.set('scoreWs',  window.localStorage.getItem('scoreWs') || 0);
Session.set('colorWs',  window.localStorage.getItem('colorWs') || "");

Session.set('scoreWmlm',  window.localStorage.getItem('scoreWmlm') || 0);
Session.set('colorWmlm',  window.localStorage.getItem('colorWmlm') || "");

Session.set('scoreWcys',  window.localStorage.getItem('scoreWcys') || 0);
Session.set('colorWcys',  window.localStorage.getItem('colorWcys') || "");


function setScoreWorkout() {

  var scoreWorkout = Math.round(
    (
      parseInt(Session.get('scoreWst')) +
      parseInt(Session.get('scoreWs')) +
      parseInt(Session.get('scoreWmlm')) +
      parseInt(Session.get('scoreWcys'))
    )/4
  );

  // set color
  if (scoreWorkout>=0) {
    Session.set('colorWorkout', "");
    window.localStorage.setItem('colorWorkout', "");
  }
  if (scoreWorkout>scoreOrange) {
    Session.set('colorWorkout', "orange");
    window.localStorage.setItem('colorWorkout', "orange");
  }
  if (scoreWorkout>scoreGreen) {
    Session.set('colorWorkout', "green");
    window.localStorage.setItem('colorWorkout', "green");
  }


  window.localStorage.setItem('scoreWorkout', scoreWorkout);
  Session.set('scoreWorkout',scoreWorkout);
}

setScoreWorkout();




//################################## 3 - mental balance

Session.set('scoreMBmr',  window.localStorage.getItem('scoreMBmr') || 0);
Session.set('colorMBmr',  window.localStorage.getItem('colorMBmr') || "");

Session.set('scoreMBm',  window.localStorage.getItem('scoreMBm') || 0);
Session.set('colorMBm',  window.localStorage.getItem('colorMBm') || "");

Session.set('scoreMBst',  window.localStorage.getItem('scoreMBst') || 0);
Session.set('colorMBst',  window.localStorage.getItem('colorMBst') || "");

Session.set('scoreMBsl',  window.localStorage.getItem('scoreMBsl') || 0);
Session.set('colorMBsl',  window.localStorage.getItem('colorMBsl') || "");

Session.set('scoreMBff',  window.localStorage.getItem('scoreMBff') || 0);
Session.set('colorMBff',  window.localStorage.getItem('colorMBff') || "");




function setScoreMentalBalance() {

  var scoreMentalBalance = Math.round(
    (
      parseInt(Session.get('scoreMBmr')) +
      parseInt(Session.get('scoreMBm')) +
      parseInt(Session.get('scoreMBst')) +
      parseInt(Session.get('scoreMBsl')) +
      parseInt(Session.get('scoreMBff'))
    )/5
  );

  // set color
  if (scoreMentalBalance>=0) {
    Session.set('colorMentalBalance', "");
    window.localStorage.setItem('colorMentalBalance', "");
  }
  if (scoreMentalBalance>scoreOrange) {
    Session.set('colorMentalBalance', "orange");
    window.localStorage.setItem('colorMentalBalance', "orange");
  }
  if (scoreMentalBalance>scoreGreen) {
    Session.set('colorMentalBalance', "green");
    window.localStorage.setItem('colorMentalBalance', "green");
  }


  window.localStorage.setItem('scoreMentalBalance', scoreMentalBalance);
  Session.set('scoreMentalBalance',scoreMentalBalance);
}

setScoreMentalBalance();




//################################## 4 - detox

Session.set('scoreDf',  window.localStorage.getItem('scoreDf') || 0);
Session.set('colorDf',  window.localStorage.getItem('colorDf') || "");

Session.set('scoreDh',  window.localStorage.getItem('scoreDh') || 0);
Session.set('colorDh',  window.localStorage.getItem('colorDh') || "");

Session.set('scoreDc',  window.localStorage.getItem('scoreDc') || 0);
Session.set('colorDc',  window.localStorage.getItem('colorDc') || "");

Session.set('scoreDaf',  window.localStorage.getItem('scoreDaf') || 0);
Session.set('colorDaf',  window.localStorage.getItem('colorDaf') || "");

Session.set('scoreDr',  window.localStorage.getItem('scoreDr') || 0);
Session.set('colorDr',  window.localStorage.getItem('colorDr') || "");

Session.set('scoreDas',  window.localStorage.getItem('scoreDas') || 0);
Session.set('colorDas',  window.localStorage.getItem('colorDas') || "");

Session.set('scoreDds',  window.localStorage.getItem('scoreDds') || 0);
Session.set('colorDds',  window.localStorage.getItem('colorDds') || "");



function setScoreDetox() {

  var scoreDetox = Math.round(
    (
			parseInt(Session.get('scoreDf')) +
			parseInt(Session.get('scoreDh')) +
			parseInt(Session.get('scoreDc')) +
			parseInt(Session.get('scoreDaf')) +
			parseInt(Session.get('scoreDr')) +
			parseInt(Session.get('scoreDas')) +
			parseInt(Session.get('scoreDds'))
    )/7
  );

  // set color
  if (scoreDetox>=0) {
    Session.set('colorDetox', "");
    window.localStorage.setItem('colorDetox', "");
  }
  if (scoreDetox>scoreOrange) {
    Session.set('colorDetox', "orange");
    window.localStorage.setItem('colorDetox', "orange");
  }
  if (scoreDetox>scoreGreen) {
    Session.set('colorDetox', "green");
    window.localStorage.setItem('colorDetox', "green");
  }


  window.localStorage.setItem('scoreDetox', scoreDetox);
  Session.set('scoreDetox',scoreDetox);
}

setScoreDetox();





//################################## 5 - supplements

Session.set('scoreSbs',  window.localStorage.getItem('scoreSbs') || 0);
Session.set('colorSbs',  window.localStorage.getItem('colorSbs') || "");

Session.set('scoreSs2',  window.localStorage.getItem('scoreSs2') || 0);
Session.set('colorSs2',  window.localStorage.getItem('colorSs2') || "");

Session.set('scoreSps',  window.localStorage.getItem('scoreSps') || 0);
Session.set('colorSps',  window.localStorage.getItem('colorSps') || "");

Session.set('scoreSs',  window.localStorage.getItem('scoreSs') || 0);
Session.set('colorSs',  window.localStorage.getItem('colorSs') || "");



function setScoreSupplements() {

  var scoreSupplements = Math.round(
    (
      parseInt(Session.get('scoreSbs')) +
      parseInt(Session.get('scoreSs2')) +
			parseInt(Session.get('scoreSps')) +
			parseInt(Session.get('scoreSs'))
    )/4
  );

  // set color
  if (scoreSupplements>=0) {
    Session.set('colorSupplements', "");
    window.localStorage.setItem('colorSupplements', "");
  }
  if (scoreSupplements>scoreOrange) {
    Session.set('colorSupplements', "orange");
    window.localStorage.setItem('colorSupplements', "orange");
  }
  if (scoreSupplements>scoreGreen) {
    Session.set('colorSupplements', "green");
    window.localStorage.setItem('colorSupplements', "green");
  }


  window.localStorage.setItem('scoreSupplements', scoreSupplements);
  Session.set('scoreSupplements',scoreSupplements);
}

setScoreSupplements();




//################################## 6 - quantified self

Session.set('scoreQSbwc',  window.localStorage.getItem('scoreQSbwc') || 0);
Session.set('colorQSbwc',  window.localStorage.getItem('colorQSbwc') || "");

Session.set('scoreQSrhr',  window.localStorage.getItem('scoreQSrhr') || 0);
Session.set('colorQSrhr',  window.localStorage.getItem('colorQSrhr') || "");

Session.set('scoreQSbp',  window.localStorage.getItem('scoreQSbp') || 0);
Session.set('colorQSbp',  window.localStorage.getItem('colorQSbp') || "");

Session.set('scoreQShrv',  window.localStorage.getItem('scoreQShrv') || 0);
Session.set('colorQShrv',  window.localStorage.getItem('colorQShrv') || "");

Session.set('scoreQSk',  window.localStorage.getItem('scoreQSk') || 0);
Session.set('colorQSk',  window.localStorage.getItem('colorQSk') || "");

Session.set('scoreQSs',  window.localStorage.getItem('scoreQSs') || 0);
Session.set('colorQSs',  window.localStorage.getItem('colorQSs') || "");

Session.set('scoreQSgm',  window.localStorage.getItem('scoreQSgm') || 0);
Session.set('colorQSgm',  window.localStorage.getItem('colorQSgm') || "");

Session.set('scoreQSfi',  window.localStorage.getItem('scoreQSfi') || 0);
Session.set('colorQSfi',  window.localStorage.getItem('colorQSfi') || "");

Session.set('scoreQS23',  window.localStorage.getItem('scoreQS23') || 0);
Session.set('colorQS23',  window.localStorage.getItem('colorQS23') || "");

Session.set('scoreQSmgs',  window.localStorage.getItem('scoreQSmgs') || 0);
Session.set('colorQSmgs',  window.localStorage.getItem('colorQSmgs') || "");





function setScoreQuantifiedSelf() {

  var scoreQuantifiedSelf = Math.round(
    (
      parseInt(Session.get('scoreQSbwc')) +
      parseInt(Session.get('scoreQSrhr')) +
      parseInt(Session.get('scoreQSbp')) +
      parseInt(Session.get('scoreQShrv')) +
			parseInt(Session.get('scoreQSk')) +
      parseInt(Session.get('scoreQSs')) +
      parseInt(Session.get('scoreQSgm')) +
      parseInt(Session.get('scoreQSfi')) +
      parseInt(Session.get('scoreQS23')) +
      parseInt(Session.get('scoreQSmgs'))
    )/10
  );

  // set color
  if (scoreQuantifiedSelf>=0) {
    Session.set('colorQuantifiedSelf', "");
    window.localStorage.setItem('colorQuantifiedSelf', "");
  }
  if (scoreQuantifiedSelf>scoreOrange) {
    Session.set('colorQuantifiedSelf', "orange");
    window.localStorage.setItem('colorQuantifiedSelf', "orange");
  }
  if (scoreQuantifiedSelf>scoreGreen) {
    Session.set('colorQuantifiedSelf', "green");
    window.localStorage.setItem('colorQuantifiedSelf', "green");
  }


  window.localStorage.setItem('scoreQuantifiedSelf', scoreQuantifiedSelf);
  Session.set('scoreQuantifiedSelf',scoreQuantifiedSelf);
}

setScoreQuantifiedSelf();





//################################## 7 - biomarkers

Session.set('scoreBbl',  window.localStorage.getItem('scoreBbl') || 0);
Session.set('colorBbl',  window.localStorage.getItem('colorBbl') || "");

Session.set('scoreBfab',  window.localStorage.getItem('scoreBfab') || 0);
Session.set('colorBfab',  window.localStorage.getItem('colorBfab') || "");

Session.set('scoreBgm',  window.localStorage.getItem('scoreBgm') || 0);
Session.set('colorBgm',  window.localStorage.getItem('colorBgm') || "");

Session.set('scoreBg',  window.localStorage.getItem('scoreBg') || 0);
Session.set('colorBg',  window.localStorage.getItem('colorBg') || "");

Session.set('scoreBi',  window.localStorage.getItem('scoreBi') || 0);
Session.set('colorBi',  window.localStorage.getItem('colorBi') || "");

Session.set('scoreBcar',  window.localStorage.getItem('scoreBcar') || 0);
Session.set('colorBcar',  window.localStorage.getItem('colorBcar') || "");

Session.set('scoreBtm',  window.localStorage.getItem('scoreBtm') || 0);
Session.set('colorBtm',  window.localStorage.getItem('colorBtm') || "");

Session.set('scoreBab',  window.localStorage.getItem('scoreBab') || 0);
Session.set('colorBab',  window.localStorage.getItem('colorBab') || "");

Session.set('scoreBme',  window.localStorage.getItem('scoreBme') || 0);
Session.set('colorBme',  window.localStorage.getItem('colorBme') || "");

Session.set('scoreBm',  window.localStorage.getItem('scoreBm') || 0);
Session.set('colorBm',  window.localStorage.getItem('colorBm') || "");







function setScoreBiomarkers() {

  var scoreBiomarkers = Math.round(
    (
			parseInt(Session.get('scoreBfab')) +
			parseInt(Session.get('scoreBbl')) +
			parseInt(Session.get('scoreBg')) +
			parseInt(Session.get('scoreBi')) +
			parseInt(Session.get('scoreBcar')) +
			parseInt(Session.get('scoreBtm')) +
			parseInt(Session.get('scoreBme')) +
			parseInt(Session.get('scoreBab')) +
			parseInt(Session.get('scoreBm'))
    )/9
  );

  // set color
  if (scoreBiomarkers>=0) {
    Session.set('colorBiomarkers', "");
    window.localStorage.setItem('colorBiomarkers', "");
  }
  if (scoreBiomarkers>scoreOrange) {
    Session.set('colorBiomarkers', "orange");
    window.localStorage.setItem('colorBiomarkers', "orange");
  }
  if (scoreBiomarkers>scoreGreen) {
    Session.set('colorBiomarkers', "green");
    window.localStorage.setItem('colorBiomarkers', "green");
  }


  window.localStorage.setItem('scoreBiomarkers', scoreBiomarkers);
  Session.set('scoreBiomarkers',scoreBiomarkers);
}

setScoreBiomarkers();





//################################## 8 - hormones

Session.set('scoreHth',  window.localStorage.getItem('scoreHth') || 0);
Session.set('colorHth',  window.localStorage.getItem('colorHth') || "");

Session.set('scoreHmh',  window.localStorage.getItem('scoreHmh') || 0);
Session.set('colorHmh',  window.localStorage.getItem('colorHmh') || "");

Session.set('scoreHfh',  window.localStorage.getItem('scoreHfh') || 0);
Session.set('colorHfh',  window.localStorage.getItem('colorHfh') || "");

Session.set('scoreHc',  window.localStorage.getItem('scoreHc') || 0);
Session.set('colorHc',  window.localStorage.getItem('colorHc') || "");

Session.set('scoreHp',  window.localStorage.getItem('scoreHp') || 0);
Session.set('colorHp',  window.localStorage.getItem('colorHp') || "");

Session.set('scoreHd',  window.localStorage.getItem('scoreHd') || 0);
Session.set('colorHd',  window.localStorage.getItem('colorHd') || "");


Session.set('scoreHm',  window.localStorage.getItem('scoreHm') || 0);
Session.set('colorHm',  window.localStorage.getItem('colorHm') || "");

Session.set('scoreHgh',  window.localStorage.getItem('scoreHgh') || 0);
Session.set('colorHgh',  window.localStorage.getItem('colorHgh') || "");






function setScoreHormones() {

  var scoreHormones = Math.round(
    (
			parseInt(Session.get('scoreHth')) +
			parseInt(Session.get('scoreHmh')) +
			parseInt(Session.get('scoreHfh')) +
			parseInt(Session.get('scoreHc')) +
			parseInt(Session.get('scoreHp')) +
			parseInt(Session.get('scoreHm')) +
			parseInt(Session.get('scoreHgh')) +
			parseInt(Session.get('scoreHd'))
		)/8
  );

  // set color
  if (scoreHormones>=0) {
    Session.set('colorHormones', "");
    window.localStorage.setItem('colorHormones', "");
  }
  if (scoreHormones>scoreOrange) {
    Session.set('colorHormones', "orange");
    window.localStorage.setItem('colorHormones', "orange");
  }
  if (scoreHormones>scoreGreen) {
    Session.set('colorHormones', "green");
    window.localStorage.setItem('colorHormones', "green");
  }


  window.localStorage.setItem('scoreHormones', scoreHormones);
  Session.set('scoreHormones',scoreHormones);
}

setScoreHormones();







//################################## 9 - checkups

Session.set('scoreCuoa',  window.localStorage.getItem('scoreCuoa') || 0);
Session.set('colorCuoa',  window.localStorage.getItem('colorCuoa') || "");

Session.set('scoreCee',  window.localStorage.getItem('scoreCee') || 0);
Session.set('colorCee',  window.localStorage.getItem('colorCee') || "");

Session.set('scoreCoc',  window.localStorage.getItem('scoreCoc') || 0);
Session.set('colorCoc',  window.localStorage.getItem('colorCoc') || "");

Session.set('scoreCfs',  window.localStorage.getItem('scoreCfs') || 0);
Session.set('colorCfs',  window.localStorage.getItem('colorCfs') || "");

Session.set('scoreCst',  window.localStorage.getItem('scoreCst') || 0);
Session.set('colorCst',  window.localStorage.getItem('colorCst') || "");

Session.set('scoreCm',  window.localStorage.getItem('scoreCm') || 0);
Session.set('colorCm',  window.localStorage.getItem('colorCm') || "");

Session.set('scoreCmt',  window.localStorage.getItem('scoreCmt') || 0);
Session.set('colorCmt',  window.localStorage.getItem('colorCmt') || "");

Session.set('scoreChmt',  window.localStorage.getItem('scoreChmt') || 0);
Session.set('colorChmt',  window.localStorage.getItem('colorChmt') || "");

Session.set('scoreClt',  window.localStorage.getItem('scoreClt') || 0);
Session.set('colorClt',  window.localStorage.getItem('colorClt') || "");

Session.set('scoreCe',  window.localStorage.getItem('scoreCe') || 0);
Session.set('colorCe',  window.localStorage.getItem('colorCe') || "");

Session.set('scoreCu',  window.localStorage.getItem('scoreCu') || 0);
Session.set('colorCu',  window.localStorage.getItem('colorCu') || "");

Session.set('scoreCfbm',  window.localStorage.getItem('scoreCfbm') || 0);
Session.set('colorCfbm',  window.localStorage.getItem('colorCfbm') || "");

Session.set('scoreCscs',  window.localStorage.getItem('scoreCscs') || 0);
Session.set('colorCscs',  window.localStorage.getItem('colorCscs') || "");

Session.set('scoreCc',  window.localStorage.getItem('scoreCc') || 0);
Session.set('colorCc',  window.localStorage.getItem('colorCc') || "");

Session.set('scoreCg',  window.localStorage.getItem('scoreCg') || 0);
Session.set('colorCg',  window.localStorage.getItem('colorCg') || "");

Session.set('scoreCccs',  window.localStorage.getItem('scoreCccs') || 0);
Session.set('colorCccs',  window.localStorage.getItem('colorCccs') || "");







function setScoreCheckups() {

  var scoreCheckups = Math.round(
    (
			parseInt(Session.get('scoreCuoa')) +
			parseInt(Session.get('scoreCee')) +
			parseInt(Session.get('scoreCoc')) +
			parseInt(Session.get('scoreCfs')) +
			parseInt(Session.get('scoreCst')) +
			parseInt(Session.get('scoreCm')) +
			parseInt(Session.get('scoreCmt')) +
			parseInt(Session.get('scoreChmt')) +
			parseInt(Session.get('scoreClt')) +
			parseInt(Session.get('scoreCe')) +
			parseInt(Session.get('scoreCu')) +
			parseInt(Session.get('scoreCfbm')) +
			parseInt(Session.get('scoreCscs')) +
			parseInt(Session.get('scoreCc')) +
			parseInt(Session.get('scoreCg')) +
			parseInt(Session.get('scoreCccs'))
		)/16
  );

  // set color
  if (scoreCheckups>=0) {
    Session.set('colorCheckups', "");
    window.localStorage.setItem('colorCheckups', "");
  }
  if (scoreCheckups>scoreOrange) {
    Session.set('colorCheckups', "orange");
    window.localStorage.setItem('colorCheckups', "orange");
  }
  if (scoreCheckups>scoreGreen) {
    Session.set('colorCheckups', "green");
    window.localStorage.setItem('colorCheckups', "green");
  }


  window.localStorage.setItem('scoreCheckups', scoreCheckups);
  Session.set('scoreCheckups',scoreCheckups);
}

setScoreCheckups();







// ########### SET FH Score ##########################################################
    function setScoreForeverHealthy() {
      //alert("call setScoreForeverHealthy");

      var scoreForeverHealthy = Math.round(
        (
          parseInt(Session.get('scoreNutrition')) +
          parseInt(Session.get('scoreWorkout')) +
          parseInt(Session.get('scoreMentalBalance')) +
					parseInt(Session.get('scoreDetox')) +
					parseInt(Session.get('scoreSupplements')) +
					parseInt(Session.get('scoreQuantifiedSelf')) +
					parseInt(Session.get('scoreBiomarkers')) +
					parseInt(Session.get('scoreHormones')) +
					parseInt(Session.get('scoreCheckups'))
        )/9
      );

      if (scoreForeverHealthy>=0) {
        Session.set('colorForeverHealthy', "");
        window.localStorage.setItem('colorForeverHealthy', "");
      }
      if (scoreForeverHealthy>scoreOrange) {
        Session.set('colorForeverHealthy', "orange");
        window.localStorage.setItem('colorForeverHealthy', "orange");
      }
      if (scoreForeverHealthy>scoreGreen) {
        Session.set('colorForeverHealthy', "green");
        window.localStorage.setItem('colorForeverHealthy', "green");
      }

      window.localStorage.setItem('scoreForeverHealthy', scoreForeverHealthy);
      Session.set('scoreForeverHealthy', scoreForeverHealthy);

}

setScoreForeverHealthy();


// ########### ACCORDION ##########################################################

Template.body.events({
  "click .accordion-toggle": function(event, template){
    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    //$(".accordion-content").not($(this).next()).slideUp('fast');
  }

});

Template.body.events({
  "click .statusSmall": function(event, template){
    //Expand or collapse this panel
    $(this).next().next().slideToggle('fast');

    //Hide the other panels
    //$(".accordion-content").not($(this).next()).slideUp('fast');
  }

});



// ########### SLIDER ##########################################################

  Template.body.events({

    "change .fhSlider": function(event, template){
        event.stopPropagation();
        var sliderValue = event.target.value;
        var sliderId = event.target.id;

        if (sliderValue>=0) {
          Session.set(event.target.name, "");
          window.localStorage.setItem(event.target.name, "");
        }

        if (sliderValue>scoreOrange) {
          Session.set(event.target.name, "orange");
          window.localStorage.setItem(event.target.name, "orange");
        }
        if (sliderValue>scoreGreen) {
          Session.set(event.target.name, "green");
          window.localStorage.setItem(event.target.name, "green");
        }

        // SET SUB-SCORE
        window.localStorage.setItem(sliderId, sliderValue);
        Session.set(sliderId, sliderValue);

        // SET CHAPTER-SCORE;
        //var chapterScore = $(event.target).parent().parent().parent().attr("name"); // #### name in template accordion div
        //window[chapterScore]();
        setScoreNutrition();
        setScoreWorkout();
				setScoreMentalBalance();
				setScoreDetox();
				setScoreSupplements();
				setScoreQuantifiedSelf();
				setScoreBiomarkers();
				setScoreHormones();
				setScoreCheckups();


        //set FH-score
        setScoreForeverHealthy();

      }

  });
