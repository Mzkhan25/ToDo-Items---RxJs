import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from 'src/app/models/to-do';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient, private todoService: TodoService) { }
 // trooper$: Observable<any[]>;
  todos: ToDo[];
  todos$ : Observable<ToDo[]>
  ngOnInit() {
    this.getItems();
  }
  getItems(){
   

  this.todoService.getToDos().subscribe( data => {
  
    this.todos  = data;
    
  });
    
  }
  
}
