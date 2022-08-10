import React from 'react';

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  return (
    <header
      className="flex flex-row h-17 items-center"
      style={{
        background:
          'linear-gradient(135.09deg, #0043A7 0%, #0072B7 44.23%, #00E9E1 99.85%)',
      }}
    >
      {title ?? 'title'}
    </header>
  );
}
