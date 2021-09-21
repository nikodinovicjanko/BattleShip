var brod4 = 1; var brod3 = 2; var brod2 = 3; var brod1 = 4;
var tab = 0;

function checkStart(){

    let check = /^\w{3,15}$/;

    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;

    if (check.test(p1) && check.test(p2)){
            window.open("battleship-setup.html");
        }else{
            alert("Player name is not correct");
        }

        localStorage.setItem("player1", p1);
        localStorage.setItem("player2", p2);
    
}

function createTable() {

    var name1 = document.getElementById("name1").innerHTML = localStorage.getItem("player1");
    var name2 = document.getElementById("name2").innerHTML = localStorage.getItem("player2");

    var i, j, n = 0;
    var table = document.getElementById("myTable");
    if (table==null) table = document.getElementById("myTable1");

    for (i=0; i<10; i++){
        var row = table.insertRow(i);
        for (j=0; j<10; j++){
            n++;
            var cell = row.insertCell(j);
            cell.innerHTML = "&nbsp";
            cell.id = n;
            cell.name = "free";
        }
    }

    var table = document.getElementById("myTable2");
    if (table==null) table = document.getElementById("myTable22");

    for (i=0; i<10; i++){
        var row = table.insertRow(i);
        for (j=0; j<10; j++){
            n++;
            var cell = row.insertCell(j);
            cell.innerHTML = "&nbsp";
            cell.id = n;
            cell.name = "free";
        }
    }
  }

function setBoats(){
    
    if(tab==0){
    var table = document.getElementById("myTable");
    document.getElementById("redp1").innerHTML = "Set ships!";
    document.getElementById("redp2").innerHTML = "&nbsp";
    }else{
    var table = document.getElementById("myTable2");
    document.getElementById("redp2").innerHTML = "Set ships!";
    document.getElementById("redp1").innerHTML = "&nbsp";    
    }
    if (table != null) {

    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onmousedown = function () {

            var first = this.id;

            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onmouseup = function () {
                    
                    var arr = new Array(2);
                    arr[0]=first;
                    arr[1]=this.id;
                    tableText(arr);
                };
        };
    }
}

