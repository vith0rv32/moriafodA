document.addEventListener("DOMContentloaded", () => {

const cards = [
    {
        name:'Toyota',
        img:'carrosfodas/toyota.png',    
    },
    {
        name:'Ferrari',
        img:'carrosfodas/ferrari.png',    
    }, 
    {
        name:'Lamborghini',
        img:'carrosfodas/lamborghini.png',    
    }, 
    {
        name:'Nissan',
        img:'carrosfodas/nissan',    
    }, 
    {
        name:'BMW',
        img:'carrosfodas/bmw.jpeg',    
    }, 
    {
        name:'Koenigsegg',
        img:'carrosfodas/koenigsegg.png',    
    },  
    {
        name:'Toyota',
        img:'carrosfodas/toyota',
    },
    {
        name:'Ferrari',
        img:'carrosfodas/ferrari.png',   
    },     
    {
        name:'Lamborghini',
        img:'carrosfodas/lamborghini.png',    
    }, 
    {
        name:'Nissan',
        img:'carrosfodas/nissan',    
    }, 
    {
        name:'Subaru',
        img:'carrosfodas/subaru',    
    }, 
    {
        name:'koenigsegg',
        img:'carrosfodas/koenigsegg.png',    
    }
]
 
  //embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random());
  //carregar elementos html no script
  const board = document.querySelector('.board');
  const resulView = document.querySelector('#result');
let cardsChosen = []; //cartas escolhidas
let cardsChosenId = []; //id das cartas escolhidas
let cardsWon = [] //cartas combinadas 

  //criar o quadro de cartas
  function createBoard(){
    for(let i = 0; i < cards.length; i ++){
        const card = document.createElement('img');
        card.setAttribute('src', 'carrosfodas/ferrari   .png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
       
    }
  }
  createBoard();
});
