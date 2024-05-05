import './App.css';
import StarRating from './components/startrating/StarRating';


function App() {
  return (
    <div className="App">
      <StarRating limit = {15} initialRating = {10}/>
    </div>
  );
}

export default App;
