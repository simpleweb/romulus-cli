// @flow
import * as React from "react";
import { connect } from "react-redux";
<% if (type === "index.js as component") { -%>
import <%= scene %> from "<%= name %>/App/Scenes/<%= scene %>";
<% } else { -%>
import <%= scene %> from "<%= name %>/App/Scenes/<%= scene %>/<%= scene %>";
<% } -%>

class <%= scene %>Container extends React.Component<{}> {
  render(): React.Node {
    return <<%= scene %> />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= scene %>Container);
