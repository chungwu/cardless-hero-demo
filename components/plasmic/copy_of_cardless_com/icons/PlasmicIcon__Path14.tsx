// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path14Icon(props: Path14IconProps) {
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
          "M95.64 0H3.677C1.656 0 0 1.636 0 3.634v21.802c0 1.997 1.656 3.634 3.678 3.634H95.64c2.023 0 3.679-1.637 3.679-3.634V3.634C99.318 1.636 97.662 0 95.639 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path14Icon;
/* prettier-ignore-end */
