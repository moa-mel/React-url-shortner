import { Grid } from '@mui/material';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <Grid 
    className="App" 
    container direction='column' 
    justify='center' 
    alignItems="center">
       <h1>Url Shortner</h1>
       <Search/>
    </Grid>
  );
}

export default App;
