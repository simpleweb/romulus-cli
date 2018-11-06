// @flow
import * as React from "react";
import { connect } from "react-redux";
<% if (type === "index.js as component") { -%>
import <%= screen %> from "<%= name %>/App/Screens/<%= screen %>";
<% } else { -%>
import <%= screen %> from "<%= name %>/App/Screens/<%= screen %>/<%= screen %>";
<% } -%>

class <%= screen %>Container extends React.Component<{}> {
  render(): React.Node {
    return <<%= screen %> />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= screen %>Container);
