function submit(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;

    let total  =Number( a) + Number( b)+ Number( c)+ Number( d) ;

    document.getElementById("total_grades").innerHTML =total ;


    if (total >= 60 && total <=69.9){
        document.getElementById("final_grade").innerHTML ="D";
      }

      else  if (total >= 70 && total <=79.9 ){
        document.getElementById("final_grade").innerHTML ="C";
      }

      else  if (total >= 80  && total <=89.9 ){
        document.getElementById("final_grade").innerHTML ="B";
      }

      else  if (total >= 90  && total <=100 ){
        document.getElementById("final_grade").innerHTML ="A";
      }
    }