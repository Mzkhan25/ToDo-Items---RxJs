import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient, private todoService: TodoServiceService) { }
 // trooper$: Observable<any[]>;
  trooper: any[];
  ngOnInit() {
    this.getItems();
  }
  getItems(){
   

  this.todoService.getItems().subscribe( data => {
  //  console.log(data);
    this.trooper  = data;
   // console.log(this.tro);
  });
    
  }
}
