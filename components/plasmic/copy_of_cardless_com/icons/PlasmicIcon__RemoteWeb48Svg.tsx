// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RemoteWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RemoteWeb48SvgIcon(props: RemoteWeb48SvgIconProps) {
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
          "M30.346 33.792a11.612 11.612 0 01-5.939 1.867c-6.44.225-11.842-4.813-12.067-11.252-.225-6.44 4.813-11.842 11.253-12.067 6.44-.224 11.841 4.813 12.066 11.253a11.612 11.612 0 01-1.455 6.067"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M29 19l-2.5 7.5L19 29l2.5-7.5L29 19z"}
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RemoteWeb48SvgIcon;
/* prettier-ignore-end */
