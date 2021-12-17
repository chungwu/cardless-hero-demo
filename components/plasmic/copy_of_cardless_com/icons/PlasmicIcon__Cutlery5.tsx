// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cutlery5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cutlery5Icon(props: Cutlery5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.447 2.106A1 1 0 0014 3v18a1 1 0 002 0v-6.22l.213-.052.053-.014c.682-.17 1.277-.319 1.75-.5.51-.194.983-.461 1.349-.93.365-.468.51-.99.575-1.533.06-.503.06-1.116.06-1.818V7.426c0-.562 0-1.057-.043-1.47-.046-.448-.149-.882-.405-1.297-.257-.415-.6-.701-.979-.943-.35-.223-.793-.444-1.296-.695L17.236 3l-1.789-.894zm1.857 10.24c-.304.116-.707.223-1.304.373V4.618l.341.17c.557.279.906.455 1.159.616.233.148.308.238.35.306.043.068.09.176.118.451.03.298.032.69.032 1.311v2.405c0 .774-.002 1.267-.046 1.636-.041.343-.108.466-.166.54-.058.075-.161.17-.484.293zM4.5 3a1 1 0 10-2 0v4.179c0 .648 0 1.217.053 1.686.058.508.187.998.51 1.448.324.451.748.73 1.21.946.428.2.967.382 1.582.59l.05.016.095.032V21a1 1 0 002 0v-9.103l.096-.032.05-.017c.614-.207 1.153-.388 1.58-.589.463-.217.887-.495 1.21-.946.324-.45.453-.94.51-1.448.054-.469.054-1.038.054-1.686V3a1 1 0 10-2 0v4.126c0 .717-.002 1.17-.04 1.513-.037.317-.096.435-.148.508-.052.072-.145.166-.434.301-.22.103-.497.206-.878.337V3a1 1 0 10-2 0v6.785a9.267 9.267 0 01-.878-.337c-.29-.135-.382-.229-.434-.301-.052-.073-.111-.191-.148-.508-.039-.343-.04-.796-.04-1.513V3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cutlery5Icon;
/* prettier-ignore-end */
