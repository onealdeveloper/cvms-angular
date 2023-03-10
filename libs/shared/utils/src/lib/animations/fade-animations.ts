import {
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export function fadeIn(selector: string, duration = '400ms ease-out') {
  return [
    transition(selector, [
      query(
        selector,
        [
          style({ opacity: 0, transform: 'translateY(-5px)' }),
          stagger('250ms', [
            animate(
              duration,
              style({
                opacity: 1,
                transform: 'translateY(0px)',
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ];
}

export function fadeOut(selector = ':leave', duration = '200ms') {
  return [
    transition('* => *', [
      query(
        selector,
        [
          style({ opacity: 1 }),
          stagger('50ms', [
            animate(
              duration,
              style({
                opacity: 0,
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ];
}
