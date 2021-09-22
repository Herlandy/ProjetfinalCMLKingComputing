var mycan=document.querySelector("#monCanva").getContext('2d');

		//forme maison
		mycan.beginPath();
		mycan.moveTo(400,200);
		mycan.lineTo(500,300);
		mycan.lineTo(500,425);
		mycan.lineTo(300,425);
		mycan.lineTo(300,300);
		mycan.lineTo(400,200);
		mycan.lineWidth=4;
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#ffcd25';
		mycan.fill();

		//frome rectangle
		mycan.beginPath();
		mycan.moveTo(400,220);
		mycan.lineTo(455,280);
		mycan.lineTo(345,280);
		mycan.lineTo(400,220);
		mycan.lineWidth=4;		
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#cbf9f9';
		mycan.fill();

		mycan.beginPath();
		mycan.moveTo(400,218);
		mycan.lineTo(400,280);	
		mycan.lineWidth=2;	
		mycan.stroke();
		mycan.closePath();
		mycan.fill();

		mycan.beginPath();
		mycan.rect(365,320,70,70);	
		mycan.lineWidth=4;	
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#cbf9f9';
		mycan.fill();

		mycan.beginPath();
		mycan.rect(365,380,70,10);		
		mycan.stroke();
		mycan.closePath();
		mycan.lineWidth=4;
		mycan.fillStyle='#febb44';
		mycan.fill();

		mycan.beginPath();
		mycan.moveTo(400,320);
		mycan.lineTo(400,380);	
		mycan.lineWidth=2;	
		mycan.stroke();
		mycan.closePath();
		mycan.fill();

		mycan.beginPath();
		mycan.moveTo(372,250);
		mycan.lineTo(428,250);
		mycan.lineWidth=2;		
		mycan.stroke();
		mycan.closePath();
		mycan.fill();

		mycan.beginPath();
		mycan.rect(315,320,30,70);
		mycan.lineWidth=4;		
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#cbf9f9';
		mycan.fill();


		mycan.beginPath();
		mycan.rect(455,320,30,70);	
		mycan.lineWidth=4;	
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#cbf9f9';
		mycan.fill();

		mycan.beginPath();
		mycan.rect(435,180,25,50);	
		mycan.lineWidth=4;	
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#febb44';
		mycan.fill();

		mycan.beginPath();
		mycan.rect(430,170,35,10);	
		mycan.lineWidth=4;	
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#4b6afc';
		mycan.fill();


		mycan.beginPath();
		mycan.moveTo(400,200);
		mycan.lineTo(520,320);
		mycan.lineTo(530,310);
		mycan.lineTo(400,180);
		mycan.lineTo(270,310);
		mycan.lineTo(280,320);
		mycan.lineTo(400,200);
		mycan.lineWidth=4;		
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#2300f6';
		mycan.fill();

		mycan.beginPath();
		mycan.moveTo(400,180);
		mycan.lineTo(530,310);
		mycan.lineTo(535,305);
		mycan.lineTo(400,169);
		mycan.lineTo(265,305);
		mycan.lineTo(270,310);
		mycan.lineTo(400,180);
		mycan.lineWidth=4;		
		mycan.stroke();
		mycan.closePath();
		mycan.fillStyle='#4b6afc';
		mycan.fill();
