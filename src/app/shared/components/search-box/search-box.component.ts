import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Output()
  public onValueEmmiter :EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearchInput')
  public tagInput!:ElementRef<HTMLInputElement>

  @Input()
  public placeholder:string='';

  @Input()
  public initialValue:string='';

  onValue():void{

    const tag = this.tagInput.nativeElement.value;

    this.onValueEmmiter.emit(tag);

    // this.tagInput.nativeElement.value='';

  }
}
