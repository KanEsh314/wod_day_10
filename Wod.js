function prima(num)
{
	for(var i = 0; i < num.length; i++){
		var isPrime = true;
		for(var j = 2; j <= Math.sqrt(num[i]); j++){
			if(num[i] % j == 0)
			{
				isPrime = false;
			}
		}
		if(isPrime)
		{
			document.write(num[i] + " is a Prime<br>");
		}else{
			document.write(num[i] + " is a Not Prime<br>");
		}
	}
}
prima([15,7,21,19,101]);

