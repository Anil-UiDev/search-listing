import Navigation from './containers/NavigationContainer'
import './App.css';
import Content from './components/content/Content';

function App() {
  return (
    <>
    <h1>This is the React App for Task Manager</h1>
    <Navigation />
    <Content />
    </>
  );
}

export default App;
