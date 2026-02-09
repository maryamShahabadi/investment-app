import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn:'root'})
export class InventmentService{
  resultData=signal<{
        year:number,
        interest:number,
        valueEndOfYear:number,
        annualInvestment:number,
        totalIntrest:number,
        totalAmountInvested:number
      }[] | undefined>(undefined)

 calculateInvestmentResults(data:InvestmentInput){
    const {initialInvestment,annualInvestment,duration,expectedReturn} =data;
    const annualData=[];
    let investmentValue=initialInvestment;

    for(let i=0;i<duration;i++){
      const year=i+1;
      const intrestEarnedInYear = investmentValue *(expectedReturn/100);
      investmentValue+=intrestEarnedInYear + annualInvestment;
      const totalIntrest=investmentValue-annualInvestment*year -initialInvestment;
      annualData.push({
        year:year,
        interest:intrestEarnedInYear,
        valueEndOfYear:investmentValue,
        annualInvestment:annualInvestment,
        totalIntrest:totalIntrest,
        totalAmountInvested:initialInvestment+annualInvestment*year
      });
    }

    // this.resultsData= annualData;
    //use signal
    this.resultData.set(annualData)


  }
}
