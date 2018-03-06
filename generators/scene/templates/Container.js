// @flow
import * as React from "react";
import { connect } from "react-redux";
import <%= scene %> from "<%= name %>/App/Scenes/<%= scene %>";

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
