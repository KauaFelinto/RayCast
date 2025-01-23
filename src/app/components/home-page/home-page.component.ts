import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { InstallComponent } from "../install/install.component";
import {ProdctivityComponent} from "../prodctivity/prodctivity.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [HomeComponent, InstallComponent, ProdctivityComponent]
})
export class HomePageComponent {

}
