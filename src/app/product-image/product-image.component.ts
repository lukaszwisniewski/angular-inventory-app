import { Component, Input, HostBinding } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html'
})
export class ProductImageComponent {

  @Input() product: Product[];
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {  }
}
