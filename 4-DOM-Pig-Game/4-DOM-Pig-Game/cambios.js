   var scores, roundScore, activePlayer, gamePlaying; 

        init();

    var lastDice;

   document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // Numero aleatorio
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //Mostrar resultado
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        // Actulizar puntuación
        if (dice1 !== 1 && dice2 !== 1){
            
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
        
        /*
        if(dice === 6 && lastDice === 6){
                // Jugador pierde puntuación
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }    
        else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
        
         lastDice = dice;
         */
    }    
});

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying){
     // Añadir puntuación actual a puntuación global
        scores[activePlayer] += roundScore;
        
        // Actualizar la interfaz 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.puntuacion-final').value;
        var winnigScore;
            
        if(input){
             winnigScore = input;
        }
            else{
                winnigScore = 100;
            }
        //Revisar si el jugador gana el juego
                
            if (scores[activePlayer] >= winnigScore) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.getElementById('dice-1').style.display = 'none';
                document.getElementById('dice-2').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
        
             //Siguiente jugador
            nextPlayer();
            }
        }
 
    });

        function nextPlayer(){
            
             //Siguiente jugador
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
              document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            
           // document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            
            document.querySelector('dice-1').style.display = 'none';
            document.querySelector('dice-2').style.display = 'none';

        }
 
    
        document.querySelector('.btn-new').addEventListener('click', init);
        
        function init() {
            scores = [0, 0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
            
            
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1!';
    document.getElementById('name-1').textContent = 'Player 2!';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  
        }