import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() label = '';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'secondary';
  @Input() active = false;
  @Input() disabled = false;

  @Output() pressed = new EventEmitter<void>();
  handleClick() {
    if (!this.disabled) this.pressed.emit();
  }
}
