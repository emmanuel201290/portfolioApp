import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side.component.css']
})
export class SideBarComponent {
  @Output()
  public dinamic = new EventEmitter<string>()

  giveStyle(): void{
    this.dinamic.emit()
  }

}
