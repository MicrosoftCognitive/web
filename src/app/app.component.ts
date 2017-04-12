import { Component } from '@angular/core';
import { ComputerVisionAPIService } from './computer-vision-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComputerVisionAPIService]
})
export class AppComponent {
  title = 'Eye Tourist';
}
