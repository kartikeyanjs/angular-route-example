import { Component, Renderer2, OnInit, Input, ElementRef, SimpleChanges, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent {
  @Input() options : Array<any>=[];
  @Input() disableVerticalMenu: boolean;
  @Input() id: number;
  @Input() defaultSelected: boolean = false;
  @Input() selectedData: any;
  @ViewChild('ulElement') private ulElement : ElementRef;
  @ViewChild('element') private element : ElementRef;
  @Output() selectedNodeID = new EventEmitter();
  public receivedTabOption: string;
  constructor(private changeDetectorRef: ChangeDetectorRef, private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedData']) {
      console.log('selected data selectedData');
      const selectedData = changes['selectedData'].currentValue;
      if (selectedData) {
        console.log('selected data selectedData', selectedData);
        this.options.forEach(element => {
          if (element.linkAltered === true) {
            element.link = element.link.substring(0, element.link.lastIndexOf("/"));
          }
          element.link = `${element.link}/${encodeURI(JSON.stringify(selectedData))}`,
          element.linkAltered = true;
        });
        if (this.defaultSelected) {
          this.clickDefaultOption();
        }
      }
    }
    if (changes['disableVerticalMenu']) {
      if (this.disableVerticalMenu) {
        this.disableAllLiElements();
        return;
      }
      this.enableAllLiElements();
    }
  }
  enableAllLiElements() {
    console.log('enabling class');
    this.renderer.removeClass(this.ulElement.nativeElement, 'disabled');
  }
  disableAllLiElements() {
    console.log('disabling class');
    this.renderer.addClass(this.ulElement.nativeElement, 'disabled');
  }
  clickDefaultOption() {
      this.changeDetectorRef.detectChanges();
      this.element.nativeElement.click();
  }
  optionSelect(id,name) {
    this.selectedNodeID.emit({id: id, name: name});
  }
}
