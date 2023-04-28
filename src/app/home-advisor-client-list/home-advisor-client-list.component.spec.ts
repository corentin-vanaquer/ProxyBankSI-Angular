import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdvisorClientListComponent } from './home-advisor-client-list.component';

describe('HomeAdvisorClientListComponent', () => {
  let component: HomeAdvisorClientListComponent;
  let fixture: ComponentFixture<HomeAdvisorClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdvisorClientListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdvisorClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
