import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCRUDComponent } from './branch-crud.component';

describe('BranchCRUDComponent', () => {
  let component: BranchCRUDComponent;
  let fixture: ComponentFixture<BranchCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
