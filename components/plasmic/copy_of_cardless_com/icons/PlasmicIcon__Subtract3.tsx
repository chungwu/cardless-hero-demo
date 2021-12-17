// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract3Icon(props: Subtract3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 221 478"}
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
          "M2.535 12.7C0 17.677 0 24.19 0 37.218V439.97c0 13.027 0 19.541 2.535 24.517a23.264 23.264 0 0010.166 10.165c4.975 2.535 11.489 2.535 24.516 2.535h146.2c13.028 0 19.541 0 24.517-2.535a23.261 23.261 0 0010.165-10.165c2.535-4.976 2.535-11.49 2.535-24.517V37.217c0-13.027 0-19.54-2.535-24.516a23.258 23.258 0 00-10.165-10.166C202.958 0 196.445 0 183.417 0h-11.432c-.567 0-.85 0-1.076.083-.38.138-.68.437-.818.817-.083.227-.083.51-.083 1.076 0 4.53 0 6.795-.66 8.61a10.948 10.948 0 01-6.542 6.541c-1.814.66-4.079.66-8.609.66h-87.76c-4.53 0-6.795 0-8.608-.66a10.946 10.946 0 01-6.543-6.542c-.66-1.814-.66-4.079-.66-8.609 0-.566 0-.849-.082-1.076a1.368 1.368 0 00-.818-.817C49.499 0 49.216 0 48.65 0H37.217C24.19 0 17.677 0 12.701 2.535A23.26 23.26 0 002.535 12.701z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract3Icon;
/* prettier-ignore-end */
