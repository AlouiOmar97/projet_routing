import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id=0;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.id= this.activateRoute.snapshot.params.id;
  }

}
