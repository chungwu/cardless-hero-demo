// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path142Icon(props: Path142IconProps) {
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
          "M148.772 0H5.722C2.576 0 0 2.545 0 5.652v33.915c0 3.107 2.576 5.652 5.722 5.652h143.05c3.146 0 5.722-2.545 5.722-5.652V5.652c0-3.107-2.576-5.652-5.722-5.652z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path142Icon;
/* prettier-ignore-end */
