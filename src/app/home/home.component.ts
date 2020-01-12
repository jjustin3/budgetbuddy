import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @ViewChild('wizard', { static: false }) wizard: ClrWizard;

  wizOpen: boolean = false;

  frequency: string = 'biweekly';
  payNet: number;
  payGross: number;
  salaried: boolean = false;
  hours: number;
  hoursExpected: number;

  federalWH: number;
  medicare: number;
  social: number;
  state: number;
  federal: number;
  city: number;

  constructor() { }

  ngOnInit() {
  }

}
