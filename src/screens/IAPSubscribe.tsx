import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import RNIap, {
  purchaseUpdatedListener,
  purchaseErrorListener,
} from 'react-native-iap';

import ScreenWrapper from '@components/ScreenWrapper';
import Typography from '@components/Typography';

const itemSkus: any = Platform.select({
  ios: ['com.example.subscription'],
  android: ['com.example.subscription'],
});

const IAPService = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    RNIap.initConnection()
      .then(() => {
        RNIap.getSubscriptions(itemSkus).then(setProducts).catch(console.warn);
      })
      .catch(console.warn);

    const purchaseUpdate = purchaseUpdatedListener(purchase => {
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        // Send receipt to your backend for validation and to unlock the subscription
        console.log('Purchase successful: ', purchase);
        // RNIap.finishTransaction(purchase, false);
      }
    });

    const purchaseError = purchaseErrorListener(error => {
      console.warn('Purchase error: ', error);
    });

    return () => {
      purchaseUpdate.remove();
      purchaseError.remove();
      RNIap.endConnection();
    };
  }, []);

  const purchaseSubscription = async () => {
    try {
      await RNIap.requestSubscription(itemSkus[0]);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScreenWrapper headerShown lotieAnimation="devotion">
      <Typography font="regularItalic">Subscription</Typography>
    </ScreenWrapper>
  );
};

export default IAPService;
