import React from 'react';
import Logo from './logo.svg';
import Search from './Search';
import MenuGroup from './MenuGroup';
import HeaderButton from './HeaderButton';

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  return (
    <header
      className="flex flex-row h-17 items-center px-9"
      style={{
        background:
          'linear-gradient(135.09deg, #0043A7 0%, #0072B7 44.23%, #00E9E1 99.85%)',
      }}
    >
      <Logo />
      <Search />
      <MenuGroup
        menu="Explore"
        subMenus={[
          {
            title: 'aaaa',
            action: () => {
              console.log('aaaa');
            },
          },
          {
            title: 'bbb',
            action: () => {
              console.log('bbb');
            },
          },
        ]}
      />
      <ul className="flex flex-row">
        <MenuGroup menu="Drop" />
        <MenuGroup menu="Stats" />
        <MenuGroup menu="Community" />
        <MenuGroup menu="Service" />
        <MenuGroup
          menu="Language"
          subMenus={[
            {
              title: 'aaaa',
              action: () => {
                console.log('aaaa');
              },
            },
            {
              title: 'bbb',
              action: () => {
                console.log('bbb');
              },
            },
          ]}
        />
      </ul>
      <div className="ml-12 flex flex-row">
        <HeaderButton src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1648639192/noticon/h5eflxp7kdv7vyrhfbny.png" />
        <HeaderButton src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679125/noticon/itvs5d1d3vzplxuysdtt.png" />
      </div>
    </header>
  );
}
