import { Component, Input } from '@angular/core';
import { Manhwa } from '../../interfaces/manhwa';

@Component({
  selector: 'app-manhwa-card',
  templateUrl: './manhwa-card.component.html',
  styleUrls: ['./manhwa-card.component.css']
})
export class ManhwaCardComponent {
  @Input() manhwa!: Manhwa;
}
