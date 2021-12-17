// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G302IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G302Icon(props: G302IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 8"}
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
        d={"M1 7.777V1h.883v6.777H1z"}
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G302Icon;
/* prettier-ignore-end */
