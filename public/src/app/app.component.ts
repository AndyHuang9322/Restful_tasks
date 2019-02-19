import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];

  constructor(private _httpService: HttpService){
    console.log('hello');
  }

  ngOnInit(){
    this.getAllTasks();
  }

  getAllTasks(){
    this._httpService.getTasks().subscribe(all_tasks=> this.tasks=all_tasks['data'])
  }

}
