// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type G382IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function G382Icon(props: G382IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M7.047 7.06c-.677.686-1.515 1.028-2.515 1.028-1.006 0-1.844-.342-2.52-1.027C1.335 6.377 1 5.537 1 4.544c0-.993.336-1.833 1.011-2.517C2.688 1.342 3.526 1 4.531 1c.995 0 1.833.342 2.51 1.033.68.69 1.017 1.523 1.017 2.511 0 .993-.336 1.833-1.011 2.517zm-4.382-.567c.51.507 1.129.761 1.867.761.732 0 1.357-.254 1.861-.761.508-.508.765-1.159.765-1.949s-.257-1.441-.765-1.949c-.504-.507-1.129-.761-1.861-.761-.738 0-1.358.254-1.867.761-.508.508-.765 1.16-.765 1.95 0 .789.257 1.44.765 1.948v0z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={".111"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G382Icon;
/* prettier-ignore-end */
