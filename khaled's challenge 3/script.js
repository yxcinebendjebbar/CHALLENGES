let message1 = "'Day one is always better than one day .'";
let message2 = "'That mountain you've been carrying ," + "<br>" + " you were only supposed to climb .'";
let message3 = "'This shall pass too , just hang in there .'";
let message4 = "'It's okay if all you did today was to survive .'";



Promise.all([new Promise(()=>{
    setInterval(()=>{
        document.getElementById("message").innerHTML=message1;
    },5000);
}),new Promise(()=>{
    setInterval(()=>{
        document.getElementById("message").innerHTML=message2;
    },10000);
}),new Promise(()=>{
    setInterval(()=>{
        document.getElementById("message").innerHTML=message3;
    },15000);
}),new Promise(()=>{
    setInterval(()=>{
        document.getElementById("message").innerHTML=message4;
    },20000);})
]).then();
