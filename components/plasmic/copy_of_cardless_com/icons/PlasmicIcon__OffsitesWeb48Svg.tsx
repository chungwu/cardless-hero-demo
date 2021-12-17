// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OffsitesWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OffsitesWeb48SvgIcon(props: OffsitesWeb48SvgIconProps) {
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
          "M29.833 34.5v-2.333a4.667 4.667 0 00-4.666-4.667h-9.334a4.667 4.667 0 00-4.666 4.667V34.5M20.5 22.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333zM36.833 34.5v-2.333a4.667 4.667 0 00-3.5-4.515m-4.666-14a4.666 4.666 0 010 9.041"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OffsitesWeb48SvgIcon;
/* prettier-ignore-end */
