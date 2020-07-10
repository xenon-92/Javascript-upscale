//#region YIELD
function* yielderFunction(i) {
    yield i;
    yield* anotherGeneratorFunction(i);
    yield i + 10;
}

function* anotherGeneratorFunction(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}
var iteratorObj = yielderFunction(10);
var parentYield = document.querySelector('.yieldDisp');
document.querySelector('.yielder').addEventListener('click', function(e) {
    var nex = iteratorObj.next();
    if (nex.done) {
        return;
    }
    var elm = document.createElement('span');
    elm.className = 'padder'
    elm.innerHTML = nex.value;
    parentYield.appendChild(elm);
});
//#endregion YIELD

//#region return
function* returner(i) {
    yield 1 + i;
    yield 2 + i;
    yield 3 + i;
    return 4 + i;
    yield "this never gets executed......"

}
var iteratorObjR = returner(11);
var parentReturn = document.querySelector('.returnSec');
document.querySelector('.returner').addEventListener('click', function(e) {
    var nex = iteratorObjR.next();
    if (nex.done && !nex.value) {
        return;
    }
    var elm = document.createElement('span');
    elm.className = 'padder';
    elm.innerHTML = nex.value;
    parentReturn.appendChild(elm);
});
//#endregion return

//#region error caught

function* errorNotCaught(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
    throw new Error('custom error.....');
    yield i + 1; //this is never reached
}
var iteratorObjectErrorNotCaught = errorNotCaught(30);
var parentError = document.querySelector('.errNotCaught');
document.querySelector('.errorNotCaught').addEventListener('click', function(e) {
    var nex = iteratorObjectErrorNotCaught.next();
    if (nex.done) {
        let elm = document.createElement('span');
        elm.className = 'padder';
        elm.innerHTML = 'error is thrown, check console....';
        parentError.appendChild(elm);

        return;
    }
    var elm = document.createElement('span');
    elm.className = 'padder';
    elm.innerHTML = nex.value;
    parentError.appendChild(elm);
});
//#endregion

//#region error caught
function* errorCaught(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
    yield i + 4;
    try {
        throw new Error('custom error is thrown');
    } catch (e) {
        console.error(e);
    }
    yield "previous to this, error was caught in the generator function...."
}
var iteratorObjErrCaught = errorCaught(40);
var parentErrCaught = document.querySelector('.errCaught');
document.querySelector('.errorCaught').addEventListener('click', function(e) {
    var nex = iteratorObjErrCaught.next();
    if (nex.done) {
        return;
    }
    var elm = document.createElement('span');
    elm.className = 'padder';
    elm.innerHTML = nex.value;
    parentErrCaught.appendChild(elm);
});
//#endregion error caught