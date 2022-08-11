import React from 'react';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';

import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/flicking-plugins/dist/pagination.css';

interface Props {
  slides?: React.ReactNode[];
}

const plugins = [
  new Pagination({
    type: 'bullet',
  }),
];

export default function SlidingBanner({ slides = [] }: Props) {
  return (
    <Flicking
      horizontal
      plugins={plugins}
      preventClickOnDrag
      moveType="snap"
      deceleration={1}
    >
      {slides.map((slide, i) => (
        <div key={i} className="w-full h-132 overflow-hidden">
          {slide}
        </div>
      ))}
      <ViewportSlot>
        <div className="sliding-banner flicking-pagination"></div>
      </ViewportSlot>
    </Flicking>
  );
}
