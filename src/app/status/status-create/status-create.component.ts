import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/controller/Service/status.service';
import { Status } from 'src/app/controller/model/status.model';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.css']
})
export class StatusCreateComponent implements OnInit {

  constructor(private statusservice: StatusService) { }
  
  public get Status() : Status{
return  this.statusservice._status;
  }
  
  public save(){this.statusservice.save();}

  
  ngOnInit(): void {
  }

}
