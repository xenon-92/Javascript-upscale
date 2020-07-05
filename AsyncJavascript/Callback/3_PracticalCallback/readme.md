<!-- @format -->

# Any long running function has to be implemented as an asynchronous non blocking function if the UI has to remain responsive

> All function eventually returns, a blocking function returns when its work is done.
> <br>  <code>
> var result = doMultiply(a,b);
> </code>
> <br>
> On the other hand a non-blocking function returns when its work is set in motion. It returns with an expectation that the work will
> be done sometime in the future
> <br>
> <code>
> setTimeout(function(){console.log('sometime in future')},1000);
> </code>

## Then how do we get the result of the non-blocking function ?
<p>Since the result of the non blocking function is not available yet we cannot go ahead and use the result, as in the blokcing  function case. Because at this point the result is undefined or null</p><br>
<code>
var data = fetchSomeData(url);
console.log(data); // at this point the data is 'undefined'
</code><br>
<p>
A standard solution is to provide a callback function, to the non blocking function.
A callback is a function that a non-blocking function calls when it has really finished with the task. So we are aware that the non blocking function has really finished with the work and we can make use of the result to our desire.
</p>