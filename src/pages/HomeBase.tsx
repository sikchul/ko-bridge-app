import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { ROUTE } from '@shared/constants/route';
import { globeOutline, homeOutline, peopleOutline, playOutline } from 'ionicons/icons';
import { useMemo } from 'react';
import { Route, type RouteComponentProps } from 'react-router-dom';

import Home from './Home';

interface HomeBaseProps extends RouteComponentProps {}

const TAB_BUTTON_LIST = [
  {
    label: ROUTE.HOME.footerLabel,
    value: ROUTE.HOME.value,
    icon: homeOutline,
    path: ''
  },
  {
    label: ROUTE.COUNTRIES.footerLabel,
    value: ROUTE.COUNTRIES.value,
    icon: globeOutline,
    path: ROUTE.COUNTRIES.path
  },
  {
    label: ROUTE.VIDEOS.footerLabel,
    value: ROUTE.VIDEOS.value,
    icon: playOutline,
    path: ROUTE.VIDEOS.path
  },
  {
    label: ROUTE.COMMUNITIES.footerLabel,
    value: ROUTE.COMMUNITIES.value,
    icon: peopleOutline,
    path: ROUTE.COMMUNITIES.path
  }
];

export default function HomeBase(props: HomeBaseProps) {
  const tabButtonList = useMemo(() => {
    return TAB_BUTTON_LIST.map((item) => {
      return {
        ...item,
        selected: props.match.url === `${props.match.url}${item.path}`
      };
    });
  }, [props.match.url]);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={`${props.match.url}`} component={Home} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabButtonList.map((item) => {
          return (
            <IonTabButton
              key={item.label}
              tab={item.path}
              selected={item.selected}
              onClick={() => {
                props.history.push(item.path);
              }}
            >
              <IonIcon aria-hidden="true" icon={item.icon} />
              <IonLabel>{item.label}</IonLabel>
            </IonTabButton>
          );
        })}
      </IonTabBar>
    </IonTabs>
  );
}
