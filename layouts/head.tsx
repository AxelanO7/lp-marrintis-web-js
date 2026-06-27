import React from "react";
import NextHead from "next/head";

import { siteConfig } from "@/config/site";

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta content="website" property="og:type" />
      <meta content={siteConfig.url} property="og:url" />
      <meta content="/logo.jpg" property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={siteConfig.name} name="twitter:title" />
      <meta content={siteConfig.description} name="twitter:description" />
      <meta content="/logo.jpg" name="twitter:image" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
