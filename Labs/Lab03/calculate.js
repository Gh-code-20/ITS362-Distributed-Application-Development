
/*
Ghadir Alfadhl
Lab3
ITS362
02/2/2021

*/
function calculator()
        {
            var grade1 = parseInt(document.getElementById("lab").value);
            var grade2 = parseInt(document.getElementById("quiz").value);
            var grade3 = parseInt(document.getElementById("exam").value);
            var grade4 = parseInt(document.getElementById("project").value);
            var grade5 = parseInt(document.getElementById("credit").value);
            var grade6 = parseInt(document.getElementById("participation").value);

            //(points_earned/total_points_possible) * weight_percentage

            grade1 = (grade1/250) * 0.30;
            grade2 = (grade2/100) * 0.10;
            grade3 = (grade3/200) * 0.30;
            grade4 = (grade4/100) * 0.20;
            grade5 = (grade5/25) * 0.05;
            grade6 = (grade6/75) * 0.10;
            
            var total = (grade1+grade2+grade3+grade4+grade5+grade6) * 100; 
            document.getElementById("resultGrade").value=  total;

            if(total >= 90){
              location.href = "GradeA.html";
            }   
            else if(total >= 80 && total < 90) {
              location.href = "GradeB.html";
            } 
            else if(total >= 70 && total < 80) {
              location.href = "GradeC.html";
            }
            else if(total >= 60 && total < 70) {
              location.href = "GradeD.html";
            }
            else {
              location.href = "GradeF.html";
            }

        }
      

      