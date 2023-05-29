import { Component, HostListener, Input, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scroll-animation',
  template: `
    <div [@scrollAnimation]="animationState" class="animated-element">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hide', style({ opacity: 0, transform: 'translateY(100px)' })),
      transition('show <=> hide', animate('500ms ease-in')),
    ]),
  ],
})
export class ScrollAnimationComponent {
  @Input() offset = 300; // Offset from bottom of viewport for triggering the animation
  animationState = 'hide';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const scrollOffset = window.pageYOffset;
    const elementOffsetTop = this.elementRef.nativeElement.getBoundingClientRect().top || 0;

    if (scrollOffset > elementOffsetTop - windowHeight + this.offset) {
      this.animationState = 'show';
    } else {
      this.animationState = 'hide';
    }
  }

  constructor(private elementRef: ElementRef) {}
}