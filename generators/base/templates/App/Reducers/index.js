// @flow
import { persistCombineReducers } from 'redux-persist';
import { ENV, STORAGE_PREFIX } from '<%= name %>/App/Config';
import storage from 'redux-persist/src/storage';
<% reducers.forEach(function(reducer) { -%>
import <%= reducer %> from '<%= name %>/App/Reducers/<%= reducer %>';
<% }); -%>

const config = {
  key: STORAGE_PREFIX,
  debug: ENV == 'development',
  storage,
}

const reducers = persistCombineReducers(config, {
<% reducers.forEach(function(reducer) { -%>
  <%- reducer.toLowerCase() %>: <%= reducer %>,
<% }); -%>
});

export default reducers;
