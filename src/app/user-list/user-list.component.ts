import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [UserItemComponent]
})
export class UserListComponent {
  users: string[] = ['Ricardo', 'Ana', 'Beatriz'];
}
