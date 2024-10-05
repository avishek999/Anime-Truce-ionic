// Core Imports
import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import {
  playCircle,
  radio,
  library,
  search,
  sparkles,
  home,
} from "ionicons/icons";
import { RiRobot2Fill } from "react-icons/ri";
// Style Imports
import AnimeDetailScreen from "./screens/AnimeDetailScreen";
import TodayScreen from "./screens/TodayScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatBotScreen from "./screens/ChatBotScreen";
import SearchScreen from "./screens/SearchScreen";
import AnimeEpisode from "./screens/AnimeEpisode";
import "./AppRoute.scss";

function AppRoute() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Specific Routes */}
          <Route path="/animes/:id" component={AnimeEpisode} exact />
          <Route path="/anime/:id" component={AnimeDetailScreen} exact />
          <Route path="/todays" component={TodayScreen} exact />
          <Route path="/chatbot" component={ChatBotScreen} exact />
          
          {/* Default redirect route */}
          <Route path="/app/bar" render={() => <HomeScreen />} exact />
          
          {/* Redirect to default tab */}
          <Redirect exact from="/app" to="/app/bar" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" className="glass_tab_bar">
          <IonTabButton tab="todays" href="/todays">
            <IonIcon icon={sparkles} />
            <IonLabel>Todays</IonLabel>
          </IonTabButton>

          <IonTabButton tab="home" href="/app/bar">
            <IonIcon icon={home} size="30" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/chatbot">
            <RiRobot2Fill size={30} />
            <IonLabel>Chat bot</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default AppRoute;
