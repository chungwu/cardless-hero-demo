// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cash5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cash5Icon(props: Cash5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 48"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M51.098 45.025V4H2.881v41.025h35.067"}
        stroke={"currentColor"}
        strokeWidth={"4.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M32.935 15.747H20.881v4.675l12.054 8.182v4.675H20.881m6.027-22.441v3.682m0 23.668v-2.805"
        }
        stroke={"currentColor"}
        strokeWidth={"4.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Cash5Icon;
/* prettier-ignore-end */
