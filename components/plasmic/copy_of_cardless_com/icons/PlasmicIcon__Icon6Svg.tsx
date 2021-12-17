// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6SvgIcon(props: Icon6SvgIconProps) {
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
          "M17 30h-2a2 2 0 01-2-2v-8a2 2 0 012-2h3.19M27 18h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19M35 25v-2m-12-5l-4 6h6l-4 6"
        }
        stroke={"#F00303"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon6SvgIcon;
/* prettier-ignore-end */
