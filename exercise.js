document.getElementById('submit').onclick=getdata;
document.getElementById('clear').onclick=clearform;

function getdata(){
    
    let flesh=document.getElementById("flesh").value;
    let wings=document.getElementById("wings").value;
    let legs=document.getElementById("legs").value;

    document.getElementById('showdata').innerHTML="Order : "+flesh+"Flesh "+wings+"Wings "+legs+"Legs";

    let aFlesh;
    let aWings;
    let aLegs;

    if(flesh !=null || flesh != 0){
        aFlesh = flesh;
    }
    if(wings!=null  || wings != 0 ){
        if(wings>=2){
            if(wings%2 == 0){
                aWings=wings/2;
            }
            else{
               aWings=(wings/2)+0.5;
            }
        }
        else{
            aWings = wings;
        }
    }
    if(legs!=null || legs != 0){
        if(legs>=2){
            if(legs%2 == 0){
                aLegs=legs/2;
            }
            else{
               aLegs=(legs/2)+0.5;
            }
        }
        else{
            aLegs = legs;
        }
    }
    
    let chicken =Math.max(aFlesh,aWings,aLegs);
    document.getElementById('chicken').innerHTML="Cut "+chicken+" Chickens";

    let balanceFlesh;
    let balanceWings;
    let balanceLegs;

    if(aFlesh){
        balanceFlesh = chicken-flesh;
    }
    if(aWings){
        if(chicken>1){
            if(chicken%2 == 0){
                balanceWings=(chicken*2)-wings;
            }
            else{
               balanceWings=((chicken*2)-wings);
            }
        }
        else{
            balanceWings = wings;
        }
    }
    if(aLegs){
        if(chicken>1){
            if(chicken%2 == 0){
                balanceLegs=(chicken*2)-legs;
            }
            else{
               balanceLegs=((chicken*2)-legs);
            }
        }
        else{
            balanceLegs = legs;
        }
    }


    document.getElementById('balance').innerHTML="Balance : "+balanceFlesh+"Flesh "+balanceWings+"Wings "+balanceLegs+"Legs";
    
}

function clearform(){

    document.getElementById("flesh").value='';
    document.getElementById("wings").value='';
    document.getElementById("legs").value='';

    document.getElementById('showdata').innerHTML='';
    document.getElementById('balance').innerHTML='';

}



