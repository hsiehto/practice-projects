const score = JSON.parse(localStorage.getItem('score'))
      // computer randomly selects a move
      function randomMove() {
        const randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber === 0) {
          return "Rock"
        } else if (randomNumber === 1) {
          return "Paper"
        } else {
          return "Scissors"
        }
      }

      updateScoreElement();

      function checkMove(playerMove) {
        
        // compare the moves to get the result
        // display the result in a popup
        // any variable created inside the curly brackets, will only exist inside
        // store in variable or randomMove will update to new random number each time its called
        let result = '';
        const cpuMove = randomMove();
        if (playerMove === cpuMove) {
          score.ties += 1
          result = 'DRAW!';
//             alert(`${playerMove} vs ${cpuMove}, ${result}!
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
        
        // develop win conditions
        } else if (playerMove === "Rock" && cpuMove === "Scissors" ||
        playerMove === "Paper" && cpuMove === "Rock" || playerMove === "Scissors" && cpuMove === "Paper") {
          score.wins += 1
          result = 'WIN!';
//             alert(`${playerMove} vs ${cpuMove}, ${result}!
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
        // develop lose conditions
        } else {
          score.losses += 1
          result = 'LOSE!';
//             alert(`${playerMove} vs ${cpuMove}, ${result}!
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
        }
        localStorage.setItem('score', JSON.stringify(score))
        updateScoreElement();

        document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-move')
        .innerHTML = `You
      <img src="practice-projects/images/${playerMove}-emoji.png" 
      class="move-icon">
      <img src="practice-projects/images/${cpuMove}-emoji.png"
      class="move-icon">
      Computer` 
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
      }

      let intervalId;
      let isAutoPlaying = false;

      function autoPlay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(() => {
            const playerMove = randomMove();
            checkMove(playerMove);
          }, 1000);
          isAutoPlaying = true;
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }

      document.querySelector('.js-rock-button').addEventListener('click', () => checkMove('Rock'))
      document.querySelector('.js-paper-button').addEventListener('click', () => checkMove('Paper'))
      document.querySelector('.js-scissors-button').addEventListener('click', () => checkMove('Scissors'))
      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          checkMove('Rock')
        } else if (event.key === 'p') {
          checkMove('Paper')
        } else if (event.key === 's') {
          checkMove('Scissors')
        }
      })
      /* 1/11/2024 
      After we update our score, we're going to save it in local save
      it in localStorage.setItem. localStorage only supports strings, convert our
      score object into JSON string, using JSON.stringify. We then update our score
      variable with the updated object. */