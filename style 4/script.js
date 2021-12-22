var names=new Array();
names[0]="Yashwanth";
names[1]="Jabir";
names[2]="Jennifer";
names[3]="jimmy";
names[4]="pratheek";
names[5]="faaruqi";
names[6]="lisha";
names[7]="palguna";
names[8]="leanna";
names[9]="jaffer";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
