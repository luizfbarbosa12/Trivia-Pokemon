let counter = 0;
const getUserName = (batata) => {
        let userName = document.getElementById('userName').value;
        document.getElementById('greetings').innerHTML = 'Bem vindo, treinador(a), ' + userName + ' !';

}
    
const switchScreens = (divToHide, divToShow) => {
        document.getElementById(divToHide).style.display = 'none';
        document.getElementById(divToShow).style.display = 'block';
 }

const getResultsNormal = (groupName, rightAnswer) => {
        let userAnswer = document.querySelector('input[name = '+ groupName + ']:checked').value;
        console.log("resposta do Usuario", userAnswer);
        console.log("Resposta certa", rightAnswer);

        if(userAnswer === rightAnswer){
        counter++;
        console.log("Você acertou " + counter);
        } else {
        console.log('Você errou');
        } 
     
}

const finalResultNormal = () => {
      if(counter === 3) {
        document.getElementById('result1.1').innerHTML = 'Você é mais inteligente que um Chatot, você acertou todos os ' + counter;      
      } else if (counter === 2) {
        document.getElementById('result1.1').innerHTML = 'Você ainda pode melhorar, você acertou ' + counter;
      } else {
        document.getElementById('result1.1').innerHTML = 'Você precisa estudar a Pokedex, você acertou ' + counter;     
      }
}
const finalResultElectric = () => {
        if(counter === 3) {
          document.getElementById('result2.1').innerHTML = 'Você causou um choque e tanto, você acertou todos os ' + counter;      
        } else if (counter === 2) {
          document.getElementById('result2.1').innerHTML = 'Você ainda pode melhorar, você acertou ' + counter;
        } else {
          document.getElementById('result2.1').innerHTML = 'Você precisa estudar a Pokedex, você acertou ' + counter;     
        }
  }
  const finalResultGrass = () => {
        if(counter === 3) {
          document.getElementById('result3.1').innerHTML = 'Foi tudo um mar de rosas, você acertou todos os ' + counter;      
        } else if (counter === 2) {
          document.getElementById('result3.1').innerHTML = 'Você ainda pode melhorar, você acertou ' + counter;
        } else {
          document.getElementById('result3.1').innerHTML = 'Você precisa estudar a Pokedex, você acertou ' + counter;     
        }
  }