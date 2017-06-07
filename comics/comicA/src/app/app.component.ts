import { Component,OnInit} from '@angular/core';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServeService]
})

export class AppComponent {

}
