import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[focus]'
})

export class FocusDirective {
  el: ElementRef
  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('document:keydown.Enter', ['$event']) onKeydownHandler(event) {
    if (event.srcElement.nextElementSibling) {
        event.srcElement.nextElementSibling.focus();
    }
    else {
      console.log('close keyboard');
    }
    return;
  }
}