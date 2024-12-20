import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-child.component.html',
  styleUrl: './event-child.component.css'
})
export class EventChildComponent {
@Input() sendMsg=''

public msgToParent=''

@Output() eventemit=new EventEmitter

send(){
  this.eventemit.emit(this.msgToParent)
  this.msgToParent = ''
}
}
