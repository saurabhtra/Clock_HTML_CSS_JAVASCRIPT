setInterval(() => {
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    hrotaion = 30*htime + mtime/2;

    mrotaion=6*mtime;

    srotaion=6*stime;
    hour.style.transform = `rotate(${hrotaion}deg)`;
    minute.style.transform = `rotate(${mrotaion}deg)`;
    second.style.transform = `rotate(${srotaion}deg)`;
}, 1000);
console.log('hoo')