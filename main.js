var questionData = [
// This is one question
  {
    "id": 1,
    "question": "You wake up in a Tavern and on you, you have 5 coins, a small dagger and a key. When you look around you see the bar, a shady person in the corner and the door.",
    "answers": {
      "DRINK": 2,
      "TALK": 3,
      "LEAVE": 4
    }
  },
  {
    "id": 2,
    "question": "You walk over and the man there says a pint is 3 coins.",
    "answers": {
      "PAY": 5,
      "STEAL": 6,
      "BARTER": 7
    }
  },
  {
    "id": 3,
    "question": "The person says 'Hey kid, wanna test this potion I concocted? it's not lethal!'",
    "answers": {
      "TEST": 8,
      "GO": 9
    }
  },
  {
    "id": 4,
    "question": "You enter a street and see a house that looks familiar. Try the...",
    "answers": {
      "DOOR": 10,
      "HATCH": 11
    }
  },
  {
    "id": 5,
    "question": "You take a chug and you begin to feel queasy and then you blackout. When you wake up you are in a prison cell in the Guards Tower. You see a Guard out through the bars, a barred of window and a metal pole on the floor."
  },
  {
    "id": 6,
    "question": "Whilst the bartender has his backturned, You grab the glass and try to sneak it out. Before you get far another man at the bar ,of which is very beefy, says to you 'Oi! You gonna pay for that aren't ya boy? Without thinking you automatically reply with 'Back off!'. The man stands up to you fiercly."
  },
  {
    "id": 7,
    "question": "You decide that the price is Outrageous! 'That's ridiculous, come on, I have no memory and I just woke up, can't we make a deal?' The bartender leans towards you and stares at you dead in the eye. He says 'GET... OUT...' you leave out the back entrance... Where do you go?",
    "answers": {
      "BLACKSMITH": 12,
      "BUTCHER": 13,
      "LIBRARY": 14
    }
  },
  {
    "id": 8,
    "question": "Sure, why not. Just listen to the creepy guy with the random drink. Anyways you take a gulp and Pass out. Shoulda seen that coming. You wake up in a Dark room and your tied to a chair with rope. Around the room are Flame torches and on the floor is a switch.",
    "answers": {
      "SHUFFLE": 15,
      "KICK": 16
    }
  },
  {
    "id": 9,
    "question": "You decline but as you walk off the man draws a Revolver and shoots you in the back and you collapse to the floor. You regain conciousness and you are in an Infirmary.",
    "answers": {
      "CALL": 17,
      "DITCH": 18
    }
  },
  {
    "id": 10,
    "question": "You put in the key and the door clicks. As you enter everything is trashed. The backdoor is slammed down, there's a blood patch on the counter and a fire.",
    "answers": {
      "CHECK": 19,
      "TEST": 20,
      "TEND": 21
    }
  },
  {
    "id": 11,
    "question": "As you open the trapdoor, you fall down into the pit. When you hit the ground, you're head clangs against a pile of ,surprisingly clean, bones and skulls. As you look around you see a red fiery orb, A shield with arrows lodged inside of it and a Mecidinal root.",
    "answers": {
      "ORB": 23,
      "SHIELD": 24,
      "PLANT": 25
    }
  },
  {
    "id": 12,
    "question": "blacksmith..."
  },
  {
    "id": 13,
    "question": "butcher..."
  },
  {
    "id": 14,
    "question": "library..."
  }
];


// Don't edit below here! :)

var displayQuestion = function (questionId) {
  var question = questionData[questionId];
  if (question) {
    if (question.answers && Object.keys(question.answers).length) {

      var theQuestion = question.id + ': ' + question.question;
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
        var thisValue = theAnswers[answer] - 1;
        thisButton.setAttribute("onclick","displayQuestion("+thisValue+")", false);
        buttonArea.appendChild(thisButton);
      }

    } else {
      // No answers needed, just show the text!
      document.querySelector('.question').innerText = question.id + ': ' + question.question;
      document.querySelector('.buttons').innerHTML = '';
    }
  } else {
    // That's uh... not a question. Awkward.
    alert("That's not an option Wary Traveller...");
  }
};

displayQuestion(0);
