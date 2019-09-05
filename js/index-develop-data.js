		develop1=0;

function nu1(){

	   if(develop1>=41){
		  
	  	clearInterval(developspan1);
		 return;
	  }  
		    develop1++;    
		       var span1 = document.getElementById("develop-1-1");
			   document.getElementById("develop-1-1").style.color = "#FF4500";
		       span1.innerText =develop1;
			   
	}
	
		develop2=0;
		isize=1.5;
function nu2(){
		
		isize=isize+0.01;
	   if(develop2>=70){
		  
	  	clearInterval(developspan2);
		 return;
	  }  
		    develop2++;    
		       var span2 = document.getElementById("develop-1-2");
			   document.getElementById("develop-1-2").style.color = "#FF4500";
			    document.getElementById("develop-1-2").style.fontSize = isize+"rem";
		       span2.innerText =develop2;
			   
	}