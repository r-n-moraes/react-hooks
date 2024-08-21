
import React, { useState, useCallback, useMemo } from 'react';

// Componente filho que recebe uma função como prop
const ChildComponent = React.memo(({ onClick, value }) => {
  console.log("Componente filho renderizado");
  return (
    <button onClick={onClick}>
      Click me - {value}
    </button>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Exemplo de uso de useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // Exemplo de uso de useMemo
  const expensiveValue = useMemo(() => {
    console.log("Simulando o calculo pesado");
    // Simula um cálculo custoso
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} value={expensiveValue} />
      <button onClick={() => setOtherState(otherState + 1)}>
         Muda otherState
      </button>
    </div>
  );
};

export default ParentComponent;