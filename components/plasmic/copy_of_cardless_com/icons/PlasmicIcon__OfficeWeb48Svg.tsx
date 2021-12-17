// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OfficeWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OfficeWeb48SvgIcon(props: OfficeWeb48SvgIconProps) {
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
          "M32.167 35.667a2.333 2.333 0 002.333-2.334V20.99a1 1 0 00-.386-.79L24 12.334 13.886 20.2a1 1 0 00-.386.789v12.344a2.333 2.333 0 002.333 2.334"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20 35.7v-9.2a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v9.2"}
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OfficeWeb48SvgIcon;
/* prettier-ignore-end */
