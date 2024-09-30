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
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";
import "./Login.css";
import { Router } from "react-router";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>(""); // State to track email input
  const [password, setPassword] = useState<string>(""); // State to track email input
  const [intro, setIntro] = useState(false);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("Stored Value (should be 'true' or 'false'):", seen.value); // Log the value
      setIntro(seen.value === "true");
    };
    checkStorage();
  }, []);

  const router = useIonRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page refresh on form submission
    console.log("email:", email, "password:", password);
    await present("Logging in...");
    setTimeout(() => {
      dismiss();
      router.push("/home", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    setIntro(true);
    await Preferences.set({ key: INTRO_KEY, value: "true" }); // Save value
  };

  return (
    <>
      {!intro ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Anime Truce</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <IonImg
                      src="/images/loginScreenImage/logInscreenImage.webp"
                      alt="Logo.png"
                    ></IonImg>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent className="login">
                      <form onSubmit={handleLogin}>
                        <IonInput
                          fill="outline"
                          labelPlacement="floating"
                          label="Email"
                          type="email"
                          value={email}
                          onIonChange={(e: CustomEvent) =>
                            setEmail(e.detail.value!)
                          }
                          placeholder="Enter email"
                        />
                        <IonInput
                          className="ion-margin-top"
                          fill="outline"
                          labelPlacement="floating"
                          label="Password"
                          type="password"
                          value={password}
                          onIonChange={(e: CustomEvent) =>
                            setPassword(e.detail.value!)
                          }
                          placeholder="Enter email"
                        />
                        <IonButton
                          className="ion-margin-top"
                          expand="block"
                          type="submit"
                          color={"light"}
                          shape={"round"}
                        >
                          Login
                          <IonIcon icon={logInOutline} />
                        </IonButton>
                        <IonButton
                          color={"dark"}
                          className="ion-margin-top"
                          expand="block"
                          routerLink="/register"
                          shape={"round"}
                        >
                          Create Account
                          <IonIcon icon={personCircleOutline}></IonIcon>
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
