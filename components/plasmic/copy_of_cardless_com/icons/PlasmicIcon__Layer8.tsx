// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer8Icon(props: Layer8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 32"}
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
          "M24.242 3.472c0-2.668-2.888-4.337-5.2-3.002L1.453 10.62A2.905 2.905 0 000 13.141v10.634a2.906 2.906 0 001.452 2.516l9.204 5.32a2.905 2.905 0 002.908 0l8.946-5.167a3.467 3.467 0 001.732-3.001c0-2.669-2.889-4.337-5.2-3.002l-9.938 5.738a1.454 1.454 0 01-2.177-1.26v-8.191a2.18 2.18 0 011.09-1.887l14.492-8.367a3.466 3.466 0 001.733-3.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer8Icon;
/* prettier-ignore-end */
