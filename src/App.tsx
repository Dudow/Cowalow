import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './components/form';

import './App.css';

const App = () => (
  <div className="App">
    <ToastContainer />
    <header className="App-header">
      <Form />
    </header>
  </div>
);

export default App;
