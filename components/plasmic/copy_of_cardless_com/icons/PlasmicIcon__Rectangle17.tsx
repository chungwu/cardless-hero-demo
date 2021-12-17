// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle17Icon(props: Rectangle17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 245 502"}
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
          "M0 56.92c0-19.924 0-29.886 3.877-37.496A35.575 35.575 0 0119.424 3.877C27.034 0 36.996 0 56.92 0h130.74c19.924 0 29.886 0 37.496 3.877a35.576 35.576 0 0115.547 15.547c3.877 7.61 3.877 17.572 3.877 37.496v387.975c0 19.924 0 29.886-3.877 37.496a35.577 35.577 0 01-15.547 15.547c-7.61 3.877-17.572 3.877-37.496 3.877H56.92c-19.924 0-29.886 0-37.496-3.877a35.576 35.576 0 01-15.547-15.547C0 474.781 0 464.819 0 444.895V56.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle17Icon;
/* prettier-ignore-end */
