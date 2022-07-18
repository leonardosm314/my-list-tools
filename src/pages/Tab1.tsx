import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonRow } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen >
        <IonFab
          vertical="bottom"
          horizontal="end"
          onClick={() => {
          }}
        >
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <div className="content">
          <IonRow>
            <IonCol size="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonRow>
                <IonCol size="12">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
                <IonCol size="12">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
                <IonCol size="12">
                  <IonCard>
                    <IonCardHeader>
                      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              </IonRow>

            </IonCol>
          </IonRow>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
