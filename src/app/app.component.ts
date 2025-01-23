import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstallComponent } from "./components/install/install.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, InstallComponent, HomePageComponent]
})
export class AppComponent {
  title = 'RayCast';
}
