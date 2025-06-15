import { IonCard } from '@ionic/react';
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';

interface CardBoxProps extends ComponentProps<typeof IonCard> {}

const CardBox = forwardRef<HTMLIonCardElement, CardBoxProps>(({ children, ...props }, ref) => {
  return (
    <IonCard ref={ref} {...props}>
      {children}
    </IonCard>
  );
});

CardBox.displayName = 'CardBox';

export default CardBox;
