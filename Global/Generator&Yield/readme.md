# Generator are function that can be exited and later re-enterd. The context such as variable binding will be same upon re-entrance.

<br>
<code>
> function* generateIndex(upperBound) {<br>
>    var index = 'saltSHA';<br>
>    while (upperBound-- > 0) {<br>
>        var uniqueIndex = index + upperBound;<br>
>        yield uniqueIndex;<br>
>    }<br>
> }<br>
</code>
