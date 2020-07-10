function* gen() {
    while (true) {
        var value = yield null;
        console.log(value);
    }
}
var iteratorObj = gen();
document.querySelector('.sender').addEventListener('click', function(e) {
    console.log(iteratorObj.next());
    console.log(iteratorObj.next(2));
    console.log(iteratorObj.next(3));
    console.log(iteratorObj.return('breaking out....'));
});

function* gen1() {
    var res = yield "2+2=?"
    console.log(res);
    var res1 = yield '3*3=?'
    console.log(res1);
}

var iterObj = gen1();
document.querySelector('.sender1').addEventListener('click', function(e) {
    console.log(iterObj.next()); //"2+2=?",false
    console.log(iterObj.next(4)); //4    '3*3=?',false
    console.log(iterObj.next(9)); // 9    undefined,true
});