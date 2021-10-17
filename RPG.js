const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ')

readlineSync.question('Hello ' + name +', welcome to LOST WORLD! Here you will risk your life to defeat evil. Press ENTER to begin.');

const badGuys = ['Reaper','Whisperer','Wolf','Joe Biden'];
const treasure = ['Medkit','Body Armor','Armory Stash','Health Rations'];
var prize = [];
let userHealth = 40;
const options = ['Walk','Exit','Print'];
let pickUp = treasure[Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badguy = badGuys[Math.floor(Math.random() * badGuys.length)];
    let badGuysHealth = 40;
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

    const index = readlineSync.keyInSelect(options, 'What would you like to do next?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking.....');
        } else if (key >= .3) {
            console.log('A ' + badguy + ' showed up.');

            while(badGuysHealth > 0 && userHealth > 0) {

                const user = readlineSync.question('What do you want to do? Enter "r" to run or "a" to attack: ');

                switch (user){
                    case 'r': 
                        const run = Math.random();
                        if(run < .5) {
                            console.log('Before you can run away ' + badguy + ' attacks you with: ' + badGuysPower);
                        } else {
                            console.log('You ran away!!');
                            break;
                        }
                    
                    case 'a':
                        badGuysHealth -= attackPower;
                        console.log('You attacked ' + badguy + ' with ' + attackPower + ' attack power' );
                        
                        userHealth -= badGuysPower;
                        console.log(badguy + ' just attacked you with: ' + badGuysPower + ' attack power');

                        if (badGuysHealth <= 0 ){
                            console.log('You killed ' + badguy + '.\n' + badguy + ' left: ' + pickUp); 
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(pickUp);
                            }
                            } else if(userHealth <= 0) {
                                console.log(badguy + ' has defeated you. You are DEAD!')
                            }
                        }
                    }

                
            }
        }
    }
while(userHealth > 0){
    game();
}
