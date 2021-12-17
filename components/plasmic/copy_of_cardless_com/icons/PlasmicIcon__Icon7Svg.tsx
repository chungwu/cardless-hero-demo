// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7SvgIcon(props: Icon7SvgIconProps) {
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
          "M32.84 16.61a5.5 5.5 0 00-7.78 0L24 17.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L24 33.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
        }
        stroke={"#F00303"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon7SvgIcon;
/* prettier-ignore-end */
