import { REHYDRATE, PERSIST } from 'redux-persist/lib/constants';
import createActionBuffer from 'redux-action-buffer';

const Buffer = createActionBuffer({ breaker: REHYDRATE, passthrough: [PERSIST] });

export default Buffer;
