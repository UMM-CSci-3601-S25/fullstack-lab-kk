import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListSimpleComponent } from './user-list-simple.component';
import { RouterModule } from '@angular/router';
import { MockUserService } from 'src/testing/user.service.mock';
import { UserService } from '../users/user.service';

describe('UserListSimpleComponent', () => {
  let component: UserListSimpleComponent;
  let fixture: ComponentFixture<UserListSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), UserListSimpleComponent],
      providers: [{ provide: UserService, useValue: new MockUserService() }],
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
