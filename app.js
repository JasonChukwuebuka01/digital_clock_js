window.onload=()=>{
    
    
 let day = document.querySelector("#day");
 let hour = document.querySelector("#hour");
 let min = document.querySelector("#minutes");
 let ampm = document.querySelector("#Ampm");
 let clockBox = document.querySelector(".clock_box");
 let newHour = document.querySelector("#new_hour");
 let container= document.querySelector(".container");
 let arrDays = ["Sun","Mon","Tue","Wed", "Thu","Fri","Sat"];
 let toggleCount=0;
 let ampms;
 let hours;
 let days;
 let mins
 let militaryHour;
 
       
 
 
 setInterval(setTime,200);
 clockBox.addEventListener("click",visibilityToggle);
 
    
 
 
    
//CASE 1: (Function called every 200miliseconds to get date);
   function setTime(){
 
      let date = new Date();
      days= date.getDay();
      militaryHour = hours= date.getHours();
      mins = date.getMinutes();
      ampms = hours < 12? "Am" :"Pm";
      
      hours = hours % 12;// converting clock to 12 hour type.
      hours =hours <= 9 ? "0"+ hours : hours;
      militaryHour = militaryHour <= 9 ? "0"+ militaryHour : militaryHour;
      hours = hours == 0 ? 12: hours;
      mins =mins <= 9 ? "0"+ mins : mins;
       
      day.innerHTML= arrDays[days];
      newHour.innerHTML = hours;
      hour.innerHTML = militaryHour;
      ampm.innerHTML = ampms;
      min.innerHTML = mins;
       
            
  }//End of setTime();
  
  



//CASE 2:(Function to toggle visibility and give bg-colors);
           
    function visibilityToggle(){
           toggleCount += 1;
            
        if(toggleCount === 1){
        
          newHour.style.visibility="hidden";
          hour.style.visibility ="visible";
          day.style.backgroundColor="#DFD6A7";
          hour.style.backgroundColor="#F7CE5B";
          min.style.backgroundColor="#F7B05B";
          ampm.style.backgroundColor="#AF9B46";
          container.style.background="conic-gradient(at 0% 0%, snow, white)";
    
          
             
       }else if(toggleCount === 2){
                 
           newHour.style.visibility="visible";
           hour.style.visibility ="hidden";
           newHour.style.backgroundColor="transparent";
           day.style.backgroundColor="transparent";
           hour.style.backgroundColor="transparent";
           min.style.backgroundColor="transparent";
           ampm.style.backgroundColor="transparent";
           container.style.background="conic-gradient(from -135deg at -10% center, #ffa500, #ff7715, #ff522a, #ff3f47, #ff5482, #ff69b4)";
           
          toggleCount =0;
          };
           
     };// End of visibilityToggle();
           
    
}//End of General()✅