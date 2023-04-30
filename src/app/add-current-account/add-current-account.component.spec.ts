import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrentAccountComponent } from './add-current-account.component';

describe('AddCurrentAccountComponent', () => {
  let component: AddCurrentAccountComponent;
  let fixture: ComponentFixture<AddCurrentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCurrentAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCurrentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
