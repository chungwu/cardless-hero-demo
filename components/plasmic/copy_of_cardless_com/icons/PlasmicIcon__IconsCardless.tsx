// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsCardlessIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsCardlessIcon(props: IconsCardlessIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 41"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.573 20.936v7.772c0 1.065 1.175 1.722 2.117 1.193l9.635-5.443c2.241-1.264 5.044.314 5.044 2.85a3.296 3.296 0 01-1.679 2.85l-8.672 4.9a2.87 2.87 0 01-2.817 0l-8.935-5.05a2.75 2.75 0 01-1.409-2.385V17.529c0-.986.54-1.893 1.409-2.386l17.052-9.637c2.24-1.264 5.044.315 5.044 2.85a3.279 3.279 0 01-1.68 2.85l-14.05 7.937a2.056 2.056 0 00-1.06 1.793z"
        }
        fill={"currentColor"}
        opacity={".8"}
      ></path>
    </svg>
  );
}

export default IconsCardlessIcon;
/* prettier-ignore-end */
