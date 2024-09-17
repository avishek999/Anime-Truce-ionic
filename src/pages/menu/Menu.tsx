import {
    IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { home, homeOutline, list, logOutOutline, settings } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "../List";
import Setting from "../Setting";
import { Icon } from "ionicons/dist/types/components/icon/icon";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/list", Icon:home },
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
        <Route exact path="/app/list" component={List} />
        <Route path="/app/settings" component={Setting} />
        <Route exact path="/app">
          <Redirect to="/app/list" />
        </Route>
      </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
