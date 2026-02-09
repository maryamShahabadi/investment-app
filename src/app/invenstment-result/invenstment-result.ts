import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject} from '@angular/core';
import { InventmentService } from '../inventment.service';

@Component({
  selector: 'app-invenstment-result',
  imports: [CurrencyPipe],
  templateUrl: './invenstment-result.html',
  styleUrl: './invenstment-result.css',
})
export class InvenstmentResult {

investmentService = inject(InventmentService);

results = computed(()=>this.investmentService.resultData());
// result=this.investmentService.resultData.asReadonly()

}
