import React from 'react';

interface ZodiacBadgeProps {
  name: string;
  symbol: string;
  dates: string;
}

const ZodiacBadge: React.FC<ZodiacBadgeProps> = ({ name, symbol, dates }) => {
  return (
    <div className="zodiac-header">
      <div className="zodiac-badge">{symbol}</div>
      <div>
        <div className="zodiac-name">{name}</div>
        <div className="zodiac-dates">{dates}</div>
      </div>
    </div>
  );
};

export default ZodiacBadge;
