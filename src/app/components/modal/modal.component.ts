import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input('open') isOpen;

  @Input('edit') name;

  @Output('sendName') sendName = new EventEmitter();

  ngOnInit() {
  }

  sendEdittedTask(name){
    this.name = name;
    this.sendName.emit(this.name);
  }

}
