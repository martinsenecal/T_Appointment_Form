import React from "react";
import Head from "next/head";

import "../styles.scss";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Appointment Form</title>
        </Head>
        <div style={{ textAlign: "center" }} className="example">
          Hello World {this.props.userAgent}
        </div>
      </div>
    );
  }
}
