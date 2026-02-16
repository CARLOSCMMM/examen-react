import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import EventForm from './EventForm';
function App() {
  return (
    <div>
      <h1>Eventos Andalucia</h1>
      <EventForm></EventForm>
      <EventList></EventList>
    </div>
  )
}
export default App;
