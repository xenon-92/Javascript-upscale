/** @format */
/**
 *
 * NODE JS CALLBACK STYLE, WHERE THE CALLBACK FUNCTION TAKES TWO PARAMETER
 * FOR ERROR AND SUCCESS. THOUGH IT IS AN ERROR FIRST STYLE
 *
 */

function fetchAjaxData(url, cb) {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    xhr.open('Get', url, true);
    xhr.send();
    xhr.onload = function () {
      cb(null, xhr.response);
    };
    xhr.onerror = function () {
      cb(new Error('the server threw an error response..'));
    };
  } else {
    console.log('your browser does not support XMLHttpRequest');
  }
}

/**
 * list of urls
 */
var urls = [];
var url1 = 'https://jsonplaceholder.typicode.com/posts/1';
var url2 = 'https://jsonplaceholder.typicode.com/comments?postId=1';
var url3 = 'https://jsonplaceholder.typicode.com/users';
var url4 = 'https://reqres.in/api/users?delay=3';
var url5 = 'https://jsonplaceholder.typicodeES.com/posts/1'; //foul url
var url6 = 'https://reqres.in/api/users/1';
urls.push(url1, url2, url3, url4, url5, url6);

/**
 * Results of the divs
 */
var result0 = document.querySelector('.res');
var result1 = document.querySelector('.res1');
var result2 = document.querySelector('.res2');
var result3 = document.querySelector('.res3');

/**
 * function randomly pick a url
 */
function pickARandom() {
  return urls[Math.floor(Math.random() * urls.length)];
}

/**
 * event listener for ajax button call
 */
document
  .querySelector('.nestedCallBack')
  .addEventListener('click', function (event) {
    event.target.disabled = true;
    result0.innerHTML = '';
    result1.innerHTML = '';
    result2.innerHTML = '';
    result3.innerHTML = '';
    //call ajax and get a random url
    var rand = pickARandom();
    fetchAjaxData(rand, function (err, success) {
      if (err) {
        result0.innerHTML = err;
        event.target.disabled = false;
      } else {
        var res = success;
        rand = pickARandom();
        fetchAjaxData(rand, function (err1, success1) {
          if (err1) {
            result1.innerHTML = err1;
            event.target.disabled = false;
          } else {
            var res1 = success1;
            rand = pickARandom();
            fetchAjaxData(rand, function (err2, success2) {
              if (err2) {
                result2.innerHTML = err2;
                event.target.disabled = false;
              } else {
                var res2 = success2;
                rand = pickARandom();
                fetchAjaxData(rand, function (err3, success3) {
                  if (err3) {
                    result3.innerHTML = err3;
                    event.target.disabled = false;
                  } else {
                    var res3 = success3;
                    handleData(res, res1, res2, res3);
                  }
                  event.target.disabled = false;
                  return;
                });
              }
            });
          }
        });
      }
    });
  });

/**
 * Data handler function from ajax's success/failure
 */

function handleData(res, res1, res2, res3) {
  if (res) {
    result0.innerHTML = res;
  }
  if (res1) {
    result1.innerHTML = res1;
  }
  if (res2) {
    result2.innerHTML = res2;
  }
  if (res3) {
    result3.innerHTML = res3;
  }
}

/**
 * alert area
 */
document.querySelector('.alert').addEventListener('click', function (evt) {
  alert('just an alert..');
});
