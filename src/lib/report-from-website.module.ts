import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReportButtonComponent } from './report-button.component';

@NgModule({
  declarations: [ReportButtonComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ReportButtonComponent]
})
export class ReportFromWebsiteModule { }
