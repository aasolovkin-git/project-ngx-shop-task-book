import {
  Component,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {

  @Input() product: IProduct = {} as IProduct;

  @Output() addToCart: EventEmitter<string> = new EventEmitter()
  @Output() goToProduct: EventEmitter<string> = new EventEmitter()

  public addToBasket() {
    this.addToCart.emit('Вы добавили товар в корзину');
  }

  public redirectTo() {
    this.goToProduct.emit('Переход на компонент товара');
  }
}
