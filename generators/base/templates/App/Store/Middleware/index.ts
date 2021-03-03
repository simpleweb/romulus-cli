import Buffer from "<%= name %>/App/Store/Middleware/Buffer";
import Logger from "<%= name %>/App/Store/Middleware/Logger";
import Saga from "<%= name %>/App/Store/Middleware/Saga";

export default [Buffer, Saga, ...(__DEV__ ? [Logger] : [])];
