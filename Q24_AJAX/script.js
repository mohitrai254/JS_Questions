// AJAX- AJAX stands for Asynchronous JavaScript and XML. It's a technique used in web development to send and receive data from a server without reloading the entire webpage.

// XMLHttpRequest is a JavaScript object that allows you to make HTTP requests (like GET, POST, etc.) from your browser to a server without refreshing the page.

// Why Use XMLHttpRequest?
// Fetch data from a server without reloading the page.
// Update web content dynamically (e.g., form submissions, comments, live updates).
// Works in all browsers (even older ones).

// xhr.open(method, url, async) - Sets up the request (method, URL, async)
// Method- 	The HTTP method (e.g., "GET", "POST")
// url-	The URL to which the request is sent
// async-	Boolean. true (default) = asynchronous (non-blocking)

// xhr.status
// Returns the HTTP status code of the response.
// Common values:
// 200 = OK (successful)
// 404 = Not Found
// 500 = Server Error

// xhr.responseText
// Contains the raw response data as a string.
// You can parse it if it is JSON.

// xhr.onload- xhr.onload is an event handler that runs when an XMLHttpRequest (XHR) completes successfully.
// When you send an API request using XMLHttpRequest, the onload function is triggered after the request is done, and the browser has received a successful response (status 200–299).

// xhr.send()- It is the method used to actually send the HTTP request you’ve prepared using the XMLHttpRequest object.
// For GET requests, leave it empty → xhr.send();
// For POST/PUT requests, you can pass the body → xhr.send(data);

const fetchBtn = document.getElementById("fetch-btn");

fetchBtn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let users = JSON.parse(xhr.responseText);
      let output = "";

      users.forEach((user) => {
        output += `<li>${user.name} (${user.email})</li>`;
      });

      document.getElementById("user-list").innerHTML = output;
    } else {
      console.error("Failed to fetch data");
    }
  };

  xhr.send();
});
