// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star1Icon(props: Star1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 37"}
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
          "M20 0l5.29 12.719 13.731 1.1-10.462 8.962 3.197 13.4L20 29 8.244 36.18l3.197-13.399L.979 13.82l13.73-1.101L20 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star1Icon;
/* prettier-ignore-end */
