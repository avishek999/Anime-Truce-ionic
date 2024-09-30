import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTitle,
  IonToolbar,
  IonTabButton,
  IonLabel,
  IonTabs
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import Tab1 from "./GeneralSettingScreen";
import Tab2 from "./UserSettingScreen";
import { cog, person, triangle } from "ionicons/icons";

const SettingScreen: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom" translucent={true} >
        <IonTabButton tab="tab1"  href= "/app/settings/tab1">
            <IonIcon icon={cog}/>
            <IonLabel>General Settings</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href= "/app/settings/tab2">
            <IonIcon icon={person}/>
            <IonLabel>User Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path="/app/settings/tab1" component={Tab1} />
        <Route path="/app/settings/tab2" component={Tab2} />

        <Route exact path="/app/settings">
          <Redirect to="/app/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default SettingScreen;
