// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CellDivider3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CellDivider3Icon(props: CellDivider3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 742 1"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        d={"M.5.5h741"}
      ></path>
    </svg>
  );
}

export default CellDivider3Icon;
/* prettier-ignore-end */
