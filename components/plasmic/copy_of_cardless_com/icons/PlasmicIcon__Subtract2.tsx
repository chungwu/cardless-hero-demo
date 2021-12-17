// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtract2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtract2Icon(props: Subtract2IconProps) {
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
          "M2.535 12.7C0 17.676 0 24.19 0 37.216v402.741c0 13.027 0 19.54 2.535 24.516A23.263 23.263 0 0012.7 474.638c4.976 2.535 11.49 2.535 24.516 2.535h146.196c13.027 0 19.54 0 24.516-2.535a23.261 23.261 0 0010.165-10.165c2.535-4.976 2.535-11.489 2.535-24.516V37.217c0-13.028 0-19.541-2.535-24.517a23.258 23.258 0 00-10.165-10.165C202.952 0 196.439 0 183.412 0H171.98c-.566 0-.85 0-1.076.083-.38.138-.68.437-.818.817-.082.227-.082.51-.082 1.076 0 4.53 0 6.795-.661 8.609a10.943 10.943 0 01-6.542 6.542c-1.813.66-4.078.66-8.608.66H66.435c-4.53 0-6.794 0-8.608-.66a10.946 10.946 0 01-6.542-6.542c-.66-1.814-.66-4.079-.66-8.609 0-.566 0-.849-.083-1.076a1.368 1.368 0 00-.818-.817C49.498 0 49.215 0 48.648 0H37.216C24.19 0 17.676 0 12.7 2.535A23.26 23.26 0 002.535 12.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtract2Icon;
/* prettier-ignore-end */
