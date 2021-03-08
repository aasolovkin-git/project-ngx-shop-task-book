import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  @Input() product: IProduct = {} as IProduct;

  @Output() goToProduct: EventEmitter<void> = new EventEmitter();

  public redirectTo(): void {
    this.goToProduct.emit();
  }

}
