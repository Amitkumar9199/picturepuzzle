var move=0;
var finaltime,finalmove;
function swaptilesonstart(cell1 , cell2){
    
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp ;
    
}

function shuffleonstart(){
    for(var x=1;x<=4;x++){
        for(var y=1;y<=4;y++){
            var row2=Math.floor(Math.random()*4+1);
            var coloumn2=Math.floor(Math.random()*4+1);
            swaptilesonstart("cell"+x+y,"cell"+row2+coloumn2);
            
        }
    }
    
}
function swaptiles(cell1 , cell2){
    pausetime();
    resumetime();
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp ;
    move++;
    checkwin1();
}

function shuffle(){
    for(var x=1;x<=4;x++){
        for(var y=1;y<=4;y++){
            var row2=Math.floor(Math.random()*4+1);
            var coloumn2=Math.floor(Math.random()*4+1);
            swaptiles("cell"+x+y,"cell"+row2+coloumn2);
            
        }
    }
    
}
function clicktile(row,coloumn)
{
    var cell=document.getElementById("cell"+row+coloumn);
    var tile=cell.className;
    if(tile!="tile16"){
        if(coloumn>1){
            if(document.getElementById("cell"+row+(coloumn-1)).className=="tile16"){
                swaptiles("cell"+row+coloumn,"cell"+row+(coloumn-1));
                
                return ;
                
            }
            
        }
        if(coloumn<4){
            if(document.getElementById("cell"+row+(coloumn+1)).className=="tile16"){
                swaptiles("cell"+row+coloumn,"cell"+row+(coloumn+1));
                
                return ;
                
            }
        }
        if(coloumn==2 || coloumn==1 ){
             if(document.getElementById("cell"+row+(coloumn+2)).className=="tile16"){
                swaptiles("cell"+row+(coloumn+1),"cell"+row+(coloumn+2));
                swaptiles("cell"+row+(coloumn),"cell"+row+(coloumn+1));
                 return ;
            }
        }
        if(coloumn==3 || coloumn==4){
            if(document.getElementById("cell"+row+(coloumn-2)).className=="tile16"){
                swaptiles("cell"+row+(coloumn-1),"cell"+row+(coloumn-2));
                swaptiles("cell"+row+(coloumn),"cell"+row+(coloumn-1));
                return;
            }
        }
        if(row==2 ||row==1 ){
             if(document.getElementById("cell"+(row+2)+(coloumn)).className=="tile16"){
                swaptiles("cell"+(row+1)+(coloumn),"cell"+(row+2)+(coloumn));
                swaptiles("cell"+row+(coloumn),"cell"+(row+1)+(coloumn));
                 return ;
            }
        }
        if(row==3 || row==4){
            if(document.getElementById("cell"+(row-2)+(coloumn)).className=="tile16"){
                swaptiles("cell"+(row-1)+(coloumn),"cell"+(row-2)+(coloumn));
                swaptiles("cell"+row+(coloumn),"cell"+(row-1)+(coloumn));
                return;
            }
        }
        if(coloumn==1){
            if(document.getElementById("cell"+row+(coloumn+3)).className=="tile16"){
                swaptiles("cell"+row+(coloumn+3),"cell"+row+(coloumn+2));
                swaptiles("cell"+row+(coloumn+2),"cell"+row+(coloumn+1));
                swaptiles("cell"+row+(coloumn+1),"cell"+row+(coloumn));
                return 0;
            }
        }
        if(coloumn==4){
            if(document.getElementById("cell"+row+(coloumn-3)).className=="tile16"){
                swaptiles("cell"+row+(coloumn-3),"cell"+row+(coloumn-2));
                swaptiles("cell"+row+(coloumn-2),"cell"+row+(coloumn-1));
                swaptiles("cell"+row+(coloumn-1),"cell"+row+(coloumn));
                return 0;
            }
        }
        if(row==1){
            if(document.getElementById("cell"+(row+3)+(coloumn)).className=="tile16"){
                swaptiles("cell"+(row+3)+(coloumn),"cell"+(row+2)+(coloumn));
                swaptiles("cell"+(row+2)+(coloumn),"cell"+(row+1)+(coloumn));
                swaptiles("cell"+(row+1)+(coloumn),"cell"+row+(coloumn));
                return 0;
            }
        }
        if(row==4){
            if(document.getElementById("cell"+(row-3)+(coloumn)).className=="tile16"){
                swaptiles("cell"+(row-3)+(coloumn),"cell"+(row-2)+(coloumn));
                swaptiles("cell"+(row-2)+(coloumn),"cell"+(row-1)+(coloumn));
                swaptiles("cell"+(row-1)+(coloumn),"cell"+row+(coloumn));
                return 0;
            }
        }
        
        if(row>1){
            if(document.getElementById("cell"+(row-1)+coloumn).className=="tile16"){
                swaptiles("cell"+row+coloumn,"cell"+(row-1)+coloumn);
                
                return ;
            }

        }
        if(row<4){
            if(document.getElementById("cell"+(row+1)+coloumn).className=="tile16"){
                swaptiles("cell"+row+coloumn,"cell"+(row+1)+coloumn);
                
                return ;
            }
        }
    }
}
var time=0;
var timer;

