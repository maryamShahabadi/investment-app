import { Component, inject,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InventmentService } from '../inventment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})

export class UserInput {

  entredInitialInvestment=signal('0');
  entredAnnualInvestment=signal('0');
  enterdExpectedReturn=signal('5');
  entredDuration=signal('10');

investmentService = inject(InventmentService);


onSubmit(){
this.investmentService.calculateInvestmentResults(
  {
    initialInvestment:+this.entredInitialInvestment(),
    duration:+this.entredDuration(),
    expectedReturn:+this.enterdExpectedReturn(),
    annualInvestment:+this.entredAnnualInvestment()
  })

  // set defualt
  this.entredInitialInvestment.set('0');
  this.entredAnnualInvestment.set('0');
  this.enterdExpectedReturn.set('5');
  this.entredDuration.set('10')
}
}
