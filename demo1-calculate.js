$(function(){
	var num1, num2, result;
	$("#btn").click(Click)
	function Click(){
		num1 = $("#num1").val();
		num2 = $("#num2").val();
		result = num1 + num2;

		if(!isNaN(result)){
			$("#result").text(result)
		}else{
			$("#result").text("Error, Please Type again!")
		}
	}
})