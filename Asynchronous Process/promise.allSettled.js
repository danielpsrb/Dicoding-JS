const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));

/*
OUTPUT:
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Error
        at Timeout._onTimeout (c:\Users\U S E R\Desktop\dicoding\Asynchronous Process\promise.allSettled.js:2:75)
        at listOnTimeout (node:internal/timers:569:17)
        at process.processTimers (node:internal/timers:512:7)
  },
  { status: 'fulfilled', value: 3 }
]

*/