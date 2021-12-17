// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse35Icon(props: Ellipse35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 119 125"}
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
        cx={"59.296"}
        cy={"62.222"}
        rx={"59.296"}
        ry={"62.222"}
        fill={"currentColor"}
      ></ellipse>
    </svg>
  );
}

export default Ellipse35Icon;
/* prettier-ignore-end */
