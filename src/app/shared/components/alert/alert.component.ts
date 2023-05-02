import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'info'; // success, error, info, warning
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
