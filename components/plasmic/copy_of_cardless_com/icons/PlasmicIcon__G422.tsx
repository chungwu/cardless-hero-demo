// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G422IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G422Icon(props: G422IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
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
          "M1 7.777V1h1.073l3.336 5.27h.038L5.41 4.969V1h.882v6.777h-.92l-3.494-5.53h-.039l.039 1.308v4.222H1v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G422Icon;
/* prettier-ignore-end */
