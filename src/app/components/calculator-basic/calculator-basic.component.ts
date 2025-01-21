// calculator-basic.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-basic',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator-basic.component.html',
  styleUrls: ['./calculator-basic.component.scss'],
})
export class CalculatorBasicComponent {
  input = '';
  buttons = [
    '7',
    '8',
    '9',
    '+',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '*',
    '0',
    '/',
  ];

  constructor(private calculatorService: CalculatorService) {}

  append(value: string) {
    // Prevent consecutive operators
    const lastChar = this.input.slice(-1);
    if (
      ['+', '-', '*', '/'].includes(lastChar) &&
      ['+', '-', '*', '/'].includes(value)
    ) {
      return;
    }
    this.input += value;
  }

  clear() {
    this.input = '';
  }

  calculate() {
    try {
      // Use CalculatorService to evaluate the expression
      this.input = this.calculatorService.calculate(this.input).toString();
    } catch (error) {
      alert('Invalid expression');
      this.clear();
    }
  }
}
