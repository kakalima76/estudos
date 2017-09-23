var Rx = require('rxjs/Rx');
var request = require('request');
var https = require('https');

/*Rx.Observable.of(1,2,3,51,32,45)
.map(x => x + 1)
.filter(x => x % 2 === 0)
.subscribe(res => console.log(res));

var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');

var myObservable = Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 2000);
});
myObservable.subscribe(value => console.log(value));*/

// Create a factory function which returns a promise

var fetch =  function(url){
	return new Promise(function(resolve, reject){
		request(url, {json: true}, function (error, response, body) {
  			resolve(body);
		});
	})
}

Rx.Observable.fromPromise(fetch('https://jsonplaceholder.typicode.com/users'))
/*.map(x => JSON.parse(x))*/
.flatMap(function(x) { return x; })
.filter(x => x.id === 1)
.subscribe(x => console.log(x));
    /*.distinct()
    .subscribe(function next (x) {
        console.log('Next');
        console.log(x);
    }, function error (x) {
        console.log('Error');
        console.log(x);
    }, function completed () {
        console.log('Completed');
    });*/

