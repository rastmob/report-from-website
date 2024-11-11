import { TestBed } from '@angular/core/testing';

import { ReportFromWebsiteService } from './report-from-website.service';

describe('ReportFromWebsiteService', () => {
  let service: ReportFromWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportFromWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
