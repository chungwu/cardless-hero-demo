// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G18Icon(props: G18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.462 3.455c0 .607-.184 1.093-.546 1.456-.417.43-.96.646-1.624.646-.636 0-1.178-.22-1.623-.654C1.223 4.463 1 3.924 1 3.278s.223-1.185.669-1.621A2.234 2.234 0 013.292 1c.316 0 .618.065.905.184.287.121.521.285.69.486l-.384.384c-.295-.345-.697-.514-1.211-.514-.464 0-.866.16-1.207.482-.337.323-.507.742-.507 1.256s.17.937.507 1.26c.341.32.743.483 1.207.483.492 0 .905-.164 1.232-.486.215-.214.337-.508.37-.884H3.292v-.525h2.137c.026.113.033.223.033.33v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G18Icon;
/* prettier-ignore-end */
