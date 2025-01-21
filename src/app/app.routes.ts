import { Routes } from '@angular/router';
import { CalculatorBasicComponent } from './components/calculator-basic/calculator-basic.component';
import { CalculatorScientificComponent } from './components/calculator-scientific/calculator-scientific.component';

export const routes: Routes = [
  { path: 'basic', component: CalculatorBasicComponent },
  { path: 'scientific', component: CalculatorScientificComponent },
  { path: '', redirectTo: 'basic', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'basic' }, // Wildcard route
];
