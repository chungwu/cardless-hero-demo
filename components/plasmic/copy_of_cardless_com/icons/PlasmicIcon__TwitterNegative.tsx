// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterNegativeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterNegativeIcon(props: TwitterNegativeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M7.55 21.75c9.055 0 14.008-7.503 14.008-14.008 0-.211-.004-.427-.014-.638A10 10 0 0024 4.555c-.898.4-1.85.66-2.826.774a4.95 4.95 0 002.165-2.723A9.897 9.897 0 0120.213 3.8a4.93 4.93 0 00-8.394 4.49A13.984 13.984 0 011.673 3.15a4.93 4.93 0 001.523 6.57 4.93 4.93 0 01-2.23-.614v.06a4.922 4.922 0 003.95 4.829 4.894 4.894 0 01-2.221.084 4.934 4.934 0 004.597 3.422A9.875 9.875 0 010 19.538a13.969 13.969 0 007.55 2.212z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterNegativeIcon;
/* prettier-ignore-end */
