// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path162IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path162Icon(props: Path162IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 30"}
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
          "M95.64 28.487c1.702 0 3.088-1.369 3.088-3.051V3.634c0-1.683-1.386-3.052-3.089-3.052H3.68C1.976.582.59 1.952.59 3.634v21.802c0 1.682 1.386 3.051 3.09 3.051h91.96zm0 .583H3.677C1.656 29.07 0 27.433 0 25.436V3.634C0 1.636 1.656 0 3.678 0H95.64c2.023 0 3.679 1.636 3.679 3.634v21.802c0 1.997-1.656 3.634-3.679 3.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path162Icon;
/* prettier-ignore-end */
