import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(expression: string): number {
    try {
      const result = evaluate(expression);
      if (isNaN(result)) {
        throw new Error('Invalid equation');
      }
      return result;
    } catch (error) {
      throw new Error('Invalid equation');
    }
  }
}
