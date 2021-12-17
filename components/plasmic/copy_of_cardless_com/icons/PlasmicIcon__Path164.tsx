// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path164IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path164Icon(props: Path164IconProps) {
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
          "M148.772 44.313c2.649 0 4.805-2.13 4.805-4.746V5.652c0-2.617-2.156-4.746-4.805-4.746H5.722C3.072.906.917 3.036.917 5.652v33.915c0 2.617 2.156 4.746 4.805 4.746h143.05zm0 .906H5.722C2.576 45.22 0 42.674 0 39.567V5.652C0 2.545 2.576 0 5.722 0h143.05c3.146 0 5.722 2.545 5.722 5.652v33.915c0 3.107-2.576 5.652-5.722 5.652z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path164Icon;
/* prettier-ignore-end */
