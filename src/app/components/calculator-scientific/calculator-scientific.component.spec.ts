import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorScientificComponent } from './calculator-scientific.component';

describe('CalculatorScientificComponent', () => {
  let component: CalculatorScientificComponent;
  let fixture: ComponentFixture<CalculatorScientificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorScientificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorScientificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
