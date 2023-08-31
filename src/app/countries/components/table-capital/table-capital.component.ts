import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-table-capital',
  templateUrl: './table-capital.component.html',
  styleUrls: ['./table-capital.component.css']
})
export class TableCapitalComponent {

  @Input()
  public countries:Country[] =[];
}
