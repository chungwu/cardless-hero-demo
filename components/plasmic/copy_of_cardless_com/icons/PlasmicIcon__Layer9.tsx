// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer9Icon(props: Layer9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 28"}
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
          "M21.212 3.038c0-2.335-2.528-3.795-4.55-2.627L1.272 9.294A2.542 2.542 0 000 11.498v9.305a2.542 2.542 0 001.27 2.202l8.054 4.654a2.542 2.542 0 002.544 0l7.828-4.52a3.031 3.031 0 001.516-2.627c0-2.335-2.528-3.794-4.55-2.626l-8.696 5.02a1.272 1.272 0 01-1.905-1.102v-7.167a1.907 1.907 0 01.953-1.651l12.68-7.321a3.033 3.033 0 001.518-2.627z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer9Icon;
/* prettier-ignore-end */
