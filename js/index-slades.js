			i=0;
			q=0;
			back=-200;
			var sladebts=["slade-bt1","slade-bt2","slade-bt3"];
			
			function slbt(btid,btq){
				i=btid;
				q=btq;
				slade();
				
			}
			
			function slback(){
				if(i<=-200){
					i=0;
					q=0;
				}else{
					q++;
					i=i-100;
				}
				
				slade();
				
				
			}
			
			
			
			function slade(){
				for(slb=0;slb<sladebts.length;slb++){
			document.getElementById(sladebts[slb]).style.backgroundColor="rgba(0,191,255,0.4)";
				 }
				 back=i;
				 
			if(i<=-200){
				i=0;
				q=0;
			}else{
				q++;
				i=i-100;
			}
			document.getElementById('slade-images').style.left=i+'%';
			document.getElementById(sladebts[q]).style.backgroundColor="coral";
			
			}
			
			sss=window.setInterval(slade, 3000);
			