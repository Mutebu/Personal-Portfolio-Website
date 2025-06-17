const startTime=new Date("2025-06-12T16:40:00.000+04:00");

function updateSeconds(){
    const now = new Date();
    const diffInSeconds=Math.floor((now-startTime)/1000);
    document.getElementById('seconds').innerHTML = diffInSeconds;
}

updateSeconds();
setInterval(updateSeconds, 1000);


