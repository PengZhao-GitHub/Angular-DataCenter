import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-nodes',
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor() {
    console.log("NodesComponent-constructor");
   }

  ngOnInit() {
  }

}
