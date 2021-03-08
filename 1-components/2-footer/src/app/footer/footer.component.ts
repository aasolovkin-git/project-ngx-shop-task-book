import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {

  @Input() author: string = "Angular Course";
  @Input() currentYear: number = (new Date().getFullYear());

}
