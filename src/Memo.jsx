import React, { useMemo } from 'react';

function Memo() {
  const [countOne, setcountOne] = React.useState(5);
  const [countTwo, setcountTwo] = React.useState(50);

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={() => setcountOne(countOne + 1)}>
        Increment One - {countOne}
        {isEven ? 'Even' : 'Odd'}
      </button>

      <button onClick={() => setcountTwo(countTwo + 1)}>
        Increment Two - {countTwo}
      </button>
    </div>
  );
}

export default Memo;
