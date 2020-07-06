/** @format */

/**
 * Ajax function
 *
 * @param {*} url
 * @param {*} cbS = Success Callback
 * @param {*} cbF = Failure callback
 */

function fetchData(url, cbS, cbF) {
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    xhr.open('Get', url, true);
    xhr.send();
    xhr.onload = function () {
      cbS(xhr.response);
      if (results.length == 4) {
        appendResults();
      }
    };
    xhr.onerror = function () {
      cbF(new Error('could not connect to the server...'));
      if (results.length == 4) {
        appendResults();
      }
    };
  } else {
    console.log('your browser does not support ajax');
  }
}
/**
 * Urls
 */
var url1 = 'https://jsonplaceholder.typicode.com/posts/1';
var url2 = 'https://jsonplaceholder.typicode.com/comments?postId=1';
var url3 = 'https://jsonplaceholder.typicode.com/users';
var url4 = 'https://reqres.in/api/users?delay=3';
var url5 = 'https://jsonplaceholder.typicodeES.com/posts/1'; //foul url
var url6 = 'https://reqres.in/api/users/1';
var urls = [];
urls.push(url1, url2, url3, url4, url5, url6);

/**
 * Select a random url
 */
function getRandomUrl() {
  return urls[Math.floor(Math.random() * urls.length)];
}
/**
 *
 * results
 */
var results = [];
// success callback function

function cbSuccess(resp) {
  results.push(resp);
}

// failure callback function
function cbFailure(resp) {
  results.push(resp);
}

/***
 * selectors
 */
var res = document.querySelector('.res');
var res1 = document.querySelector('.res1');
var res2 = document.querySelector('.res2');
var res3 = document.querySelector('.res3');

/**
 * event listener
 */
document.querySelector('.ajax').addEventListener('click', function () {
  var rand = getRandomUrl();
  fetchData(rand, cbSuccess, cbFailure);
  rand = getRandomUrl();
  fetchData(rand, cbSuccess, cbFailure);
  rand = getRandomUrl();
  fetchData(rand, cbSuccess, cbFailure);
  rand = getRandomUrl();
  fetchData(rand, cbSuccess, cbFailure);
});

/**
 * alert listener
 */
document.querySelector('.alert').addEventListener('click', function () {
  alert('Here just to alert...');
});

/**
 * function append results
 */
function appendResults() {
  res.innerHTML = results[0];
  res1.innerHTML = results[1];
  res2.innerHTML = results[2];
  res3.innerHTML = results[3];
}
