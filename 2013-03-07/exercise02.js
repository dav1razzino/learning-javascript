function fibonacci (i)	{
	if ((i === 0) || (i === 1) || (i === 2)) 
		res = 1;
	else
		res = fibonacci(i-1) + fibonacci(i-2);			
  
  return res;
}
