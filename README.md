
# Report From Website - JavaScript Library

## Overview

`report-from-website` is a **pure JavaScript** library that allows you to capture essential state information (like the URL, user agent, timestamp) and send it to a backend API. It's typically used for error reporting or logging user activity in the background.

The library is designed to be **easy to use** and can be integrated into any web project (including Angular, React, or plain HTML).

### Key Features:
- Capture the current **URL** of the page.
- Capture the **user agent** (browser details).
- Capture a **timestamp** of when the report is triggered.
- **Send data** to a custom endpoint via a **POST request**.

## Installation

To include this library in your project, you can either download the raw JavaScript file or install it via npm (if published).

### Option 1: Download the raw JavaScript file
- Download `report-from-website.js` from the **dist/** folder and include it in your project.

### Option 2: Install via npm
```bash
npm install report-from-website
```

## Usage

### 1. Include the Library in Your Project

#### **Option 1: In HTML**
```html
<script src="path/to/report-from-website.js"></script>
```

#### **Option 2: In JavaScript Module (ESM or CommonJS)**
```javascript
import ReportFromWebsite from 'report-from-website';  // If installed via npm

// Initialize the report functionality
const report = new ReportFromWebsite('#reportButton', '/custom/log');  // URL is optional
```

### 2. HTML Button to Trigger the Report

Add a button to your HTML that will trigger the report:

```html
<button id="reportButton">Send a Report</button>
```

### 3. Handling the Report Data

When the button is clicked, the library will send the data to the provided URL (default is `/error/log`). You can replace the default URL with any custom endpoint.

## Example Usage

**HTML Example**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Report From Website Example</title>
  <script src="path/to/report-from-website.js"></script> <!-- Library script -->
</head>
<body>

  <button id="reportButton">Send a Report</button>

  <script>
    // Initialize the library with the button selector and optional URL for reporting
    const report = new ReportFromWebsite('#reportButton', 'https://yourwebsite.com/error/log');
  </script>

</body>
</html>
```

### 4. Backend Example (Node.js/Express)
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/error/log', (req, res) => {
  console.log('Received report data:', req.body);
  res.status(200).json({ message: 'Report received successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## License

MIT License. See `LICENSE` for more information.

## Contributing

Contributions are welcome! Please fork this repository, make changes, and submit a pull request.

---

Feel free to reach out if you have any questions or need support. Thank you for using `report-from-website`!
