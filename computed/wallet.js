import { extendObservable } from 'mobx';
import { formatNumber } from '../utils';

const ComputedWallet = store => {
  extendObservable(store, {
    get balanceLabel() {
      return formatNumber(store.balance);
    },
  });
};

export default ComputedWallet;
