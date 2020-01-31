let gameNumber = prompt('Enter a number: 1, 2, or 3 below and I will tell you about a game.')
const gamesList = [
    {title: 'Settlers of Catan', type: 'board game', numberOfPlayers: '3-4 people'},
    {title: 'Kings Cup', type: 'drinking game', numberOfPlayers: '8-12 people'},
    {title: 'Bananagrams', type: 'word game', numberOfPlayers: '3-7 people'}
]
console.log(gamesList);
alert('You have selected "' + gamesList[gameNumber].title + '"!' + ' It is a ' + gamesList[gameNumber].type + ', and ' +gamesList[gameNumber].numberOfPlayers + ' can play.')