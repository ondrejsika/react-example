import React from "react";
import App, { Container } from "next/app";

// Imported CSS
import "bootstrap/dist/css/bootstrap.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="container">
          <p>
            <a href="/">Index</a> ~ <a href="/about-me">About me</a> ~{" "}
            <a href="/mdx">MDX</a>
          </p>
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
