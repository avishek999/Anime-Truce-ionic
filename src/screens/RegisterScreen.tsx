import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonImg,
  IonIcon,
  IonBackButton,
  useIonRouter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  checkmarkDoneCircle,
  checkmarkDoneOutline,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import React, { useState } from "react";

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State to track email input
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const router = useIonRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page refresh on form submission
    console.log("name:", name, "email:", email, "password:", password); // Logs the current email input value
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton fill="clear" slot="start">
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>Anime Truce</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
           <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
            <IonImg src="images/registerScreenImage/registerScreenImage.webp" alt="Logo.png"></IonImg>
            </IonCol>
           </IonRow>
           <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
            <IonCard>
          <IonCardContent className="login">
            <form onSubmit={handleRegister}>
              <IonInput
                fill="outline"
                labelPlacement="floating"
                label="name"
                type="text"
                value={name}
                onIonChange={(e: CustomEvent) => setName(e.detail.value!)}
                placeholder="Enter Your name"
              />

              <IonInput
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Email"
                type="email"
                value={email}
                onIonChange={(e: CustomEvent) => setEmail(e.detail.value!)}
                placeholder="Enter email"
              />
              <IonInput
                className="ion-margin-top"
                fill="outline"
                labelPlacement="floating"
                label="Password"
                type="password"
                value={password}
                onIonChange={(e: CustomEvent) => setPassword(e.detail.value!)}
                placeholder="Enter email"
              />
              <IonButton
                className="ion-margin-top"
                expand="block"
                type="submit"
                color={'dark'}
                shape={'round'}
              >
                Create Account
                <IonIcon icon={checkmarkDoneOutline}></IonIcon>
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
            </IonCol>
           </IonRow>
        </IonGrid>
       
       
      </IonContent>
    </IonPage>
  );
};

export default RegisterScreen;
