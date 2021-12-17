// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Gift2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Gift2Icon(props: Gift2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.248 10v7.5h-12V10M17.75 6.25h-15V10h15V6.25zm-7.5 11.25V6.25m0 0H6.873a1.875 1.875 0 110-3.75c2.625 0 3.375 3.75 3.375 3.75zm0 0h3.374a1.875 1.875 0 000-3.75C11 2.5 10.25 6.25 10.25 6.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Gift2Icon;
/* prettier-ignore-end */
