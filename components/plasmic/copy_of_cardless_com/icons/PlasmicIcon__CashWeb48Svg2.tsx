// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CashWeb48Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CashWeb48Svg2Icon(props: CashWeb48Svg2IconProps) {
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

      <rect width={"48"} height={"48"} rx={"8"} fill={"#E6F2EB"}></rect>

      <path
        d={
          "M36.25 19.625V15.25a.875.875 0 00-.875-.875h-22.75a.875.875 0 00-.875.875V27.5c0 .483.392.875.875.875h22.75a.875.875 0 00.875-.875v-1.458m-21 7.583h17.5M13.5 31h21-21z"
        }
        stroke={"#007A33"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M24 25.75A4.375 4.375 0 1024 17a4.375 4.375 0 000 8.75z"}
        stroke={"#007A33"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CashWeb48Svg2Icon;
/* prettier-ignore-end */
