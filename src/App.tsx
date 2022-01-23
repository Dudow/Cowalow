import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './assets/logo.png';
import Form from './components/form';
import Image from './components/image';

import './App.css';

const App = () => (
  <div className="App">
    <ToastContainer />
    <header className="App-header">
      <Image src={logo} margin="0 0 30px 0" />
      <Form />
    </header>
  </div>
);

export default App;
