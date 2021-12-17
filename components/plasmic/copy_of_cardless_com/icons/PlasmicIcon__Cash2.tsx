// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cash2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cash2Icon(props: Cash2IconProps) {
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
        d={"M51.1 45.025V4H2.883v41.025H37.95"}
        stroke={"currentColor"}
        strokeWidth={"4.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M32.937 15.747H20.883v4.675l12.054 8.182v4.675H20.883m6.027-22.441v3.682m0 23.668v-2.805"
        }
        stroke={"currentColor"}
        strokeWidth={"4.32"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Cash2Icon;
/* prettier-ignore-end */
