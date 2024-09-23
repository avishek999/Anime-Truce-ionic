import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Login from './screens/LoginScreen';
import Register from './pages/Register';
import Menu from './pages/menu/Menu';
import './components/styles.css'
import { cog, person } from 'ionicons/icons';
import AniDetails from './pages/AniDetails';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
   
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
         <Login />
        </Route>
       <Route component={Register} path="/register" exact />
       <Route component={Menu} path="/app"  />
     <Route component={AniDetails} path="/anime/:id" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
