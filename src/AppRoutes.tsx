// Core Imports
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { playCircle, radio, library, search, sparkles, home } from 'ionicons/icons';

// style Imports

import AnimeDetailScreen from './screens/AnimeDetailScreen';
import TodayScreen from './screens/TodayScreen';
import HomeScreen from './screens/HomeScreen';
import ChatBotScreen from './screens/ChatBotScreen';
import SearchScreen from './screens/SearchScreen';
import AnimeEpisode from './screens/AnimeEpisode';
import './AppRoute.scss'


function AppRoute() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/app/bar">
          
          </Route>
          <Route path="/animes/:id"  component={AnimeEpisode}/>
          <Route path="/anime/:id"  component={AnimeDetailScreen} exact />
          <Route path="/todays" render={() => <TodayScreen />} exact={true} />
          <Route path="/app/bar" render={() => <HomeScreen />} exact={true} />
          <Route path="/chatbot" render={() => <ChatBotScreen />} exact={true} />
          {/* <Route path="/search" render={() => <SearchScreen />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="glass_tab_bar">
          <IonTabButton tab="todays" href="/todays">
            <IonIcon icon={sparkles} />
            <IonLabel>Todays</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/app/bar">
            <IonIcon icon={home} size='30'/>
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/chatbot">
            <IonIcon icon={library} />
            <IonLabel>Chat bot</IonLabel>
          </IonTabButton>

          {/* <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  );
}

export default AppRoute;
