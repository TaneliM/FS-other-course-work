const url = require('url');

const myUrl = new URL('http://websiteurl.com:5000/home.html?id=1000&status=active')

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (includes port)
console.log(myUrl.host);
// Hostname
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);
// As an object
console.log(myUrl.searchParams);
// Adding params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);
// Looping through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));