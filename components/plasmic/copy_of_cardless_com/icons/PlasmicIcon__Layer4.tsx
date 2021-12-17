// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer4Icon(props: Layer4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 105"}
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
          "M79.103 11.328c0-8.706-9.426-14.15-16.969-9.795L4.742 34.658A9.48 9.48 0 000 42.876v34.702a9.481 9.481 0 004.738 8.211l30.034 17.355a9.473 9.473 0 009.487 0l29.19-16.856a11.309 11.309 0 005.654-9.794c0-8.708-9.428-14.15-16.969-9.795L29.707 85.42a4.742 4.742 0 01-7.105-4.109V54.584a7.113 7.113 0 013.555-6.159l47.289-27.3a11.31 11.31 0 005.657-9.797z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer4Icon;
/* prettier-ignore-end */
