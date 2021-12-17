// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4SvgIcon(props: Icon4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"48"} height={"48"} rx={"8"} fill={"#FAFAFA"}></rect>

      <path
        d={
          "M24 29a5 5 0 100-10 5 5 0 000 10zm0-16v2m0 18v2m-7.78-18.78l1.42 1.42m12.72 12.72l1.42 1.42M13 24h2m18 0h2m-18.78 7.78l1.42-1.42m12.72-12.72l1.42-1.42"
        }
        stroke={"#F00303"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon4SvgIcon;
/* prettier-ignore-end */
