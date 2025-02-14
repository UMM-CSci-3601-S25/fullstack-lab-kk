import { Component, Signal } from '@angular/core';
import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserCardComponent } from '../users/user-card.component';

@Component({
  selector: 'app-user-list-simple',
  templateUrl: './user-list-simple.component.html',
  styleUrl: './user-list-simple.component.scss',
  imports: [
    UserCardComponent
  ],
})
export class UserListSimpleComponent {

  /**
   * This constructor injects instance of `UserService`
   * into this component.
   * `UserService` lets us interact with the server.
   *
   * @param userService the `UserService` used to get users from the server
   */
  constructor(private userService: UserService) {
    // Nothing here – everything is in the injection parameters.
  }

  users: Signal<User[]> = toSignal(this.userService.getUsers());
  // users = computed(() => {
  //   return this.userService.getUsers({});
  // });
}
