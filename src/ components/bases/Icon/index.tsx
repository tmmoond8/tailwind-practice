import React from 'react';
import cx from 'classnames';
import * as icons from './icons';

export type IconKey = keyof typeof icons;
export type Props = {
  /** icon name (ex: hambug) */
  icon: IconKey;
  /** icon color */
  color?: string;
  size?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export default function Icon(props: Props): JSX.Element {
  const { icon, color = 'white', className, size = '1em', onClick } = props;
  const sizeStyles = useSize(size);
  // const customStyle = styles.customStyle({
  //   color,
  //   cursor: typeof onClick === 'function' ? 'pointer' : 'inherit',
  // });
  const handleClick = (e: React.MouseEvent) => {
    if (typeof onClick === 'function') onClick(e);
  };

  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      // css={[styles.base, customStyle, styles.size(size)]}
      className={cx('Icon', className, icon, sizeStyles)}
      onClick={handleClick}
    />
  );
}

function useSize(size: number | string) {
  return `w-${size} h-auto`;
}
