import React from 'react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

const ProsCons: React.FC<ProsConsProps> = ({ pros, cons }) => {
  return (
    <div className="pros-cons-wrapper">
      <div className="pros-cons-card pros">
        <div className="pros-cons-title pros">✓ Pros</div>
        <ul>
          {pros.map((pro, idx) => (
            <li key={idx}>{pro}</li>
          ))}
        </ul>
      </div>

      <div className="pros-cons-card cons">
        <div className="pros-cons-title cons">✗ Cons</div>
        <ul>
          {cons.map((con, idx) => (
            <li key={idx}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProsCons;
