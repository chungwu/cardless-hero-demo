// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChildcareWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChildcareWeb48SvgIcon(props: ChildcareWeb48SvgIconProps) {
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
          "M24 29.833a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666zm0-18.666V13.5m0 21v2.333m-9.077-21.91l1.657 1.657m14.84 14.84l1.657 1.657M11.167 24H13.5m21 0h2.333m-21.91 9.077l1.657-1.657m14.84-14.84l1.657-1.657"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChildcareWeb48SvgIcon;
/* prettier-ignore-end */
