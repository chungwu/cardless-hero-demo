// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G182IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G182Icon(props: G182IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 9"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.94 4.82c0 .944-.285 1.7-.849 2.263-.648.669-1.492 1.005-2.526 1.005-.989 0-1.833-.342-2.525-1.016C1.346 6.388 1 5.55 1 4.544 1 3.54 1.346 2.7 2.04 2.022 2.732 1.342 3.576 1 4.565 1c.492 0 .961.1 1.409.287.446.188.81.442 1.073.756l-.598.596c-.46-.535-1.085-.8-1.884-.8a2.64 2.64 0 00-1.877.75c-.525.504-.788 1.155-.788 1.955s.263 1.457.788 1.96c.53.496 1.156.75 1.877.75.765 0 1.409-.254 1.917-.756.334-.332.525-.79.575-1.375H4.565v-.816h3.324c.04.176.052.347.052.513v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G182Icon;
/* prettier-ignore-end */
