
var AssessmentArray = [];
var Assignment = ["lab1", "lab2", "lab3", "lab4", "lab5", "lab6", "lab6", "lab8", "lab9", "lab10", 
                  "quiz1", "quiz2", "quiz3", "quiz4", "quiz5", "quiz6", "quiz7", "quiz8", "quiz9", "quiz10", 
                   "exam1", "exam2", "project1", "extraCredit1", "participation"];
                      
var MaxPoints = [25, 25, 25 , 25 ,25, 25, 25, 25 , 25 ,25, 
                 10 ,10, 10, 10, 10, 10 ,10, 10, 10, 10, 
                 100, 100, 100, 25, 5];
var finalGrade;



    function calculatGrade()
    {     
        var labTotal = 0;
        var labMaxTotal = 0;
        var quizTotal = 0;
        var quizMaxTotal = 0;
        var examTotal = 0;
        var examMaxTotal = 0;
                
        for (i = 0; i < Assignment.length; i++)
            {
                AssessmentArray[i] = new Assessment();
                AssessmentArray[i].name = Assignment[i];
                AssessmentArray[i].earnedPoints = parseInt(document.getElementById(Assignment[i]).value);
                AssessmentArray[i].points = MaxPoints[i];
            }
            //for loops to get total earned and max points for each Assignment category
        for (i = 0; i < 10; i++)
            {
                labTotal +=AssessmentArray[i].earnedPoints;
                labMaxTotal +=AssessmentArray[i].points;
            }

        for (i = 10; i < 20; i++)
            {
                quizTotal +=AssessmentArray[i].earnedPoints;
                quizMaxTotal +=AssessmentArray[i].points;
            }

        for (i = 20; i < 22; i++)
            {
                examTotal +=AssessmentArray[i].earnedPoints;
                examMaxTotal +=AssessmentArray[i].points;
            }

            
        // total weighted grades for each assignment category
        var labGradePercent = labTotal / labMaxTotal * .30;
        var quizGradePercent = quizTotal / quizMaxTotal * .10;
        var examGradePercent = examTotal / examMaxTotal * .30;
        var projectGradePercent = AssessmentArray[22].earnedPoints / AssessmentArray[22].points * .20;
        var extraCreditGradePercent = AssessmentArray[23].earnedPoints / AssessmentArray[23].points * .05;
        var participationGradePercent = AssessmentArray[24].earnedPoints / AssessmentArray[24].points * .10;
        
                

        //add weighted grade categories to get total grade percent
        var totalGradePercent= (labGradePercent + quizGradePercent + examGradePercent + projectGradePercent +
                            extraCreditGradePercent + participationGradePercent) * 100;

        document.getElementById("finalPercent").value = totalGradePercent;            
            
            if (totalGradePercent >= 90)
            {
                var letterGrade = 'A';
            }
            else if (totalGradePercent >= 80){
                var letterGrade = 'B';
            }
            else if (totalGradePercent >= 70){
                var letterGrade = 'C';
            }
            else if (totalGradePercent >= 60){
                var letterGrade = 'D';
            }
            else{
                var letterGrade = 'F';
            }

            //letterGrade =  document.getElementById("finalLetterGrade");

            document.getElementById("finalLetterGrade").value = letterGrade;

            finalGrade = new CourseGrade();
            finalGrade.name = "Course Grade";
            finalGrade.finalTotalPercent = totalGradePercent;
            finalGrade.finalLetterGrade = letterGrade;  
                
    }



   //create the assessment constructor
    function Assessment() {
        
        this.name = "";
        this.earnedPoints = 0;
        this.points = 0;

    }
    function CourseGrade() {
    
        this.name = "";
        this.finalTotalPercent = 0;
        this.finalLetterGrade = 0;

    }  
//======================================================
function Grades(){
  var myObj = new AssessmentArray([]);
  var myJSON =JSON.stringify(myObj);
  var cookies = JSON.parse(myJSON);
  document.getElementById("listGrades").innerHTML = cookies;
  //return cookie;

  document.cookie = cookies;
  listAllGgrades();

} 

function listAllGrades()
{
     var cookies = document.cookie;    //if cookies exiting 
     var i, cookieString = "";

     if (cookies.length === 0) 
          {   
               cookieString = "No cookies...";
          }
          else
          {
               cookies = cookies.split(";"); // convert to an array
               var count = cookies.length;

               for (i = 0; i < count; i++) 
                    {
                         cookieString += cookies[i] + "<br />";

                    }
          }

          var lblMessage = document.getElementById("listGrades");
          lblMessage.innerHTML = cookieString; 
          
}

