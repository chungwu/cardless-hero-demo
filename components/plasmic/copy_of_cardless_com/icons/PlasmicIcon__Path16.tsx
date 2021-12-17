// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path16Icon(props: Path16IconProps) {
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
          "M95.77 28.487c1.706 0 3.094-1.369 3.094-3.051V3.634c0-1.683-1.388-3.052-3.093-3.052H3.683C1.978.582.59 1.952.59 3.634v21.802c0 1.682 1.388 3.051 3.094 3.051H95.77zm0 .583H3.684C1.658 29.07 0 27.433 0 25.436V3.634C0 1.636 1.658 0 3.683 0h92.088c2.025 0 3.683 1.636 3.683 3.634v21.802c0 1.997-1.658 3.634-3.683 3.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path16Icon;
/* prettier-ignore-end */
