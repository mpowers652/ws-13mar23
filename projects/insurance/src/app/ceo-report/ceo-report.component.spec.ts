import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoReportComponent } from './ceo-report.component';

describe('CeoReportComponent', () => {
  let component: CeoReportComponent;
  let fixture: ComponentFixture<CeoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
