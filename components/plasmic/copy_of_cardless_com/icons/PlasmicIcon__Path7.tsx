// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path7Icon(props: Path7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 39"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.099.265c0 .222.021.301.046.175A1.104 1.104 0 00.142.036C.117-.06.098.043.1.266zM0 1.932c0 .25.02.353.044.228a1.45 1.45 0 000-.455C.02 1.58 0 1.682 0 1.932zm12.789 36.353a.83.83 0 00.353 0c.097-.026.017-.046-.177-.046-.193 0-.273.02-.176.046z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path7Icon;
/* prettier-ignore-end */
