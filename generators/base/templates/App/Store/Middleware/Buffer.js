// @flow
import { REHYDRATE } from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';

const Buffer = createActionBuffer(REHYDRATE);

export default Buffer;
