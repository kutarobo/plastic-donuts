import React from 'react';

interface IHeader {
  title?: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <>
      <title>{title}plastic donuts</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  );
};

export default Header;
