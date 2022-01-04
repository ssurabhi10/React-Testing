import { useState } from 'react';
import { Container } from 'react-bootstrap';

import OrderEntry from './pages/entry/OrderEntry';
import OrderConfirmation from './pages/confirmation/orderConfirmation';
import OrderSummary from './pages/summary/OrderSummary';

import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  // orderPhase needs to be 'inProgress', 'review', 'completed'
  const [orderPhase, setOrderPhase] = useState('inProgress');

  let Component = OrderEntry; // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
    default:
  }
  return (
    <OrderDetailsProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailsProvider>
  );
}

export default App;
