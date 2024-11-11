import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReportFromWebsiteComponent } from './report-from-website.component';

@NgModule({
  declarations: [ReportFromWebsiteComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ReportFromWebsiteComponent],
})
export class ReportFromWebsiteModule {}
