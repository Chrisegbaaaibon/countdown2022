const countDown = ()=>{
   const countDate = new Date('January 1, 2022 00:00:00').getTime();
   const now = new Date().getTime();
   const gap = countDate-now

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const textDay =Math.floor(gap/day)
   const textHour = Math.floor((gap%day) /hour) 
   const textMinute = Math.floor((gap%hour) /minute) 
   const textSecond = Math.floor((gap%minute) /second) ;

   document.querySelector(".day").innerText = textDay;
   document.querySelector(".hour").innerText = textHour;
   document.querySelector(".minutes").innerText = textMinute;
   document.querySelector(".seconds").innerText = textSecond;
   console.log(gap)

   if(now == countDate){
      document.querySelector(".waiting").innerHTML(`<img src="./NewYear.gif" alt="HAPPY NEW YEAR!">`)
      document.querySelector(".head").innerText("HAPPY NEW YEAR!")
   }
}

setInterval(countDown, 1000)