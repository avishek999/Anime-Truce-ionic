import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { playCircle, radio, library, search, sparkles, home } from 'ionicons/icons';
import List from '../pages/List';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import './BottomBar.css';
import AniDetails from '../pages/AniDetails';

function Example() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/app/bar">
            <Redirect to="/home" />
          </Route>
          <Route path="/anime/:id" component={AniDetails} exact />
          <Route path="/todays" render={() => <Tab1 />} exact={true} />
          <Route path="/home" render={() => <List />} exact={true} />
          <Route path="/library" render={() => <Tab2 />} exact={true} />
          <Route path="/search" render={() => <Tab2 />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="glass-tab-bar">
          <IonTabButton tab="todays" href="/todays">
            <IonIcon icon={sparkles} />
            <IonLabel>Todays</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  );
}

export default Example;
