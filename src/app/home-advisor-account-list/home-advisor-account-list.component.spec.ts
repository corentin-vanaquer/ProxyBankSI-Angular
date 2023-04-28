import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvisorAccountListComponent } from './home-advisor-account-list.component';

describe('HomeAdvisorAccountListComponent', () => {
  let component: HomeAdvisorAccountListComponent;
  let fixture: ComponentFixture<HomeAdvisorAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdvisorAccountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdvisorAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
