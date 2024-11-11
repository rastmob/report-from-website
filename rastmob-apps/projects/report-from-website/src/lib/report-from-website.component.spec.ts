import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFromWebsiteComponent } from './report-from-website.component';

describe('ReportFromWebsiteComponent', () => {
  let component: ReportFromWebsiteComponent;
  let fixture: ComponentFixture<ReportFromWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFromWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFromWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
