import React from 'react';
import { Bases } from 'src/ components';

interface Props {
  dummy?: any;
}

export default function Search({ dummy }: Props) {
  return (
    <div className="flex flex-row rounded-2xl border-2 border-white border-solid flex-1 h-9 ml-8 mr-12 pl-3">
      <Bases.Icon icon="search" size="4" />
      {dummy}
      <input
        type="text"
        className="flex-1 bg-transparent outline-none px-2 text-white"
      />
      <Bases.Icon className="mr-8" icon="close" size="4" />
    </div>
  );
}
