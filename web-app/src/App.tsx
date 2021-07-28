import React, { useState } from 'react';

import 'styles/app.css';
import Card from './Card/Card';

const App = (props: any) =>  {
  const [count, setCount] = useState(0)

  return (
    <div className="backdrop-grayscale">
        <h1 className="text-left font-bold text-4xl">Movies</h1>
        <Card className="text-blue-500-">
          <h1>Hello</h1>
        </Card>
    </div>
  )
};

export default App;
