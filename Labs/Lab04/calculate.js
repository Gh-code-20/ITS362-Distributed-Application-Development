
/*
Ghadir Alfadhl
Lab2
ITS362
02/14/2021

*/

//----------------------------------------------------------------------------

var AssessmentArray = [];
var Assignment = ["Lab1", "Lab2", "Lab3", "Lab4", "Lab5", "Quiz1", "Quiz2", "Quiz3", "Quiz4", "Quiz5", "Exam1", "Exam2",
                      "Project", "ExtraCredit", "Participation"];
var MaxPoints = [25, 25, 25 , 25 ,25, 10 ,10, 10, 10, 10, 100, 100, 100, 25, 50];
var finalGrade;

//-----------------------------------------------------------------------------

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
     for (i = 0; i < 5; i++)
          {
               labTotal +=AssessmentArray[i].earnedPoints;
               labMaxTotal +=AssessmentArray[i].points;
          }

     for (i = 5; i < 10; i++)
          {
               quizTotal +=AssessmentArray[i].earnedPoints;
               quizMaxTotal +=AssessmentArray[i].points;
          }

     for (i = 10; i < 12; i++)
          {
               examTotal +=AssessmentArray[i].earnedPoints;
               examMaxTotal +=AssessmentArray[i].points;
          }

           
     // total weighted grades for each assignment category
     var labGradePercent = labTotal / labMaxTotal * .30;
     var quizGradePercent = quizTotal / quizMaxTotal * .10;
     var examGradePercent = examTotal / examMaxTotal * .30;
     var projectGradePercent = AssessmentArray[12].earnedPoints / AssessmentArray[12].points * .20;
     var extraCreditGradePercent = AssessmentArray[13].earnedPoints / AssessmentArray[13].points * .05;
     var participationGradePercent = AssessmentArray[14].earnedPoints / AssessmentArray[14].points * .10;
     
            

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

//---------------------------------------------------------------------------
 
function Grades(){
     var myObj = new AssessmentArray([]);
     var myJSON =JSON.stringify(myObj);
     var cookies = JSON.parse(myJSON);
     document.getElementById("listGrades").innerHTML = cookies;
     //return cookie;

     document.cookie = cookies;
     listAllGgrades();

} 
 
//--------------------------------------------------------------------------


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



//------------------------------------------------------------------------------

function SaveGrade()
{
          var cookie1 = document.getElementById("Lab1" ).value;
          var cookie2 = document.getElementById("Lab2").value;
          var cookie3 = document.getElementById("Lab3" ).value;
          var cookie4 = document.getElementById("Lab4" ).value;
          var cookie5 = document.getElementById("Lab5" ).value;
          var cookie6 = document.getElementById("Quiz1" ).value;
          var cookie7 = document.getElementById("Quiz2" ).value;
          var cookie8 = document.getElementById("Quiz3" ).value;
          var cookie9 = document.getElementById("Quiz4" ).value;
          var cookie10 = document.getElementById("Quiz5" ).value;
          var cookie11= document.getElementById("Exam1" ).value;
          var cookie12= document.getElementById("Exam2" ).value;
          var cookie13= document.getElementById("Project" ).value;
          var cookie14= document.getElementById("ExtraCredit" ).value;
          var cookie15= document.getElementById("Participation" ).value;
          

          //var cookiearnd = document.getElementById("Earned").value;
     
          document.cookie = "Lab1 = " + cookie1 + " /25" +" ;";
          document.cookie = "Lab2 = " + cookie2 + " /25" +" ;";
          document.cookie = "Lab3 = " + cookie3 + " /25" +" ;";
          document.cookie = "Lab4 = " + cookie4 + " /25" +" ;";
          document.cookie = "Lab5 = " + cookie5 + " /25" +" ;";
          document.cookie = "Quiz1 = " + cookie6 + " /10" +" ;";
          document.cookie = "Quiz2 = " + cookie7 + " /10" +" ;";
          document.cookie = "Quiz3 = " + cookie8 + " /10" +" ;";
          document.cookie = "Quiz4 = " + cookie9 + " /10" +" ;";
          document.cookie = "Quiz5 = " + cookie10 + " /10" +" ;";
          document.cookie = "Exam1 = " + cookie11 + " /100" +" ;";    
          document.cookie = "Exam2 = " + cookie12 + " /100" + " ;";
          document.cookie = "Project = " + cookie13 + " /100" +" ;";
          document.cookie = "ExtraCredit = " + cookie14 + " /25" +" ;";
          document.cookie = "Participation = " + cookie15 + " /50" +" ;";
                        
          alert(document.cookie);
          listAllCookies();

                    
}
 
//----------------------------------------------------------------------------

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
          
//end         

     