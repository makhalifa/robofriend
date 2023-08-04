import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cards = robots.map((robot, i) => {
    return <Card key={i} robot={robot} />;
  });

  return <div>{cards}</div>;
};

export default CardList;
