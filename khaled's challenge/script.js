// TODO: Add code to check answers to questions

document.addEventListener("DOMContentLoaded",function(){
 
    document.addEventListener("keypress", function(){
    
      let btn = document.getElementById('check');
      
      if(event.key === "Enter") {
         
        btn.click();
      }
        
    });
    
     document.querySelector("#check").addEventListener("click", function(){
         var c=0;
         let input =document.querySelector("#usrn");
         var usrnm = /^[a-z0-9_.]+$/;
         if (input.value.match(usrnm))
             {
                 input.style.borderColor="green";
              document.querySelector("#answercheck1").innerHTML=" ";
              c++;
             }
         else
             {
                 input.style.borderColor="red";
                 document.querySelector("#answercheck1").innerHTML="Please enter a valid username !";
 
             }
             
         input = document.querySelector("#email");
         var em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         
         
         if (input.value.match(em))
             {
                 input.style.borderColor="green";
                 document.querySelector("#answercheck2").innerHTML=" ";
                 c++;
 
             }
         else
             {
                 input.style.borderColor="red";
                 document.querySelector("#answercheck2").innerHTML="Please enter a valid email !";
             }
             
         input = document.querySelector("#pass");
         var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
         
         
         if (input.value.match(passw))
             {
                 input.style.borderColor="green";
                 document.querySelector("#answercheck3").innerHTML=" ";
                 c++;
             }
         else
             {
                 input.style.borderColor="red";
                 document.querySelector("#answercheck3").innerHTML="Please enter a valid password"+"<br>"+"(at least :1 cap , 1 min ,1 special char)";
             }
          input = document.querySelector("#check");
          if (c===3)
             {
                document.querySelector("#checkanswer").innerHTML="Successfully signed up !";
                
 
             }
         else
             {
     
                document.querySelector("#checkanswer").innerHTML="Operation failed , retry !";
             }
     })
 
 });
