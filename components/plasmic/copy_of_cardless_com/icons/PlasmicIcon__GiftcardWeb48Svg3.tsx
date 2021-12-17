// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GiftcardWeb48Svg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GiftcardWeb48Svg3Icon(props: GiftcardWeb48Svg3IconProps) {
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

      <rect width={"48"} height={"48"} rx={"8"} fill={"#86003A"}></rect>

      <path
        d={
          "M36.833 24.292V17a2.333 2.333 0 00-2.333-2.333h-21A2.333 2.333 0 0011.167 17v14a2.333 2.333 0 002.333 2.333h21A2.333 2.333 0 0036.833 31v-.292"
        }
        stroke={"#FDBB30"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M21.667 14.667v2.041m-10.5 4.959h2.041m8.459 11.083v-4.375m8.458-6.708h6.708m-15.575 1.166l-.526.789c-.426.64-.914 1.235-1.457 1.778l-.933.933"
        }
        stroke={"#FDBB30"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
      ></path>

      <path
        d={
          "M20.52 22.639a.875.875 0 00.858-1.047l-.858.172.857-.172v-.006l-.003-.01-.006-.03a5.503 5.503 0 00-.116-.426 5.576 5.576 0 00-.422-.993c-.385-.7-1.16-1.669-2.498-1.669a2.09 2.09 0 100 4.18h2.188zm2.314-.875l-.858-.172a.875.875 0 00.858 1.047h2.188a2.09 2.09 0 100-4.18c-1.338 0-2.114.967-2.499 1.668a5.591 5.591 0 00-.537 1.419l-.007.03-.002.01v.005h0c-.001 0-.001.001.857.173z"
        }
        stroke={"#FDBB30"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M22.075 22.833l.526.789c.426.64.915 1.235 1.458 1.778l.933.933"}
        stroke={"#FDBB30"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default GiftcardWeb48Svg3Icon;
/* prettier-ignore-end */
