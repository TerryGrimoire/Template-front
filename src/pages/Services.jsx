import React from "react";
import { Helmet } from "react-helmet";

function Services({ helmet }) {
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Services </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Services;
