import React from 'react';

const CoinCard = ({ coin }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '220px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '16px',
    backgroundColor: '#fff'
  };

  const imageStyle = {
    width: '64px',
    height: '64px',
    objectFit: 'cover',
    marginBottom: '12px'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    margin: '8px 0'
  };

  const infoStyle = {
    fontSize: '0.9rem',
    margin: '4px 0'
  };

  return (
    <div style={cardStyle}>
      <img src={coin.image} alt={coin.name} style={imageStyle} />
      <h3 style={titleStyle}>{coin.name}</h3>
      <p style={infoStyle}>Price: ${coin.current_price}</p>
      <p style={infoStyle}>Market Cap Rank: {coin.market_cap_rank}</p>
    </div>
  );
};

export default CoinCard;