function tableText(arr) {
    arr[0] = Number(arr[0]);
    arr[1] = Number(arr[1]);

    var rez, flag;
   
    if (arr[0]>arr[1]){
        rez = arr[0] - arr[1];
        flag = 0;
    }else{
        rez = arr[1] - arr[0];
        flag = 1;
    }
    
    switch(rez) {
        case 0:
            if(brod1 > 0){
            var x = document.getElementById(arr[0]);
            if ((x.name != "ship")&&(x.name!="no")){
            x.style.backgroundColor = "brown";
            x.name = "ship";
            brod1--;
            if (arr[0]<91 || arr[0]>100){
            x = document.getElementById(arr[0]+10);
            if (x != null) x.name="no";
            }
            x = document.getElementById(arr[0]-10);
            if (x != null) x.name="no";
            if(arr[0]%10 != 0){
            x = document.getElementById(arr[0]+1);
            if (x != null) x.name="no";
            }
            if((arr[0]-1)%10 != 0){
            x = document.getElementById(arr[0]-1);
            if (x != null) x.name="no";
            }

            if (tab==0)
            var t = document.getElementById("b1");
            else
            var t = document.getElementById("b10");
            t.innerHTML=brod1;
            }
            } 
          break;

        case 1:
          if(brod2>0){
            var poc;
            var check=1;
          if (flag == 0) { poc = Number(arr[1]);}
          else{ poc = Number(arr[0]);}

              for (var i=poc; i<=(poc+rez); i++){

              var x = document.getElementById(i);
              if ((x.name=="ship")||(x.name=="no")){
                alert(i);
                  check = 0;
                  break;
              }
            }

          if (check==1){
              brod2--;
          for (var i=poc; i<=(poc+rez); i++){
            var x = document.getElementById(i);
            x.style.backgroundColor = "brown";
            x.name = "ship";
            
            if (i<91 || i>100){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }
            x = document.getElementById(i-10);
            if (x != null) x.name="no";

            if ((i == (poc+rez)) && (i%10 != 0)){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }

            if ((i == poc)&&((i-1)%10 != 0)){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
          }
          if (tab==0)
          var t = document.getElementById("b2");
          else
          var t = document.getElementById("b20");
            t.innerHTML=brod2;
        }
        }

          break;
        case 2:
            if(brod3>0){
            var poc;
            var check=1;
          if (flag == 0){poc = Number(arr[1]); }
          else{ poc = Number(arr[0]);}

          for (var i=poc; i<=(poc+rez); i++){

            var x = document.getElementById(i);
            if ((x.name=="ship")||(x.name=="no")){
                check = 0;
                break;
            }
          }
          if(check == 1){
              brod3--;
          for (var i=poc; i<=(poc+rez); i++){
            var x = document.getElementById(i);
            x.style.backgroundColor = "brown";
            x.name = "ship";
            
            if (i<91 || i>100){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }
            x = document.getElementById(i-10);
            if (x != null) x.name="no";

            if ((i == (poc+rez)) && (i%10 != 0)){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }

            if ((i == poc)&&((i-1)%10 != 0)){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
          }
          if (tab==0)
          var t = document.getElementById("b3");
          else
          var t = document.getElementById("b30");
            t.innerHTML=brod3;
        }
        }
            break;
        
        case 3:
            if(brod4>0){
            var poc;
            var check=1;
          if (flag == 0){
            poc = Number(arr[1]); 
          }else{
              poc = Number(arr[0]);
          }

          for (var i=poc; i<=(poc+rez); i++){

            var x = document.getElementById(i);
            if ((x.name=="ship")||(x.name=="no")){
                check = 0;
                break;
            }
          }
          if(check == 1){
              brod4--;
          for (var i=poc; i<=(poc+rez); i++){
            var x = document.getElementById(i);
            x.style.backgroundColor = "brown";
            x.name = "ship";
            
            if (i<91 || i>100){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }
            x = document.getElementById(i-10);
            if (x != null) x.name="no";

            if ((i == (poc+rez)) && (i%10 != 0)){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }

            if ((i == poc)&&((i-1)%10 != 0)){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
          }
          if (tab == 0)
          var t = document.getElementById("b4");
          else
          var t = document.getElementById("b40");
            t.innerHTML=brod4;
        }
        }
            break;
        case 10:
            if(brod2>0){
            var poc;
            var check=1;
          if (flag == 0){
            poc = Number(arr[1]); 
          }else{
              poc = Number(arr[0]);
          }

          for (var i=poc; i<=(poc+rez); i=i+10){

            var x = document.getElementById(i);
            if ((x.name=="ship")||(x.name=="no")){
                check = 0;
                break;
            }
          }
          if(check == 1){
              brod2--;
          for (var i=poc; i<=(poc+rez); i = i+10){
            var x = document.getElementById(i);
            x.style.backgroundColor = "brown";
            x.name = "ship";

            if(i%10 != 0){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }
            if((i-1)%10 != 0){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
            if ((i == (poc+rez)) && (i<91 || i>100)){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }

            if (i == poc){
            x = document.getElementById(i-10);
            if (x != null) x.name="no";
            }
          }
          if (tab==0)
          var t = document.getElementById("b2");
          else
          var t = document.getElementById("b20");
            t.innerHTML=brod2;
        }
        }
            break;
        case 20:
            if(brod3>0){
            var poc;
            var check=1;
            if (flag == 0){
              poc = Number(arr[1]); 
            }else{
                poc = Number(arr[0]);
            }
            for (var i=poc; i<=(poc+rez); i=i+10){

                var x = document.getElementById(i);
                if ((x.name=="ship")||(x.name=="no")){
                    check = 0;
                    break;
                }
              }
              if(check == 1){
                  brod3--;
            for (var i=poc; i<=(poc+rez); i = i+10){
              var x = document.getElementById(i);
              x.style.backgroundColor = "brown";
              x.name = "ship";
            if(i%10 != 0){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }
            if((i-1)%10 != 0){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
            if ((i == (poc+rez)) && (i<91 || i>100)){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }

            if (i == poc){
            x = document.getElementById(i-10);
            if (x != null) x.name="no";
            }
            }
            if (tab==0)
            var t = document.getElementById("b3");
            else
            var t = document.getElementById("b30");
            t.innerHTML=brod3;
        }
        }
            break;
        case 30:
            if(brod4>0){
            var poc;
            var check=1;
          if (flag == 0){
            poc = Number(arr[1]); 
          }else{
              poc = Number(arr[0]);
          }
          for (var i=poc; i<=(poc+rez); i=i+10){

            var x = document.getElementById(i);
            if ((x.name=="ship")||(x.name=="no")){
                check = 0;
                break;
            }
          }
          if(check == 1){
              brod4--;
          for (var i=poc; i<=(poc+rez); i = i+10){
            var x = document.getElementById(i);
            x.style.backgroundColor = "brown";
            x.name = "ship";

            if(i%10 != 0){
            x = document.getElementById(i+1);
            if (x != null) x.name="no";
            }
            if((i-1)%10 != 0){
            x = document.getElementById(i-1);
            if (x != null) x.name="no";
            }
            if ((i == (poc+rez)) && (i<91 || i>100)){
            x = document.getElementById(i+10);
            if (x != null) x.name="no";
            }

            if (i == poc){
            x = document.getElementById(i-10);
            if (x != null) x.name="no";
            }
            
          }
          if (tab==0)
          var t = document.getElementById("b4");
          else
          var t = document.getElementById("b40");
            t.innerHTML=brod4;
        }
        }
            break;
        
      }

      if(tab ==0 && brod1==0 && brod2==0 && brod3==0 && brod4==0){
          tab = 1;
           brod4 = 1; brod3 = 2; brod2 = 3; brod1 = 4;

        var i, j, n = 0;
        var cells1 = new Array();
        var table = document.getElementById("myTable");

    for (i=0; i<10; i++){
        for (j=0; j<10; j++){
            var x = document.getElementById("myTable").rows[i].cells[j].name;
            if (x == "ship"){
                cells1.push(document.getElementById("myTable").rows[i].cells[j].id);
            }
        }
    }
           localStorage.setItem("ships1", JSON.stringify(cells1));
           //table.style.backgroundColor="whitesmoke";
           //#################################################################################################
         for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].cells[j].style.backgroundColor = "grey";    
        }
    //}
           setBoats();
      }
      
      if (tab == 1 && brod1==0 && brod2==0 && brod3==0 && brod4==0){

        var i, j, n = 0;
        var cells2 = new Array();
        var table = document.getElementById("myTable2");

    for (i=0; i<10; i++){
        for (j=0; j<10; j++){
            var x = document.getElementById("myTable2").rows[i].cells[j].name;
            if (x == "ship"){
                cells2.push(document.getElementById("myTable2").rows[i].cells[j].id);
            }
        }
    }
           localStorage.setItem("ships2", JSON.stringify(cells2));
           window.open("battleship-game.html");
      }

}
}
}

 var turn = 0;
 var cnt1 = 0;
 var cnt2 = 0;
 function playGame1(){
    showBoats(1);
    document.getElementById("t1").innerHTML = "&nbsp";
    document.getElementById("t2").innerHTML = "Your turn!";
     
    var data = localStorage.getItem("ships1");
    var s1 = JSON.parse(data);
    
    
         var table = document.getElementById("myTable1");
        
        if (table != null) {
            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++)
                table.rows[i].cells[j].onclick = function () {

                   if(turn==1) tableText1(this);
                };
            }
        }
        
        function tableText1(tableCell) {
            var val = 0;
            for (var i = 0; i<s1.length; i++){
                if(s1[i]==tableCell.id && tableCell.name!="hit"){
                    tableCell.innerHTML="X";
                    tableCell.style.backgroundColor = "red";
                    tableCell.name = "hit";
                    cnt1++;
                    val = 1;
                    break;
                }
            }

            document.getElementById("sc2").innerHTML =  "<b>Score: </b>" + cnt1;

            if(cnt1 == 20){
                var name = localStorage.getItem("player2");
                alert(name + " is winner!");
            }

            if (val == 0 && tableCell.name!="hit"){tableCell.style.backgroundColor="skyblue";
            tableCell.name="miss";
            turn = 0;
            clear(1);
            playGame2();
            }
    
        }
    }

    function playGame2(){
        showBoats(0);
        document.getElementById("t2").innerHTML = "&nbsp";
        document.getElementById("t1").innerHTML = "Your turn!";
       
       var data2 = localStorage.getItem("ships2");
       var s2 = JSON.parse(data2);
       
            var table = document.getElementById("myTable22");    
          
           if (table != null) {
               for (var i = 0; i < table.rows.length; i++) {
                   for (var j = 0; j < table.rows[i].cells.length; j++)
                   table.rows[i].cells[j].onclick = function () {
   
                       if(turn == 0)tableText2(this);
                   };
               }
           }
           
           function tableText2(tableCell) {
               
               var val = 0;
               for (var i = 0; i<s2.length; i++){
                   if(s2[i]==tableCell.id && tableCell.name!="hit"){
                       tableCell.innerHTML="X";
                       tableCell.style.backgroundColor = "red";
                       tableCell.name = "hit";
                       cnt2++;
                       val = 1;
                       break;
                   }
               }

               document.getElementById("sc1").innerHTML = "<b>Score: </b>" + cnt2;

               if(cnt2 == 20){
                var name = localStorage.getItem("player1");
                alert(name + " is winner!");
            }
   
               if (val == 0 && tableCell.name!="hit"){tableCell.style.backgroundColor="skyblue";
               tableCell.name = "miss";
               turn = 1;
               clear(0);
               playGame1();
               }
          
           }
       }

       function showBoats(arg){

            if (arg==0){
                var data = localStorage.getItem("ships1");
                var s = JSON.parse(data);
                var table = document.getElementById("myTable1");
            }else{
                var data2 = localStorage.getItem("ships2");
                var s = JSON.parse(data2);
                var table = document.getElementById("myTable22");
            }

            for (var i=0; i<s.length; i++){
                var elem = document.getElementById(s[i]);
                if ((elem.name!="hit") &&(elem.name!="miss")){
                    elem.style.backgroundColor="brown";
                }
                if(elem.name=="hit"){
                    elem.style.backgroundColor="red";
                    elem.innerHTML="X";
                }
                
            }

            for (var i = 0; i < table.rows.length; i++) {
                for (var j = 0; j < table.rows[i].cells.length; j++){
                    if(table.rows[i].cells[j].name=="miss"){
                        table.rows[i].cells[j].style.backgroundColor="grey";
                        table.rows[i].cells[j].innerHTML="X";
                       }
                }
            }

       }

       function clear(arg){
           if (arg==0){
            var table = document.getElementById("myTable1");
           }else{
            var table = document.getElementById("myTable22");
           }

           for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++){
               if(table.rows[i].cells[j].name=="hit"){
                table.rows[i].cells[j].style.backgroundColor="red";
                table.rows[i].cells[j].innerHTML="x";
               }
               if(table.rows[i].cells[j].name=="miss"){
                table.rows[i].cells[j].style.backgroundColor="skyblue";
                table.rows[i].cells[j].innerHTML="&nbsp;";
               }
               if(table.rows[i].cells[j].name=="free"){
                table.rows[i].cells[j].style.backgroundColor="grey";
               }

            }
        }

       }
   

