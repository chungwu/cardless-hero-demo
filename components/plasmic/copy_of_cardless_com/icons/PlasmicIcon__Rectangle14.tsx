// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle14Icon(props: Rectangle14IconProps) {
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
          "M0 56.919c0-19.924 0-29.885 3.877-37.495A35.574 35.574 0 0119.424 3.877C27.034 0 36.995 0 56.919 0h130.735c19.923 0 29.885 0 37.495 3.877a35.579 35.579 0 0115.546 15.547c3.877 7.61 3.877 17.571 3.877 37.495v387.963c0 19.924 0 29.886-3.877 37.495a35.58 35.58 0 01-15.546 15.547c-7.61 3.877-17.572 3.877-37.495 3.877H56.919c-19.924 0-29.885 0-37.495-3.877a35.576 35.576 0 01-15.547-15.547C0 474.768 0 464.806 0 444.882V56.919z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle14Icon;
/* prettier-ignore-end */
