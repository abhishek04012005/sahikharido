import React from 'react';

interface ComparisonTableData {
  watch: string;
  zodiac: string;
  price: string;
  rating: number;
  battery: string;
  bestFeature: string;
}

interface ComparisonTableProps {
  data: ComparisonTableData[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="star">
        {i < Math.floor(rating) ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Watch Model</th>
          <th>Best For Zodiac</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Battery Life</th>
          <th>Best Feature</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.watch}</td>
            <td className="table-zodiac">{row.zodiac}</td>
            <td>{row.price}</td>
            <td>
              <div className="table-rating">{renderStars(row.rating)}</div>
            </td>
            <td>{row.battery}</td>
            <td>{row.bestFeature}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
