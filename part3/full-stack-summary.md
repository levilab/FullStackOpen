```
At first, frontend is designed to test frontend functionality, in which a json-server, containing sample database will be used as the backend. 

At this stage, baseURL (to backend) is predefined localhost:3001, while the frontend is run on vite server at 5173. 

Then, a backend directory is set up, in which mostly focuses on create a in-memory array as database, and specifies functionalities for each http methods. 

Also, port has been defined to help the App decide where to go when user accesses on brower (calling GET) or deployed on Render. 

Then, to connect frontend and backend, baseURL in frontend would be set to a path on backend (GET method), and the cors must be used to make frontend and backend connected without issues. 

Next, we can run npm run build from the fronend project, to pack the frontend into a dist folder, including one single html file. The dist folder then paste into the backend directory. 

Also, a static method from Express is also used, to ask Express check dist folder. Quick question: how Express know if the dist directory contains a file corresponding to the request's address? as frontend and backend run on the same address, we can use relative url instead of fixed url. Due to this changed, the vite server 5173 stops working, we can fix by adding some code in vite.config.js

```

``` 
    backend flow: for every request (GET, POST,...), the whole index.js would be reloaded and middleware is sequentially executed.
    For example:
        app.use(express.static('dist')) 
        app.use(express.json())
        app.use(requestLogger)
    
    If a Get request triggered, the Express will check if any index.html file exists. If yes, it will run the file.
    Then, the request will be parsed into JS object.
    Then, the request.body inside the requestLogger can display the data thanks to the JS parsing above.
    Finally, if the route exists, the logic in this route is executed, then formatted back to JSON
```