// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockIcon(props: LockIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M16 .8a6.678 6.678 0 016.68 6.678v3.34h.277a5.843 5.843 0 015.844 5.843v8.348a5.843 5.843 0 01-5.844 5.843H9.044a5.843 5.843 0 01-5.843-5.843V16.66a5.843 5.843 0 015.843-5.844h.279V7.478A6.678 6.678 0 0116 .8zm-4.452 6.135c0-2.159 1.993-3.909 4.452-3.909 2.459 0 4.452 1.75 4.452 3.91v3.881h-8.904V6.935zm4.732 10.561a1.948 1.948 0 00-1.948 1.948v3.896a1.948 1.948 0 003.896 0v-3.896a1.948 1.948 0 00-1.948-1.948z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockIcon;
/* prettier-ignore-end */
