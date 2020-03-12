import React from 'react';
import Container from '@material-ui/core/Container';
// local files
import './App.css';
import ListComponent from "./components/list";
import RefillComponent from "./components/refill";

export default function App(): JSX.Element {
  const [showList, setShowList] = React.useState<boolean>(true);
  const showListEvent = (val: boolean) => setShowList(val);

  return <Container maxWidth="sm">
    {showList ? <ListComponent showListEvent={showListEvent} />
      : <RefillComponent showListEvent={showListEvent} />}
  </Container>;
}
