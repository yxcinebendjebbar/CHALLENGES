document.addEventListener("DOMContentLoaded",function(){
 	var a=140;
   	var b;
   document.addEventListener("keyup", function(){
   	
   	
   	let t= document.querySelector("#one").innerHTML;
    	if (t==="DZD")
    	{
    		b=document.querySelector("#entry").value/a;
    	   	document.querySelector("#result").value=b;
  	}
  	else
    	{
    		b=document.querySelector("#entry").value*a;
    	   	document.querySelector("#result").value=b;
  	}

  	
     
     });
   
    document.querySelector("#switch").addEventListener("click", function(){
        let t= document.querySelector("#one").innerHTML;
    	if (t==="DZD")
    	{
    		document.querySelector("#one").innerHTML="EUR";
  			document.querySelector("#two").innerHTML="DZD";
			let y=document.querySelector("#entry").value;
			let z=document.querySelector("#result").value;
			document.querySelector("#entry").value=z;
			document.querySelector("#result").value=y;
  		}
  		else
    	{
    		document.querySelector("#one").innerHTML="DZD";
  			document.querySelector("#two").innerHTML="EUR";
			  let y=document.querySelector("#entry").value;
			  let z=document.querySelector("#result").value;
			  document.querySelector("#entry").value=z;
			  document.querySelector("#result").value=y;
  		}
    })

});
