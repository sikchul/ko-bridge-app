import CountryDevTrendsSection from '@features/country-dev-trends/CountryDevTrendsSection';
import DispatchAgenciesSection from '@features/dispatch-agencies/DispatchAgenciesSection';
import GlobalTrainingSection from '@features/global-training/GlobalTrainingSection';
import OverseasOfficesSection from '@features/overseas-offices/OverseasOfficesSection';
import VolunteerGuidesSection from '@features/volunteer-guides/VolunteerGuidesSection';
import { IonPage } from '@ionic/react';
import { CATEGORY_INFO_DATA, CATEGORY_KEYS } from '@shared/constants/route';
import { SharedIonContent } from '@widgets/content/shared-content';
import { SharedHeader } from '@widgets/header/shared-header';
import { useMemo } from 'react';
import { type RouteComponentProps } from 'react-router-dom';

interface CategoryInfoProps extends RouteComponentProps {}

export default function CategoryInfo({ location }: CategoryInfoProps) {
  const title = useMemo(() => {
    return (
      CATEGORY_INFO_DATA.find((category) => category.path === location.pathname)?.headerTitle || ''
    );
  }, [location.pathname]);

  const targetSection = useMemo(() => {
    const targetPathname = location.pathname;
    if (targetPathname.includes(CATEGORY_KEYS.COUNTRY_DEV_TRENDS)) {
      return <CountryDevTrendsSection />;
    }
    if (targetPathname.includes(CATEGORY_KEYS.VOLUNTEER_GUIDES)) {
      return <VolunteerGuidesSection />;
    }
    if (targetPathname.includes(CATEGORY_KEYS.DISPATCH_AGENCIES)) {
      return <DispatchAgenciesSection />;
    }
    if (targetPathname.includes(CATEGORY_KEYS.GLOBAL_TRAINING)) {
      return <GlobalTrainingSection />;
    }
    if (targetPathname.includes(CATEGORY_KEYS.OVERSEAS_OFFICES)) {
      return <OverseasOfficesSection />;
    }
    return null;
  }, [location.pathname]);

  return (
    <IonPage>
      <SharedHeader title={title} />
      <SharedIonContent>{targetSection}</SharedIonContent>
    </IonPage>
  );
}
