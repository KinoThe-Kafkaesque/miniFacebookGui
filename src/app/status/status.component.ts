import { Component, OnInit } from '@angular/core';
import { StatusService } from '../controller/Service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(public status:StatusService) { }

  ngOnInit(): void {
  }

}
