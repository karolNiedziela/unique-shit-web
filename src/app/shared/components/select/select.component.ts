import { NgForOf, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

export type SelectOptionType = {
  id: Number;
  value: string;
};

@Component({
  selector: 'app-select',
  imports: [MatSelectModule, NgForOf, NgIf],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  standalone: true,
})
export class SelectComponent {
  @Input() label: string;
  @Input() options: SelectOptionType[];
  @Input() selectedValue: string;
  @Input() hidden: boolean = false;
  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(event: any): void {
    this.selectionChange.emit(event.value);
  }
}
