// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path163Icon(props: Path163IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 155 46"}
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
          "M148.977 44.313c2.653 0 4.812-2.13 4.812-4.746V5.652c0-2.617-2.159-4.746-4.812-4.746H5.73C3.077.906.918 3.036.918 5.652v33.915c0 2.617 2.159 4.746 4.812 4.746h143.247zm0 .906H5.73C2.58 45.22 0 42.674 0 39.567V5.652C0 2.545 2.58 0 5.73 0h143.247c3.15 0 5.73 2.545 5.73 5.652v33.915c0 3.107-2.58 5.652-5.73 5.652z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path163Icon;
/* prettier-ignore-end */
