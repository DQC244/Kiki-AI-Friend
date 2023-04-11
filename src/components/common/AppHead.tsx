import React from "react";
import { LinkConstant } from "const";
import { ImageAssets } from "assets";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AppHead = (props: AppHeadProps) => {
  const OG_IMAGE = LinkConstant.APP_URL + ImageAssets.LogoImage;
  const absoluteUrl = LinkConstant.APP_URL + props.url;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:title" content={props.title || ""} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.ogImage || OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || OG_IMAGE} />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="600" />
      </Helmet>
    </HelmetProvider>
  );
};

export type AppHeadProps = {
  title: string;
  description: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
};

AppHead.defaultProps = {
  title: "React App",
  description: "React Application",
};

export default AppHead;
