// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BubbleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BubbleIcon(props: BubbleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 53"}
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
          "M18.728 28.297c0-3.988-5.298-2.289-5.298-4.39 0-.591.533-.994 1.383-.994.964 0 1.569.518 1.64 1.31h2.06c-.044-1.584-1.066-2.707-2.635-3.052v-1.296H14.15v1.224c-1.684.23-2.822 1.324-2.822 2.807 0 3.96 5.227 2.448 5.227 4.42 0 .763-.648 1.166-1.613 1.166-1.065 0-1.742-.648-1.828-1.67H11.04c.073 1.886 1.267 3.196 3.11 3.484v1.253l1.728.014v-1.281c1.742-.288 2.85-1.383 2.85-2.995zm9.799 8.503h1.19c5.11 0 7.55-3.543 7.55-9.756v-1.307c0-6.184-2.44-9.727-7.55-9.727h-1.19c-5.11 0-7.549 3.514-7.549 9.727v1.307c0 6.213 2.439 9.756 7.55 9.756zm.203-3.775c-1.945 0-3.368-1.539-3.368-4.675v-3.92c0-3.135 1.423-4.674 3.369-4.674h.783c1.946 0 3.397 1.539 3.397 4.675v3.92c0 3.135-1.451 4.674-3.397 4.674h-.784z"
        }
        opacity={".04"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BubbleIcon;
/* prettier-ignore-end */
