import { useState } from 'react';

const App = () => {
  // Stan przechowujący liczbę poszczególnych opinii
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Funkcje obsługujące kliknięcia
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Obliczenia
  const all = good + neutral + bad;  // Suma wszystkich opinii
  const average = all > 0 ? (good - bad) / all : 0;  // Średnia opinii
  const positive = all > 0 ? (good / all) * 100 : 0;  // Procent pozytywnych opinii

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive.toFixed(2)}%</p> {/* Wyświetlanie procentu pozytywnych opinii, zaokrąglone do 2 miejsc */}
    </div>
  );
};

export default App;