function SaveGrade()
{
          var cookie1 = document.getElementById("lab1" ).value;
          var cookie2 = document.getElementById("lab2").value;
          var cookie3 = document.getElementById("lab3" ).value;
          var cookie4 = document.getElementById("lab4" ).value;
          var cookie5 = document.getElementById("lab5" ).value;
          var cookie6 = document.getElementById("lab6" ).value;
          var cookie7 = document.getElementById("lab7" ).value;
          var cookie8 = document.getElementById("lab8" ).value;
          var cookie9 = document.getElementById("lab9" ).value;
          var cookie10 = document.getElementById("lab10" ).value;
          var cookie11 = document.getElementById("quiz1" ).value;
          var cookie12 = document.getElementById("quiz2" ).value;
          var cookie13 = document.getElementById("quiz3" ).value;
          var cookie14 = document.getElementById("quiz4" ).value;
          var cookie15 = document.getElementById("quiz5" ).value;
          var cookie16 = document.getElementById("quiz6" ).value;
          var cookie17 = document.getElementById("quiz7" ).value;
          var cookie18 = document.getElementById("quiz8" ).value;
          var cookie19 = document.getElementById("quiz9" ).value;
          var cookie20 = document.getElementById("quiz10" ).value;
          var cookie21 = document.getElementById("exam1" ).value;
          var cookie22 = document.getElementById("exam2" ).value;
          var cookie23 = document.getElementById("project1" ).value;
          var cookie24 = document.getElementById("extraCredit1" ).value;
          var cookie25 = document.getElementById("participation" ).value;
          

          //var cookiearnd = document.getElementById("Earned").value;
     
          document.cookie = "lab1 = " + cookie1 + " /25" +" ;";
          document.cookie = "lab2 = " + cookie2 + " /25" +" ;";
          document.cookie = "lab3 = " + cookie3 + " /25" +" ;";
          document.cookie = "lab4 = " + cookie4 + " /25" +" ;";
          document.cookie = "lab5 = " + cookie5 + " /25" +" ;";
          document.cookie = "lab6 = " + cookie6 + " /25" +" ;";
          document.cookie = "lab7 = " + cookie7 + " /25" +" ;";
          document.cookie = "lab8 = " + cookie8 + " /25" +" ;";
          document.cookie = "lab9 = " + cookie9 + " /25" +" ;";
          document.cookie = "lab10 = " + cookie10 + " /25" +" ;";
          document.cookie = "quiz1 = " + cookie11 + " /25" +" ;";
          document.cookie = "quiz2 = " + cookie12 + " /25" +" ;";
          document.cookie = "quiz3 = " + cookie13 + " /25" +" ;";
          document.cookie = "quiz4 = " + cookie14 + " /25" +" ;";
          document.cookie = "quiz5 = " + cookie15 + " /25" +" ;";
          document.cookie = "quiz6 = " + cookie16 + " /10" +" ;";
          document.cookie = "quiz7 = " + cookie17 + " /10" +" ;";
          document.cookie = "quiz8 = " + cookie18 + " /10" +" ;";
          document.cookie = "quiz9 = " + cookie19 + " /10" +" ;";
          document.cookie = "quiz10 = " + cookie20 + " /10" +" ;";
          document.cookie = "exam1 = " + cookie21 + " /100" +" ;";    
          document.cookie = "exam2 = " + cookie22 + " /100" + " ;";
          document.cookie = "project = " + cookie23 + " /100" +" ;";
          document.cookie = "extraCredit1 = " + cookie24 + " /25" +" ;";
          document.cookie = "participation = " + cookie25 + " /50" +" ;";              
          alert(document.cookie);
          listAllCookies();

                    
}


//======================================================
$(document).ready(function()
   {
      
    $("#table2").hide();

    }); 

$(document).ready(function() {
    $("#Labs").click(function(){
        $("#table2").show();
       
    }); 
});
//========================================================
$(document).ready(function()
  {
    $("#lab1").tooltip();   
  }); 
$(document).ready(function()
  {
    $("#lab2").tooltip();   
  }); 

  $(document).ready(function()
  {
    $("#lab3").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab4").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab5").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab6").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab6").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab7").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab8").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab9").tooltip();   
  });
  $(document).ready(function()
  {
    $("#lab10").tooltip();   
  });


//==========================================================

$(document).ready(function()
   {
      
    $("#table3").hide();

    }); 

$(document).ready(function() {
    $("#Quizzez").click(function(){
        $("#table3").show();
    }); 
});

$(document).ready(function()
  {
    $("#quiz1").tooltip();   
  }); 
$(document).ready(function()
  {
    $("#quiz2").tooltip();   
  }); 

  $(document).ready(function()
  {
    $("#quiz3").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz4").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz5").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz6").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz7").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz8").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz9").tooltip();   
  });
  $(document).ready(function()
  {
    $("#quiz10").tooltip();   
  });

//==========================================================
$(document).ready(function()
   {
      
    $("#table4").hide();

    }); 

$(document).ready(function() {
    $("#Exams").click(function(){
        $("#table4").show();
    }); 
});

$(document).ready(function()
{
  $("#exam1").tooltip();   
});
$(document).ready(function()
{
  $("#exam2").tooltip();   
});


//===========================================================
    
$(document).ready(function()
   {
      
    $("#table5").hide();

    }); 

$(document).ready(function() {
    $("#Projes").click(function(){
        $("#table5").show();
    }); 
});

$(document).ready(function()
{
  $("#project1").tooltip();   
});
//===========================================================
$(document).ready(function()
   {
      
    $("#table6").hide();

    }); 

$(document).ready(function() {
    $("#Extra_credits").click(function(){
        $("#table6").show();
    }); 
});

$(document).ready(function()
{
  $("#extraCredit1").tooltip();   
});
//==============================================================

$(document).ready(function()
   {
      
    $("#table7").hide();

    }); 

$(document).ready(function() {
    $("#Participations").click(function(){
        $("#table7").show();
    }); 
});


$(document).ready(function()
{
  $("#participation").tooltip();   
});
//================================================================
//Remove the input row 

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table2").deleteRow(i);
  
}

function deleteRowNow(r) {
  var j = r.parentNode.parentNode.rowIndex;
  document.getElementById("table3").deleteRow(j);
}

function DeleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table4").deleteRow(i);
}

function delRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table5").deleteRow(i);
} 

function DelRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table6").deleteRow(i);
}

function deleteRow7(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table7").deleteRow(i);
} 