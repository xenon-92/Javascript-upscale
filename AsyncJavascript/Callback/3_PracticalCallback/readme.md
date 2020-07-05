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
