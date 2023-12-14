
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar  title = 'TextUtils' aboutText = 'About textUtils'  />
      {/* <Navbar /> */}

      <div className="container my-3">
        {/* <TextForm heading = 'Convert to upperCase or lowerCase'/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
