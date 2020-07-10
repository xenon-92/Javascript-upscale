function* generateIndex(upperBound) {
    var index = 'saltSHA';
    while (upperBound-- > 0) {
        var uniqueIndex = index + upperBound;
        yield uniqueIndex;
    }
}

var iteratorObj = generateIndex(10);
document.querySelector('.btn').addEventListener('click', function(e) {
    var nex = iteratorObj.next();
    if (nex.done) {
        return;
    }
    var elm = document.createElement('p');
    elm.innerHTML = nex.value;
    document.body.appendChild(elm);
});