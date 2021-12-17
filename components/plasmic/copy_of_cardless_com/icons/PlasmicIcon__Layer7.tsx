// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer7Icon(props: Layer7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 89"}
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
          "M67.155 9.617c0-7.391-8.002-12.013-14.406-8.316L4.026 29.423A8.047 8.047 0 000 36.4v29.46a8.05 8.05 0 004.022 6.971L29.52 87.565a8.05 8.05 0 008.054 0l24.782-14.31a9.601 9.601 0 004.8-8.315c0-7.392-8.005-12.013-14.407-8.316L25.22 72.52a4.025 4.025 0 01-6.031-3.489V46.34a6.038 6.038 0 013.018-5.229l40.146-23.176a9.602 9.602 0 004.803-8.318z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer7Icon;
/* prettier-ignore-end */
