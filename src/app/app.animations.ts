import {
  trigger,
  state,
  transition, style, animate
} from "@angular/animations";

export const hoverTrigger = trigger('hoverTrigger', [
  state('start', style({
  })),
  state('active', style({
    background: '#eeeeee'
  })),
]);

export const divTrigger = trigger('divTrigger', [
  state('show', style({
    opacity: 1
  })),
  transition('void => show', [
    style({
      opacity: 0
    }),
    animate(300,
      style({
        opacity: 1
      }))
  ])
]);
