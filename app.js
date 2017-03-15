$(function(){
	var num1, num2, result;
	$("#btn").click(Click)
	function Click(){
		num1 = parseInt($("#num1").val());
		num2 = parseInt($("#num2").val());
		result = num1 + num2;

		if(!isNaN(result)){
			$("#result").text(result)
		}else{
			$("#result").text("Error, Please Type again!")
		}
	}
})