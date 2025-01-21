import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should add two numbers', () => {
    expect(service.calculate('1+1')).toBe(2);
  });

  it('should handle subtraction', () => {
    expect(service.calculate('5-3')).toBe(2);
  });

  it('should handle multiplication', () => {
    expect(service.calculate('2*3')).toBe(6);
  });

  it('should handle division', () => {
    expect(service.calculate('6/2')).toBe(3);
  });

  it('should throw error for invalid equations', () => {
    expect(() => service.calculate('5//2')).toThrow();
  });
});
