# ubiquitous-engine
Purpose: For now, a simple API proxy server, compelte with unit tests that leverage nock to provide stubbed 'expected' API responses.  Hopefully one day a unified RESTful API gateway or API proxy server written in Node.js, designed to facilitate seamless communication between various APIs, including but not limited to OASIS API in C# and SOLID APIs.

# licence
MIT License

# attribution
This project was created by the LeadJavaliner aka LeadJavelineer at Turing Limited (TuringLimited.com) with assistence from AI at the request of the Our World OASIS API project.

# installation 
clone/branch/fork this repo (ubiquitous-engine.git) then run ```npm install`` from the simple-api-proxy-server folder ( full path: ```ubiquitous-engine/packages/simple-api-proxy-server/``` ).

# usage
```npm test``` - runs tests against simple-server.js in jest using nock to provide 'Expected REST API results'.
```npm run dist``` - runs build, clean, copy-static-files, build:js targets (see package.json file).
```npm run start``` - starts the server on port 5050
More targets in the package.json file.
