import { Component } from '@angular/core';
import { HeadComponent } from "../head/head.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadComponent]
})
export class HomeComponent {

}
