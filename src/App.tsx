import React from 'react';
import DetailsForm from './component/DetailsForm';
import Table from './component/Table';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Grid container direction="row" spacing={1}>
            <DetailsForm />
            <Table />
          </Grid>
      </div>
    );
  }
}

export default App;
