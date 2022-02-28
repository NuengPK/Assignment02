import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment02';
  txtusename = ""
  usename = ""

  onCreateusename(){
    this.txtusename = "\""+this.usename +"\" "
    this.usename = ""
  }
}
