import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAccountsComponent } from './show-all-accounts.component';

describe('ShowAllAccountsComponent', () => {
  let component: ShowAllAccountsComponent;
  let fixture: ComponentFixture<ShowAllAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
