import {
    IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { cog, home, homeOutline, list, logOutOutline, person, settings } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "../HomeScreen";
import Setting from "../SettingScreen";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import HomeScreen from "../HomeScreen";
import SettingScreen from "../SettingScreen";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/bar", Icon:home },
    { name: "Setting", url: "/app/settings", Icon: settings }
  ];

  return (
    <IonPage>
        <IonSplitPane contentId="menu">
      <IonMenu contentId="menu">
        <IonHeader>
          <IonToolbar color={"dark"}>
            <IonTitle>Anime Truce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {paths.map((items, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={items.url} routerDirection="none" >
              <IonIcon slot="start" icon={items.Icon} />{items.name}</IonItem>
              
            </IonMenuToggle>
          ))}
           <IonMenuToggle  autoHide={false}>
              <IonButton color={'medium'} expand="full"  routerLink="/" routerDirection="root" >
              <IonIcon slot="start" icon={logOutOutline} />Logout</IonButton>
              
            </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="menu">
        <Route exact path="/app/bar" component={HomeScreen} />
        <Route path="/app/settings" component={SettingScreen} />
        <Route exact path="/app">
          <Redirect to="/app/bar" />
        </Route>
      </IonRouterOutlet>
      </IonSplitPane>
      
    </IonPage>
  );
};

export default Menu;
