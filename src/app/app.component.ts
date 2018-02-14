import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private modalOpened = false;
  private tasks = [];
  private nameToEdit = "test";
  private currentTask  = {time: null, name: null, id: null};

 receivedTime(formattedTime) {
    this.currentTask.time = formattedTime;
    this.modalOpened = true;
 }

 receivedName(name) {
  this.currentTask.name = name;
  this.modalOpened = false;
  if (this.currentTask.id) {
    //find by id
    let toFind = this.currentTask;
    let index = this.tasks.findIndex(i => i === toFind);
    if (index === -1) throw "MYERROR: this should not have happened";
    this.tasks[index] = this.currentTask;
  } else {
    this.currentTask.id = this.tasks.length;
    this.tasks.push(this.currentTask);
  }
  this.currentTask  = {time: null, name: null, id: null}; 
 }


}
