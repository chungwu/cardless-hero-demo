// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HealthWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HealthWeb48SvgIcon(props: HealthWeb48SvgIconProps) {
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
          "M34.313 15.378a6.416 6.416 0 00-9.077 0L24 16.614l-1.237-1.236a6.418 6.418 0 10-9.077 9.076l1.237 1.237L24 34.768l9.077-9.077 1.236-1.237a6.416 6.416 0 000-9.076v0z"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HealthWeb48SvgIcon;
/* prettier-ignore-end */
