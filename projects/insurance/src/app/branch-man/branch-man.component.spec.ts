import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManComponent } from './branch-man.component';

describe('BranchManComponent', () => {
  let component: BranchManComponent;
  let fixture: ComponentFixture<BranchManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
