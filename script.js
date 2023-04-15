//import {n1,n2} from '../playerinfo/script'
var turn=true;
var a=[2,2,2,2,2,2,2,2,2];

var i=0;
var c=0;
var winner = 'none'

function place(clicked_id){
    if(winner=='none'){
    if(turn==true){
        
        var id=clicked_id;
        // console.log(id);
        // console.log(typeof id);
        num_id=Number(id);
        // console.log(num_id);
        // console.log(typeof num_id);
        if(a[num_id]==2){
            c=c+1
            document.getElementById(clicked_id).style.backgroundImage="url('images/o1.png')";
             //-----------Draw condition---------
            if(c==9){        
                winner='Draw'
                document.getElementById("play").style.cssText='width:150px; height:40px; left:55px';
                document.getElementById("turn").innerHTML = "Draw";
            }    
            //-------------Draw condition ends--------
            else{
                document.getElementById("turn").innerHTML = "O's Turn";

            
                // console.log(n1);
                // console.log(n2);
            }
            //var id=document.getElementById(clicked_id)

            // const myJSON = JSON.stringify(id);
            // console.log(myJSON);
            // console.log(typeof myJSON);   

            turn=false;      
            a[num_id]=1;
            //console.log(a[num_id]);
        }

        
    }
    else if(turn==false){
        
        var id=clicked_id;
        // console.log(id);
        // console.log(typeof id);
        num_id=Number(id);
        // console.log(num_id);
        // console.log(typeof num_id);
        if(a[num_id]==2){
            c=c+1
        document.getElementById(clicked_id).style.backgroundImage="url('images/o.png')";
        document.getElementById("turn").innerHTML = "X's Turn";
        //var id=document.getElementById(clicked_id)
        turn=true;
        
        
        a[num_id]=0;
        console.log(a[num_id]);
        }
    }
}
   

    
    //win();
    //----------------Checking win condition------------

    if (a[0]==1 && a[1]==1 && a[2]==1){
        winner='X';
    }
    else if (a[3]==1 && a[4]==1 && a[5]==1){
        winner='X';
    }
    else if (a[6]==1 && a[7]==1 && a[8]==1){
        winner='X';
    }
    else if (a[0]==1 && a[3]==1 && a[6]==1){
        winner='X';
    }
    else if (a[1]==1 && a[4]==1 && a[7]==1){
        winner='X';
    }
    else if (a[2]==1 && a[5]==1 && a[8]==1){
        winner='X';
    }
    else if (a[0]==1 && a[4]==1 && a[8]==1){
        winner='X';
    }
    else if (a[2]==1 && a[4]==1 && a[6]==1){
        winner='X';
    }
    
    // ---------O Win condition-----------
    else if (a[0]==0 && a[1]==0 && a[2]==0){
        winner='O';
    }
    else if (a[3]==0 && a[4]==0 && a[5]==0){
        winner='O';
    }
    else if (a[6]==0 && a[7]==0 && a[8]==0){
        winner='O';
    }
    else if (a[0]==0 && a[3]==0 && a[6]==0){
        winner='O';
    }
    else if (a[1]==0 && a[4]==0 && a[7]==0){
        winner='O';
    }
    else if (a[2]==0 && a[5]==0 && a[8]==0){
        winner='O';
    }
    else if (a[0]==0 && a[4]==0 && a[8]==0){
        winner='O';
    }
    else if (a[2]==0 && a[4]==0 && a[6]==0){
        winner='O';
    }


    console.log("Count:",c);
    // if(winner!='none'){
        console.log(a[0],a[1],a[2]);
        console.log(a[3],a[4],a[5]);
        console.log(a[6],a[7],a[8]);
        console.log("The winner  is ",winner);
    // }

    if (winner=='X'){
        document.getElementById("play").style.cssText='width:150px; height:40px';
        document.getElementById("turn").innerHTML = "X Wins";
    }
    else if (winner=='O'){
        document.getElementById("turn").innerHTML = "O Wins";
        document.getElementById("play").style.cssText='width:150px; height:40px';
    }
    

   
}
function play(){
    location.href='../xogame/index.html';
    
    
}

// function win(){
//     // ---------X Win condition-----------
//     if (a[1]==1 && a[2]==1 && a[3]==1){
//         winner='X';
//     }
//     else if (a[4]==1 && a[5]==1 && a[6]==1){
//         winner='X';
//     }
//     else if (a[7]==1 && a[8]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[1]==1 && a[4]==1 && a[7]==1){
//         winner='X';
//     }
//     else if (a[2]==1 && a[5]==1 && a[8]==1){
//         winner='X';
//     }
//     else if (a[3]==1 && a[6]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[1]==1 && a[5]==1 && a[9]==1){
//         winner='X';
//     }
//     else if (a[3]==1 && a[5]==1 && a[7]==1){
//         winner='X';
//     }
    
//     // ---------O Win condition-----------
//     else if (a[1]==0 && a[2]==0 && a[3]==0){
//         winner='O';
//     }
//     else if (a[4]==0 && a[5]==0 && a[6]==0){
//         winner='O';
//     }
//     else if (a[7]==0 && a[8]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[1]==0 && a[4]==0 && a[7]==0){
//         winner='O';
//     }
//     else if (a[2]==0 && a[5]==0 && a[8]==0){
//         winner='O';
//     }
//     else if (a[3]==0 && a[6]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[1]==0 && a[5]==0 && a[9]==0){
//         winner='O';
//     }
//     else if (a[3]==0 && a[5]==0 && a[7]==0){
//         winner='O';
//     }
// }


