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
  state('close', style({
    transform: 'rotate(0)'
  })),
  state('active', style({
    transform: 'rotate(180deg)'
  })),
  transition('close => active', animate('400ms ease-out')),
  transition('active => close', animate('400ms ease-in'))
]);

export const arrowListAnimation = trigger('arrowListAnimation', [
  state('close', style({
    height: 0,
    marginTop: 0
  })),
  state('active', style({
    height: '210px',
    marginTop: '15px',
    overflowY: 'hidden'
  })),
  transition('close => active', [
    animate('0.3s')]),
  transition('active => close', [
    animate('0.3s')]),
]);

export const sexArrowListAnimation = trigger('sexArrowListAnimation', [
  state('close', style({
    height: 0,
    marginTop: 0
  })),
  state('active', style({
    height: '120px',
    marginTop: '15px',
    overflowY: 'hidden'
  })),
  transition('close => active', [
    animate('0.3s')]),
  transition('active => close', [
    animate('0.3s')]),
]);

export const svgOptionButton = trigger('svgOptionButtonAnimation', [
  state('default', style({
    opacity: 0
  })),
  state('active', style({
    opacity: 1
  })),
  transition('default <=> active', [
    animate('0.1s')]),
]);

export const leftMenu = trigger('leftMenuAnimation', [
  state('default', style({
    left: '-130%'
  })),
  state('active', style({
    left: 0
  })),
  transition('default <=> active', [
    animate('0.4s')]),
]);
