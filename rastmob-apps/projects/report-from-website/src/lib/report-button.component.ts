import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-report-button',
  templateUrl: './report-button.component.html',
  styleUrls: ['./report-button.component.css']
})
export class ReportButtonComponent {
  @Input() logUrl: string = '';
  @Input() headers: { [key: string]: string } = {};
  @Output() reportResult = new EventEmitter<{ status: string, response?: any, error?: any }>();

  logs: Array<{ type: string; message: string }> = [];

  constructor(private http: HttpClient) {
    console.log = (message: any) => this.logs.push({ type: "log", message });
    console.warn = (message: any) => this.logs.push({ type: "warn", message });
    console.error = (message: any) => this.logs.push({ type: "error", message });
  }

  async captureScreenshot() {
    const canvas = await html2canvas(document.body);
    return canvas.toDataURL();
  }

  async captureUserState() {
    const screenshot = await this.captureScreenshot();
    const stateData = {
      logs: this.logs,
      url: window.location.href,
      userAgent: navigator.userAgent,
      screenshot
    };

    const httpHeaders = new HttpHeaders(this.headers);

    this.http.post(this.logUrl, stateData, { headers: httpHeaders })
      .subscribe({
        next: (response) => this.reportResult.emit({ status: 'success', response }),
        error: (error) => this.reportResult.emit({ status: 'error', error })
      });
  }

  sendReport() {
    this.captureUserState();
  }
}
