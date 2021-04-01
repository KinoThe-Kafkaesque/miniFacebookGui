import { Injectable } from '@angular/core';
import { Status } from '../model/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  _status!: Status;

 _timeline!: Array<Status>;
public save()
{
 this._timeline.push(this._status);

}
  constructor() { }
}
