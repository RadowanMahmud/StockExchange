import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;

  close() {
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
