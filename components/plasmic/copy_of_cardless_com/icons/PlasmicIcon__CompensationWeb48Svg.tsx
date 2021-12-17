// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CompensationWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CompensationWeb48SvgIcon(props: CompensationWeb48SvgIconProps) {
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
          "M31 27.939c0-6.856-11.083-4.256-11.083-9.268 0-1.877 1.423-3.421 4.083-3.421 2.52 0 4.438 1.341 5.057 3.133.167.482.582.876 1.092.876.58 0 1.044-.498.905-1.061-.651-2.645-2.91-4.439-5.887-4.761V12.04a.875.875 0 10-1.75 0v1.398c-3.36.336-5.25 2.405-5.25 5.234 0 7 11.083 4.227 11.083 9.268 0 2.38-1.95 3.644-4.666 3.644-2.759 0-4.6-1.628-5.114-3.947-.094-.426-.452-.761-.89-.761-.522 0-.922.469-.804.977.7 3.015 2.27 5.076 5.641 5.481v1.739a.875.875 0 001.75 0v-1.739C29.074 32.75 31 31.055 31 27.94z"
        }
        fill={"#F00303"}
      ></path>
    </svg>
  );
}

export default CompensationWeb48SvgIcon;
/* prettier-ignore-end */
