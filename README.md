
# Report From Website

[![npm version](https://badge.fury.io/js/report-from-website.svg)](https://badge.fury.io/js/report-from-website)

**Report From Website** is an Angular library component that allows users to report issues they encounter, along with screenshots and logs, to a specified server endpoint. This library is particularly useful for gathering user feedback and debugging information in a visual format, helping development teams better understand and resolve issues.

## Features

- **Screenshot Capture**: Automatically captures the current screen view.
- **Log Collection**: Gathers console logs, URL, and user information.
- **Server Submission**: Sends all data to a specified URL in JSON format.
- **Flexible Configuration**: Allows dynamic input of custom log URLs and HTTP headers.

## Installation

```bash
npm install report-from-website
```

## Usage

Integrate the library into your Angular application by following these steps.

### Import the Module

Import `ReportFromWebsiteModule` in `AppModule` or the specific module where you want to use this component.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReportFromWebsiteModule } from 'report-from-website';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportFromWebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use the Component

Add the `ReportButtonComponent` to your template to enable users to report their current screen state, including screenshots and log details.

#### `app.component.html`

```html
<app-report-button
  [logUrl]="'https://yourserver.com/api/report/log'"
  [headers]="{
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'Content-Type': 'application/json'
  }"
  (reportResult)="handleReportResult($event)">
</app-report-button>
```

#### `app.component.ts`

Define the `handleReportResult` function to process the result of the report submission:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleReportResult(result: { status: string, response?: any, error?: any }) {
    if (result.status === 'success') {
      console.log('Report sent successfully:', result.response);
      // Display success notification or message
    } else if (result.status === 'error') {
      console.error('Report sending failed:', result.error);
      // Display error notification or message
    }
  }
}
```

### Configurable Input Parameters

- **`logUrl`** (required): Specifies the URL endpoint for log collection. Example: `https://yourserver.com/api/report/log`
- **`headers`** (optional): HTTP headers to include in the request, commonly for `Authorization` and `Content-Type`.

### Event Response Data

- **`status`**: Returns `success` if the report was sent successfully, otherwise returns `error`.
- **`response`**: Contains the server response data upon success.
- **`error`**: Provides error details if the submission fails.

## Use Case Example

This library is especially helpful for enabling users to quickly report issues they encounter, with screenshots and logs, directly to the server. It improves user satisfaction and simplifies issue resolution by providing developers with contextual data.

## Dependencies

This library uses the `html2canvas` library to capture screenshots, which is included as a dependency in the `package.json`.

## Contributing

To contribute to this project, please visit the [GitHub repository](https://github.com/rastmob/report-from-website) and submit a pull request.

## Contact & Support

- **Developer**: [@mobilerast](http://rastmobile.com/en)
- **Contact**: mehmet.alp@rastmobile.com
- **Phone**: +905310211446

## License

MIT

---

By integrating this library, your users can easily submit issues they encounter along with screenshots directly to your server. This helps streamline the development process and enhances the user experience.
