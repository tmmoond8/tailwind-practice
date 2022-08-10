import React from 'react';
import { Bases } from 'src/ components';

interface Props {
  menu: string;
  subMenus?: { title: string; action: () => void }[];
}

export default function MenuGroup({ menu, subMenus }: Props) {
  return (
    <div className="flex flex-row text-white ml-12">
      {menu}
      {subMenus && <Bases.Icon className="ml-2 mt-1" icon="chevronDown" />}
    </div>
  );
}
