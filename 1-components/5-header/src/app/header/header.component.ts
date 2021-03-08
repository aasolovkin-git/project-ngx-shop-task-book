import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Input() counter: number = 5;

  @Output() goToBasket = new EventEmitter();

  public redirectTo() {
    this.goToBasket.emit();
  }
}
