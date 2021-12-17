// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse33Icon(props: Ellipse33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 114 120"}
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

      <ellipse
        cx={"56.924"}
        cy={"59.733"}
        rx={"56.924"}
        ry={"59.733"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse33Icon;
/* prettier-ignore-end */
