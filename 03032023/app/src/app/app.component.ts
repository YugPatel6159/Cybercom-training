
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yug patel';
  imgUrl = 'https://picsum.photos/200/300'

   changeImg(e: KeyboardEvent){
    this.imgUrl=(e.target as HTMLInputElement).value;
   }
   logImg(e: string){
    console.log(e);
   }
}
