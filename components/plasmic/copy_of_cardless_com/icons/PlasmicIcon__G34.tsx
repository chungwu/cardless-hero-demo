// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G34Icon(props: G34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 6"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2.8 5.357h-.564V1.535H1V1h3.036v.535H2.8v3.822z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G34Icon;
/* prettier-ignore-end */
