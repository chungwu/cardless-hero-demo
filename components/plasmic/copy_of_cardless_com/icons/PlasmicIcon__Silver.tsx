// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SilverIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SilverIcon(props: SilverIconProps) {
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
          "M1.71 56.919c0-19.924 0-29.885 3.878-37.495A35.574 35.574 0 0121.134 3.877C28.744 0 38.706 0 58.63 0h130.735c19.923 0 29.885 0 37.494 3.877a35.576 35.576 0 0115.547 15.547c3.877 7.61 3.877 17.571 3.877 37.495v72.037h1.026c.378 0 .685.306.685.684v58.15a.685.685 0 01-.685.684h-1.026v256.407c0 19.924 0 29.885-3.877 37.495a35.577 35.577 0 01-15.547 15.547c-7.609 3.877-17.571 3.877-37.494 3.877H58.629c-19.923 0-29.885 0-37.495-3.877a35.576 35.576 0 01-15.546-15.547c-3.878-7.61-3.878-17.571-3.878-37.495V200.446H.684a.684.684 0 01-.684-.684V162.82c0-.378.306-.684.684-.684H1.71v-8.552H.684A.684.684 0 010 152.9v-36.942c0-.378.306-.684.684-.684H1.71V99.197H.684A.684.684 0 010 98.513V80.042c0-.378.306-.684.684-.684H1.71v-22.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SilverIcon;
/* prettier-ignore-end */
