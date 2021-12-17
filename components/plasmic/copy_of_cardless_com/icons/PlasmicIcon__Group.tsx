// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 23"}
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
          "M16.003 12.21c-.027-2.9 2.436-4.312 2.548-4.377-1.395-1.983-3.556-2.254-4.316-2.276-1.816-.186-3.577 1.06-4.502 1.06-.943 0-2.368-1.042-3.903-1.01C3.855 5.635 2.007 6.75.993 8.481c-2.091 3.531-.531 8.72 1.473 11.574 1.002 1.397 2.173 2.958 3.707 2.903 1.5-.06 2.06-.932 3.87-.932 1.794 0 2.32.932 3.884.897 1.61-.025 2.623-1.404 3.59-2.814 1.159-1.602 1.624-3.18 1.643-3.261-.038-.013-3.127-1.162-3.157-4.639zm-2.954-8.53c.806-.984 1.359-2.322 1.205-3.68-1.167.05-2.628.787-3.469 1.75-.744.847-1.408 2.237-1.237 3.544 1.312.095 2.659-.646 3.5-1.614z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
