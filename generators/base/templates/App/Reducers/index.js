// @flow
import { persistCombineReducers } from 'redux-persist';
import { ENV, STORAGE_PREFIX } from '<%= name %>/App/Config';
import AsyncStorage from '@react-native-community/async-storage';
<% reducers.forEach(function(reducer) { -%>
import <%= reducer %> from '<%= name %>/App/Reducers/<%= reducer %>';
<% }); -%>

const config = {
  key: STORAGE_PREFIX,
  debug: ENV === 'development',
  storage: AsyncStorage,
}

const reducers = persistCombineReducers(config, {
<% reducers.forEach(function(reducer) { -%>
  <%- reducer.toLowerCase() %>: <%= reducer %>,
<% }); -%>
});

export default reducers;
