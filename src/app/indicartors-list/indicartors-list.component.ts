import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../services/indicators.service';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-indicartors-list',
  templateUrl: './indicartors-list.component.html',
  styleUrls: ['./indicartors-list.component.css']
})
export class IndicartorsListComponent implements OnInit {

  constructor(public indicatorsService: IndicatorsService) { }

  ngOnInit(): void {
    registerLocaleData( es );
    this.indicatorsService.getValues();
  }

}
