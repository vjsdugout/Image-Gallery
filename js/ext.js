function doShift(id,source){
	document.getElementById(id).src = source;
}

function doZoom(id,type){
	min_W = 210;
	min_H = 110;
	n_W = 600;
	n_H = 300;
	max_W = 900;
	max_H = 800;
	
	img = document.getElementById(id);
		curr_W = parseInt(img.width);
		curr_H = parseInt(img.height);
		
	switch (type){
		case '+':
			new_W = curr_W+(curr_W*.1);
			new_H = curr_H+(curr_H*.1);
			break;
		case '0':
			new_W = n_W;
			new_H = n_H;
			break;
		case '-':
			new_W = curr_W-(curr_W*.1);
			new_H = curr_H-(curr_H*.1);
			break;
	}
	
	if((new_W<min_W || new_H<min_H) || (new_W>max_W || new_H>max_H)){
	}else {
		img.style.width = new_W;
		img.style.height = new_H;
	}
	
}