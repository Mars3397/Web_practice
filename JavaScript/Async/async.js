// ### Async ###

// ---------------------------------------------------------------------------
// 模擬 async
console.log(1);
console.log(2);
setTimeout(() => { // () => = function
    // the call back funtion
    console.log('time out callback function fired');
}, 2000);
console.log(3);
console.log(4);


// ---------------------------------------------------------------------------
// HTTP request
// wrap it in a "arrow function expression" -> conveient
const getTodos = (callback) => {
    // create a request object
    const request = new XMLHttpRequest();

    // add event : readystatechange -> fired when the ready state change
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) { 
            // fire the call back we specified while calling the function
            callback(undefined, request.responseText); 
        }else if (request.readyState === 4) {
            console.log('could not fetch the data', undefined);
        }
    })

    // send the request
    // .open(method, endpoint), GET -> get data
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

// Async and non-blocking -> start now and finish later (cout when request finished)
// call the request funtion and specify the call back function
getTodos((err, data) => {
    // console.log('callback fired');
    // console.log(err, data);
    if (err) { // undefined -> false
        // console.log(err);
    }else {
        // console.log(data);
    }
});


// ---------------------------------------------------------------------------
// JSON data
const getTodos1 = (resouce, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) { 
            // transfer reponse json text into JavaScript array object
            const data = JSON.parse(request.responseText);
            callback(undefined, data); 
        }else if (request.readyState === 4) {
            console.log('could not fetch the data', undefined);
        }
    })

    request.open('GET', resouce);
    request.send();
};

// ---------------------------------------------------------------------------
// call function after getting the previous requesting data
getTodos1('todos.json', (err, data) => {
    console.log(data);
    getTodos1('todos1.json',  (err, data) => {
        console.log(data);
        getTodos1('todos2.json',  (err, data) => {
            console.log(data);
        })
    })
});

// better way to do the same thing as the above : promise
const getTodos2 = (resouce) => {
    // promise is a function that return resolve or reject
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) { 
                const data = JSON.parse(request.responseText);
                // resolve return data when we get the data
                resolve(data);
            }else if (request.readyState === 4) {
                // reject return error when there is an error
                reject('error getting resource');
            }
        })
        request.open('GET', resouce);
        request.send();
    });
};

// .then(then_function) the then_function fired when the promise return resolve
// .catch(catch_function) the catch_function fired when the promise return reject
getTodos2('todos.json').then(data => {
    console.log('promise 1 resolved :', data);
    return getTodos2('todos1.json');
}).then(data => {
    console.log('promise 2 resolved :', data);
    return getTodos2('todos2.json');
}).then(data => {
    console.log('promise 3 resolved :', data);
}).catch(err => { // fired no matter where the error happen in 1 or 2 or 3
    console.log('promise reject :', err);
});

// ---------------------------------------------------------------------------
// fetch api : better and faster way to do the HTTP request
// fetch return the promise automaticlly
fetch('todos.json').then(data => {
    // console.log('resolved', data);
    // x : const data = ... -> fetch return a promise
    return data.json();
}).then(data => {
    console.log('fetch:', data);
}).catch(err => { 
    // reject only when having network error (offline, can't reach the API ... )
    // but the status still response 404
    console.log('rejected', err);
}); 

// ---------------------------------------------------------------------------
// async & await : more clean way to do the same thing above
const getTodos3 = async () => { // async() always return a promise
    // await : wait for the response (non-blocking in async())
    const response = await fetch('todos.json'); 

    // catch the error that is not network problem
    if (response.status !== 200) {
        throw new Error(); // return promise rejected
    }

    const data = await response.json();
    // const response1 = await fetch('todos.json'); 
    // const data1 = await response.json();
    // const response2 = await fetch('todos.json'); 
    // const data2 = await response.json();
    // run sequentially for the above (blocking)
    return data;
};

 getTodos3()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err)); 