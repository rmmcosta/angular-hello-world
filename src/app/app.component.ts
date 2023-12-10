import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HelloWorldComponent, UserItemComponent, UserListComponent]
})
export class AppComponent {
  title = 'angular-hello-world';
}
