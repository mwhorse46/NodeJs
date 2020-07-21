const WS = new WebSocket('ws://localhost:3232');

WS.onmessage=(payload)=>{
    displayMessages(payload.data);
};

WS.onopen=()=>{
    displayTitle('Connected to server');
};

WS.onclose=()=>{
    displayTitle('Disconnected to server');
};

function displayTitle(title){
    document.querySelector('h1').innerHTML=title;
}

function displayMessages(message){
    let h1=document.createElement('h1');
    h1.innerText=message;
    document.querySelector('div.messages').appendChild(h1);
}

document.forms[0].onsubmit = ()=>{
    let input=document.getElementById('message');
    // console.log(input.value);
    WS.send(input.value);
};