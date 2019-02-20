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
  task: any;

  constructor(private _httpService: HttpService){
    console.log('hello');
  }

  ngOnInit(){
  }

  getAllTasks(){
    this._httpService.getTasks().subscribe(all_tasks=> this.tasks=all_tasks['data'])
  }
  getOneDescription(id:string){
    this._httpService.getTask(id).subscribe(task=> this.task=task['data'])
  }

}
