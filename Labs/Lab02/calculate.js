
/*
Ghadir Alfadhl
Lab2
ITS362
01/26/2021

*/
function calculator()
        {
            var grade1 = document.getElementById("lab").value;
            var grade2 = document.getElementById("quiz").value;
            var grade3 = document.getElementById("exam").value;
            var grade4 = document.getElementById("project").value;
            var grade5 = document.getElementById("credit").value;
            var grade6 = document.getElementById("participation").value;

            //(points_earned/total_points_possible) * weight_percentage

            grade1 = (grade1/250) * 0.30;
            grade2 = (grade2/100) * 0.10;
            grade3 = (grade3/200) * 0.30;
            grade4 = (grade4/100) * 0.20;
            grade5 = (grade5/25) * 0.05;
            grade6 = (grade6/75) * 0.10;
            
            

           var total = (grade1+grade2+grade3+grade4+grade5+grade6) * 100;

            document.getElementById("resultGrade").innerHTML=  total + " %";
            
               
        }



      