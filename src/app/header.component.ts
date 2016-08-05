import { Component, OnInit } from '@angular/core';
import {Dropdown} from "./dropdown.directive";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [Dropdown,ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
