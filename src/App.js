import React from 'react';
import { Route, Switch } from "react-router-dom";
import DifferentView from './views/DifferentView';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import AbyssView from './views/battle/AbyssView';
import AutomatonTowerView from './views/battle/AutomatonTowerView';
import HallOfTrialsView from './views/battle/HallOfTrialsView';
import HuntView from './views/battle/HuntView';
import LabyrinthView from './views/battle/LabyrinthView';
import SideStoryView from './views/battle/SideStoryView';
import SpiritAltarView from './views/battle/SpiritAltarView';

function App() {
  return (
    <>
    <Sidebar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/abyss" component={AbyssView}/>
      <Route exact path="/automaton-tower" component={AutomatonTowerView}/>
      <Route exact path="/hall-of-trials" component={HallOfTrialsView}/>
      <Route exact path="/hunt" component={HuntView}/>
      <Route exact path="/labyrinth" component={LabyrinthView}/>
      <Route exact path="/side-story" component={SideStoryView}/>
      <Route exact path="/spirit-altar" component={SpiritAltarView}/>
      
    </Switch>
    </>
  );
}

export default App;
