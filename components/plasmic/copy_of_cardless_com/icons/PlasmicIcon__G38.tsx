// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G38Icon(props: G38IconProps) {
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
          "M4.887 4.896c-.435.44-.974.66-1.616.66-.647 0-1.186-.22-1.62-.66C1.215 4.456 1 3.916 1 3.278c0-.638.216-1.178.65-1.618.435-.44.974-.66 1.62-.66.64 0 1.179.22 1.614.664.437.443.653.98.653 1.614 0 .639-.216 1.179-.65 1.618zM2.07 4.531c.328.326.726.49 1.2.49.471 0 .873-.164 1.197-.49.326-.326.492-.745.492-1.253 0-.507-.166-.926-.492-1.252a1.625 1.625 0 00-1.196-.49c-.475 0-.873.163-1.2.49-.327.326-.493.745-.493 1.252 0 .508.166.927.492 1.253v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G38Icon;
/* prettier-ignore-end */
