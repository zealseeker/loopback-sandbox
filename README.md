# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues

## Steps to reproduce:

1. Clone the repository: `git clone https://github.com/olivierl/loopback-newrelic-issue.git`

2. `npm install`

3. `npm start`

4. Login: `curl -H "Content-Type: application/json" -X POST -d '{"email":"foo@bar.com","password":"foobar"}' http://localhost:3000/api/users/login`

5. Try to get customers: `curl -H "Authorization: use_the_token_received_at_step_4"  http://localhost:3000/api/customers`

## Results:

### Node.js 4.2.x:

Error: `loopback.getCurrentContext().get('accessToken')` returns `undefined`

```json
{"error":{"name":"TypeError","status":500,"message":"Cannot read property 'userId' of undefined","stack":"TypeError: Cannot read property 'userId' of undefined\n    at limitToOwner (/Users/olivier/Code/loopback-sandbox/common/models/customer.js:9:54)\n    at notifySingleObserver (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:98:22)\n    at iterate (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/node_modules/async/lib/async.js:181:13)\n    at Object.async.eachSeries (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/node_modules/async/lib/async.js:197:9)\n    at doNotify (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:95:11)\n    at doNotify (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:93:49)\n    at doNotify (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:93:49)\n    at doNotify (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:93:49)\n    at Function.ObserverMixin._notifyBaseObservers (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:116:5)\n    at Function.ObserverMixin.notifyObserversOf (/Users/olivier/Code/loopback-sandbox/node_modules/loopback-datasource-juggler/lib/observer.js:91:8)"}}
```

### Node.js 0.12.x:

It work perfectly!

```
[]
```
