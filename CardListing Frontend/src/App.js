import React, { useState, useEffect } from 'react';
import './App.css';
import userData from './userData.json'; 

const App = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [cards, setCards] = useState([]);
  const [searching, setSearching] = useState('');

  useEffect(() => {
    setCards(userData.data);
  }, []);



  const TypeLogic = (tab) => {
    setActiveTab(tab);
    let filters = [];

  if (tab === 'Your') {
    filters = userData.data.filter((card) => card.owner_id === 1); 
  } else if (tab === 'All') {
    filters = userData.data;
  } else if (tab === 'Blocked') {
    filters = userData.data.filter((card) => card.status === 'blocked');
  }

  setCards(filters);
  };


   const SearchLogic = (event) => {
    setSearching(event.target.value);
    const searchRes = userData.data.filter((card) =>
      card.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setCards(searchRes);
  };



  return (
    
    <div className="App">
      <h1 className='header'> Card Lists </h1>
      <div className="tabs">
        <h3>Select cards to view:</h3>
        <button
          className='active' value={activeTab} onClick={() => TypeLogic('All')}>
          All Cards
        </button>
        <button
          className='active' value={activeTab} onClick={() => TypeLogic('Your')}>
          Yours Cards
        </button>
        <button
          className='active' value={activeTab}  onClick={() => TypeLogic('Blocked')}>
          Blocked Cards
        </button>
      </div>




     <h3>Displaying cards</h3>
      <div className="card-list">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card_type">{card.card_type}</div>
            <div className="card-details">
              <div className="card-name">{card.name}</div>
              <div className="budget-name">{card.budget_name}</div>
              <div className="spent">
                Spent: {card.spent.value} {card.spent.currency}
              </div>
              <div className="available-to-spend">
                Available to Spend: {card.available_to_spend.value}{' '}
                {card.available_to_spend.currency}
              </div>
              {card.card_type === 'burner' ? (
                <div className="expiry">Expiry: {card.expiry}</div>
              ) : (
                <div className="limit">Limit: {card.limit}</div>
              )}
              <div className="status">Status: {card.status}</div>
            </div>
          </div>
        ))}
      </div>




      <div className="search">
        <h4>Enter the name of the card you want to search</h4>
        <input
          type="text"
          className='searchbox'
          placeholder="Enter name"
          value={searching}
          onChange={SearchLogic}
        />
      </div>
    </div>
  );
};

export default App;


