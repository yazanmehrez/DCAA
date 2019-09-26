import {AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutSideElementDirective implements AfterViewInit, OnDestroy {
  @Output('clickOutside') clickOutside: EventEmitter<void> = new EventEmitter();
  squareMatrix: {
    x1: number,
    y1: number,
    x2: number,
    y2: number
  };
  sub: Subscription;

  constructor(private _elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    /**
     * Populate current square x,y position.
     */
    this.populateMatrix();
    // Timeout is here to ignore first click. Not right way but do the job.
    setTimeout(() => {
      this.sub = fromEvent(window, 'click').subscribe((e: MouseEvent) => {
        if (!this.checkIfClickOnSquare(e.clientX, e.clientY)) {
          this.clickOutside.emit();
        }
      });
    }, 100);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private populateMatrix() {
    const {x, y, width, height} = this._elementRef.nativeElement.getBoundingClientRect();

    this.squareMatrix = {
      x1: x,
      y1: y,
      x2: x + width,
      y2: y + height
    };
  }

  private checkIfClickOnSquare(currentX, currentY): boolean {
    return (
      currentX > this.squareMatrix.x1 &&
      currentX < this.squareMatrix.x2 &&
      currentY > this.squareMatrix.y1 &&
      currentY < this.squareMatrix.y2
    );
  }
}
