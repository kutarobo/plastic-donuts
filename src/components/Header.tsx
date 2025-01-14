import React from 'react';

interface IHeader {
  title?: string;
}

const Header = ({ title }: IHeader) => {
  const subTitle = title ? `:: ${title}` : '';
  return (
    <>
      <title>Plastic Donuts {subTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default Header;
