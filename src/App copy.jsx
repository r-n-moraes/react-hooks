import React, { useState } from 'react';

// Componente filho que recebe uma função como prop
const ChildComponent = ({ onClick, value }) => {
  console.log("Componente filho renderizado");
  return (
    <button onClick={onClick}>
      Click me - {value}
    </button>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Sem useCallback, a função é recriada a cada renderização
  const handleClick = () => {
    setCount(count + 1);
  };

  // Sem useMemo, o cálculo é refeito a cada renderização
  const expensiveValue = () => {
    console.log("Simulando o calculo pesado");
    // Simula um cálculo custoso
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} value={expensiveValue()} />
      <button onClick={() => setOtherState(otherState + 1)}>
        Muda otherState
      </button>
    </div>
  );
};

export default ParentComponent;
