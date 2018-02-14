# JSON to CSV Converter

This is a small app that converts JSON input to a CSV format, and displays it on the screen.

## To test:
 * Navigate to the `challenge_2` directory and run the server with `node server.js`
 * Open the page at `localhost:8000`
 * Insert some JSON and go!
 
## Requirements, Constraints:
 * Single-page app posts form data to the server and displays it 
 * Page should not reload when data is posted/rendered
 * Use jQuery to make ajax requests, manipulate the DOM and handle DOM events
 * Server must flatten the JSON hierarchy and map each item to a single line of the CSV report (Child records will always be in a property called `children`)
 
## Notes:
 * This project attempts to achieve all of the above with a strict MVC structure using ES6 Classes
