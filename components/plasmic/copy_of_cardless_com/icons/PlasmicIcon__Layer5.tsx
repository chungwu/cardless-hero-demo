// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer5Icon(props: Layer5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 40"}
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
          "M30.303 4.34c0-3.336-3.611-5.421-6.5-3.753L1.816 13.277A3.631 3.631 0 000 16.425v13.293a3.632 3.632 0 001.815 3.146l11.505 6.649a3.632 3.632 0 003.635 0l11.182-6.458a4.333 4.333 0 002.166-3.752c0-3.335-3.612-5.42-6.5-3.752L11.38 32.723a1.817 1.817 0 01-2.722-1.574V20.91a2.724 2.724 0 011.362-2.36L28.136 8.094a4.332 4.332 0 002.167-3.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer5Icon;
/* prettier-ignore-end */
