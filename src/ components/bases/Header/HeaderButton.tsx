import React from 'react';

interface Props {
  src: string;
}

export default function HeaderButton({ src }: Props) {
  return (
    <div className="relative w-9 h-9 rounded-full ml-2 ">
      <img src={src} className="w-full h-full" />
    </div>
  );
}
