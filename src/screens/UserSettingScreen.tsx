import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const UserSettingScreen: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
                    <IonTitle>User Setting</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </IonPage>
    );
};

export default UserSettingScreen;