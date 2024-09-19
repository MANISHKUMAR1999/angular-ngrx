import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter/counter.component';
import { CommonModule } from '@angular/common';
import { CounterButtonsComponent } from '../counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from '../counter/counter-output/counter-output.component';
import { CustomCounterInputComponent } from '../counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
];
@NgModule({
  declarations: [
    CounterButtonsComponent,

    CounterOutputComponent,
    CounterComponent,
    CustomCounterInputComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class CounterModule {}
