var readline =require('readline');
var util = require('util');

var RL = readline.createInterface(process.stdin,process.stdout);

RL.question('what is your name? ',(name)=>{
    RL.setPrompt(`${name} how old are you? `);
    RL.prompt();

    RL.on('line',(age)=>{

        if (age<18){
            util.log(`${name.trim()} beacuse you are ${age} years old, you cann't proceed further`);
        }else{
            util.log(`${name.trim()} , you are ${age} years old, NOw you can use our services`);
        }
        
        RL.close();
    });
});