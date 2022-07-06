import {
  trigger,
  state,
  transition, style, animate
} from "@angular/animations";

export const hoverTrigger = trigger('hoverTrigger', [
  state('start', style({})),
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

export const arrowRotation = trigger('arrowRotation', [
  state('default', style({
    transform: 'rotate(0)'
  })),
  state('rotated', style({
    transform: 'rotate(180deg)'
  })),
  transition('default => rotated', animate('400ms ease-out')),
  transition('rotated => default', animate('400ms ease-in'))
]);

export const radioButtons = trigger('radioButtons', [
  state('close', style({
    opacity: 0,
    position: 'relative',
    lineHeight: '0px'
  })),
  state('active', style({
    position: 'relative',
    lineHeight: '50px'
  })),
  transition('close => active', [
    animate('0.3s')]),
  // transition('close => active', [
  //   style({
  //     opacity: 1
  //   }),
  //   animate('1s')]),
  transition('active => close', [
    animate('0.3s')]),
]);
