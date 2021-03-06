var playerInventory = {
  "sword": false,
  "axe": false,
  "staff": false,
  "key": true,
  "meat": false,
  "dragonEye": false,
  "coins": 5,
  "knife": true
};
// Don't edit below here! :)

var displayQuestion = function (questionId) {
  'use strict';

  var question = null;
  for (var i = 0; i<questionData.length;i++) {
    if (questionData[i].id === questionId) {
      question = questionData[i];
    }
  }
  if (question !== null) {

    // Change the picture if it's specified
    if (question.picture && question.picture.length) {
      var pictureEl = document.querySelector('#picture');
      var newSrc = "images/" + question.picture;

      pictureEl.src = newSrc;
    }

    // Update the inventory
    if (question.inventory) {
      if (question.inventory.coins) {
        if (playerInventory.coins === 0) {
          // If not enough coins, get the fudge out of dodge.
          return;
        }
        playerInventory.coins += question.inventory.coins;

        document.querySelector('.inventory div span').innerText = playerInventory.coins;
      }
      if (question.inventory.sword) {
        playerInventory.sword = true;
        document.querySelector('.inventory .sword').classList.add("show");
      }
      if (question.inventory.axe) {
        playerInventory.axe = true;
        document.querySelector('.inventory .axe').classList.add("show");
      }
      if (question.inventory.staff) {
        playerInventory.staff = true;
        document.querySelector('.inventory .staff').classList.add("show");
      }
      // console.log("Updated inventory", playerInventory);
    }

    // Can this question auto navigate?
    if (question.auto_navigate) {
      setTimeout(function () {
        displayQuestion(question.auto_navigate);
      }, 1500);
    }
    if (question.answers && Object.keys(question.answers).length) {

      var theQuestion = question.question;
      var questionArea = document.querySelector('.question');


      questionArea.innerText = theQuestion;

      var theAnswers = question.answers;
      var buttonArea = document.querySelector('.buttons');

      buttonArea.innerHTML = '';

      var newButtonHTML = '';
      var answerButton = document.createElement('button');
      for (var answer in theAnswers) {
        var thisButton = answerButton.cloneNode(false);
        thisButton.innerText = answer;
        var thisValue = theAnswers[answer];
        thisButton.setAttribute("onclick","displayQuestion("+thisValue+")", false);

        // Crappy inventory management....
        var weapons = ["SWORD", "AXE", "STAFF"];
        var show_button = true;
        for (var i = 0; i<weapons.length;i++) {
          var weapon = weapons[i];
          if (
            playerInventory[weapon.toLowerCase()] === true &&
            answer === weapon
          ) {
            show_button = false;
          }
        };
        if (!show_button) {
          continue;
        }
        buttonArea.appendChild(thisButton);
      }

    } else {
      // No answers needed, just show the text!
      document.querySelector('.question').innerText = question.question;
      document.querySelector('.buttons').innerHTML = '';
    }
  } else {
    // That's uh... not a question. Awkward.
    alert("That's not an option Wary Traveller...");
  }
};

displayQuestion(0);
