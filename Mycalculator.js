
	
	function  DEL(val) {

	document.getElementById("screen").value=val;
	}

	function math(val) {
	document.getElementById("screen").value+=val;
	}

	function  equal(val) {
		try{
			DEL(eval(document.getElementById("screen").value))
		}

		catch(equal)
		{
			DEL('Error')
		}
	}
