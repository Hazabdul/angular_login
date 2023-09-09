import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() bg:string=""
  @Input() icon:string=""
  @Input() discription:string=""
  @Input() count:string=""
}
