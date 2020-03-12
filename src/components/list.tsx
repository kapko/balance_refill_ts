import React, {useEffect} from 'react';
import {ThunkDispatch} from "redux-thunk";
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
// local files
import {initProviders} from "../actions/providers.action";
import {listStyles} from '../styles/list.styles';
import {IList} from "../common/types";
import {data} from "../data";
import {AppState} from "../store";
import {getProvider} from "../actions/provider.action";
import LoaderComponent from './loader';
import ItemComponent from "./item";
import {
  IListMapDispatchToProps,
  IListMapStateToProps,
  TListProps,
} from "../common/types/list.types";
import TextComponent from "./text";

function ListComponent(props: TListProps): JSX.Element {
  const initialData: IList[] = data;
  const {providers} = props;
  const classes = listStyles();

  function fetchData(): void {
    props.initProviders(initialData);
  }

  function getProvider(list: IList): void {
    props.getProvider(list);
    props.showListEvent(false);
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 1500);
    return () => clearTimeout(timer);
  }, []);

  return <Grid item lg={12}>
    <TextComponent tag="h3" align="center" text="Refill balance"  />
    <div className={classes.demo}>

    <div className="loader"><LoaderComponent showLoader={!providers.fetched}/></div>

    <List className={classes.root}>
      {providers.items.map(item => <ItemComponent key={item.title} getProvider={getProvider} item={item}/>)}
    </List>
    </div>
  </Grid>
}

const mapStateToProps = (state: AppState): IListMapStateToProps => ({
  providers: state.providers
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, unknown, any>): IListMapDispatchToProps => ({
  getProvider: (list: IList) => dispatch(getProvider(list)),
  initProviders: (lists: IList[]) => dispatch(initProviders(lists))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
