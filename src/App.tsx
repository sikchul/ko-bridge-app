import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CategoryInfo from '@pages/category/CategoryInfo';
import CategoryList from '@pages/category/CategoryList';
import CommunityList from '@pages/CoummunityList';
import DevcoopVideoList from '@pages/DevcoopVideoList';
import HomeBase from '@pages/HomeBase';
import { ROUTE } from '@shared/constants/route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Redirect, Route } from 'react-router-dom';

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
import './theme/variables.scss';

setupIonicReact();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path={ROUTE.ROOT.path} render={() => <Redirect to={ROUTE.HOME.path} />} />
            <Route exact path={ROUTE.HOME.path} component={HomeBase} />
            <Route exact path={ROUTE.VIDEOS.path} component={DevcoopVideoList} />
            <Route exact path={ROUTE.COMMUNITIES.path} component={CommunityList} />
            <Route exact path={ROUTE.CATEGORIES.path} component={CategoryList} />
            <Route exact path={ROUTE.CATEGORY_INFO.path} component={CategoryInfo} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
