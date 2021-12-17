// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Silver3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Silver3Icon(props: Silver3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 248 502"}
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
          "M1.71 56.92c0-19.924 0-29.886 3.878-37.496A35.575 35.575 0 0121.135 3.877C28.745 0 38.707 0 58.63 0h130.738c19.924 0 29.886 0 37.496 3.877a35.576 35.576 0 0115.547 15.547c3.878 7.61 3.878 17.572 3.878 37.496v72.04h1.026c.378 0 .684.306.684.684v58.152a.684.684 0 01-.684.684h-1.026v256.415c0 19.924 0 29.886-3.878 37.496a35.577 35.577 0 01-15.547 15.547c-7.61 3.877-17.572 3.877-37.496 3.877H58.631c-19.924 0-29.886 0-37.496-3.877a35.576 35.576 0 01-15.547-15.547c-3.878-7.61-3.878-17.572-3.878-37.496V200.452H.684a.684.684 0 01-.684-.684v-36.943c0-.378.306-.684.684-.684H1.71v-8.552H.684a.684.684 0 01-.684-.684v-36.944c0-.377.306-.684.684-.684H1.71V99.2H.684A.684.684 0 010 98.516V80.044c0-.378.306-.684.684-.684H1.71V56.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Silver3Icon;
/* prettier-ignore-end */
