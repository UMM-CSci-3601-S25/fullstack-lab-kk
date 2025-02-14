import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSimpleComponent } from './user-list-simple.component';

describe('UserListSimpleComponent', () => {
  let component: UserListSimpleComponent;
  let fixture: ComponentFixture<UserListSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListSimpleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
