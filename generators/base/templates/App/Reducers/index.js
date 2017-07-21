// @flow
import { combineReducers } from 'redux';
<% reducers.forEach(function(reducer) { -%>
import <%= reducer %> from '<%= name %>/App/Reducers/<%= reducer %>';
<% }); -%>

const reducers = combineReducers({
<% reducers.forEach(function(reducer) { -%>
  <%- reducer.toLowerCase() %>: <%= reducer %>,
<% }); -%>
});

export default reducers;
