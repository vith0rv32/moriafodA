document.addEventListener("DOMContentloaded", () => {

const cards = [
    {
        name:'android'
        img:'images/android.png',    
    },
    {
        name:'chrome'
        img:'images/chrome.png',    
    }, 
    {
        name:'git'
        img:'images/git.png',    
    }, 
    {
        name:'stackoverflow'
        img:'images/stackoverflow.png',    
    }, 
    {
        name:'linux'
        img:'images/linux.png',    
    }, 
    {
        name:'github'
        img:'images/github.png',    
    },  {
        name:'android'
        img:'images/android.png',    
    },
    {
        name:'chrome'
        img:'images/chrome.png',    
    }, 
    {
        name:'git'
        img:'images/git.png',    
    }, 
    {
        name:'stackoverflow'
        img:'images/stackoverflow.png',    
    }, 
    {
        name:'linux'
        img:'images/linux.png',    
    }, 
    {
        name:'github'
        img:'images/github.png',    
    }
]
 
  //embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random());
  //carregar elementos html no script
  const board = document.querySelector('.board');
  const resulView = document.querySelector('#result')
let cardsChosen = []; //cartas escolhidas
let cardsChosenId = []; //id das cartas escolhidas
let cardsWon = [] //cartas combinadas 


});
