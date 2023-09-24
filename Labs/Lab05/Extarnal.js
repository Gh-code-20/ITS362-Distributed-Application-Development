
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

$(document).ready(function()
   {
      
    $("#table2").hide();

    }); 

$(document).ready(function() {
    $("#Labs").click(function(){
        $("#table2").show();
       
    }); 
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
   