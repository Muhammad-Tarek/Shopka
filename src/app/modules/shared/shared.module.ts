import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { AddToCardComponent } from './components/add-to-card/add-to-card.component';

@NgModule({
  declarations: [EmptyStateComponent, AddToCardComponent],
  imports: [CommonModule, ReactiveFormsModule, BarRatingModule],
  exports: [
    ReactiveFormsModule,
    BarRatingModule,
    EmptyStateComponent,
    AddToCardComponent,
  ],
})
export class SharedModule {}
