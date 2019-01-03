var time = 0;
var timer = setInterval(()=>{
  time += 2;
  console.log(time + ' seconds have passed')
  if (time > 12) {
    clearInterval(timer);
  }
}, 3000);
