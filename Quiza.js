function submitAnswers(){
	var total = 5;
	var score = 0;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
	
	//validation
	

	for(i = 1; i <= total;i++){
		if (eval('q'+i) == null || eval('q'+i)  ==''){
		alert("You missed question 1");
		return false;
	}
}
	//set correct answers
	var answers = ["a","a","c"]

	if(q1 == answers[0]){
		score++;
	}	
	if(q2 == answers[1]){
		score++;
	}	
	if(q2 == answers[1]){
		score++;
}

	alert('You scored '+score+' out of '+total);
						
}	
