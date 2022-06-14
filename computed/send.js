import { extendObservable } from 'mobx';
import { formatNumber } from '../utils';

const ComputedSend = store => {
  extendObservable(store, {
    get sendValueLabel() {
      return formatNumber(store.send.newTx.outputs[0].value);
    },
    get sendFeeLabel() {
      return formatNumber(store.send.newTx.fee);
    },
  });
};

export default ComputedSend;