function starttime()
{
    move=0;
    time=0;
    pausetime();
    resumetime();  
}
var challenge1;
function challenge()
{
    starttime(); 
    clearInterval(challenge1);
    challenge1=setInterval(function(){
        var ROW1=Math.floor(Math.random()*4+1);
        var COL1=Math.floor(Math.random()*4+1);
        var ROW2=Math.floor(Math.random()*4+1);
        var COL2=Math.floor(Math.random()*4+1);
        swaptiles("cell"+ROW1+COL1,"cell"+ROW2+COL2);
        move--;
    },10000);
}
function pausetime()
{
    clearInterval(timer);
}
const LOWTIMEMADA4=localStorage.getItem("LOWTIMEMADA4");
const HIGHMOVEMADA4=localStorage.getItem("HIGHMOVEMADA4");

function resumetime()
{
    pausetime();
    timer=setInterval(function(){
        time++;
        document.getElementById("printtime").innerHTML=time;
        document.getElementById("noofmoves").innerHTML=move; document.getElementById("besttime").innerHTML=LOWTIMEMADA4; document.getElementById("bestmove").innerHTML=HIGHMOVEMADA4;
        
        
    },1000);
}


var won="Winner Winner Chicken Dinner";

function checkwin1()
{
    var flag=1;
    for(var i=1;i<=4;i++)
        {
            for(var j=1;j<=4;j++)
                {
                    var temp=document.getElementById("cell"+i+j).className;
                    if(temp!="tile"+((i-1)*4+j))
                        {
                            flag=0;
                            break;
                        }
                }
        }
    if(flag==0)
        {
            return ;
        }
    else if(flag==1)
        {
            
            if(LOWTIMEMADA4 != null){
                if (time < LOWTIMEMADA4) {
                    localStorage.setItem("LOWTIMEMADA4", time);
                    
                }
            }
            else{
                localStorage.setItem("LOWTIMEMADA4", time);
            }
            if(HIGHMOVEMADA4 != null){
                if (HIGHMOVEMADA4 >move) {
                    localStorage.setItem("HIGHMOVEMADA4", move);      
                }
            }
            else{
                localStorage.setItem("HIGHMOVEMADA4", move);
            }
             
            clearInterval(timer);
            clearInterval(challenge1);
            document.getElementById("printtime").innerHTML=time;
            document.getElementById("noofmoves").innerHTML=move;
            document.getElementById("besttime").innerHTML=localStorage.getItem("LOWTIMEMADA4"); document.getElementById("bestmove").innerHTML=localStorage.getItem("HIGHMOVEMADA4");
            document.getElementById("win").innerHTML=won;
            return ;
        }
}
