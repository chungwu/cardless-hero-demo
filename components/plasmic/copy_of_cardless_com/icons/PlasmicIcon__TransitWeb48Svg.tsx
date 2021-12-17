// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitWeb48SvgIcon(props: TransitWeb48SvgIconProps) {
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
          "M34.5 21.958v-6.125a4.667 4.667 0 00-4.667-4.666H18.167a4.667 4.667 0 00-4.667 4.666v12.834A2.333 2.333 0 0015.833 31h16.334a2.333 2.333 0 002.333-2.333v-.292"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={"M17.583 31l-2.916 5.833M29.833 31l2.917 5.833"}
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M20.208 33.917H31"}
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
      ></path>

      <circle cx={"18.167"} cy={"26.333"} r={"1.167"} fill={"#F00303"}></circle>

      <circle cx={"29.833"} cy={"26.333"} r={"1.167"} fill={"#F00303"}></circle>

      <path
        d={
          "M29.833 19.333H18.167A1.167 1.167 0 0117 18.167v-2.334c0-.644.522-1.166 1.167-1.166h11.666c.645 0 1.167.522 1.167 1.166v2.334c0 .644-.522 1.166-1.167 1.166z"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default TransitWeb48SvgIcon;
/* prettier-ignore-end */
