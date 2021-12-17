// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle11Icon(props: Rectangle11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 245 502"}
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

      <g filter={"url(#I-a4R3SsQca)"}>
        <path
          d={
            "M0 56.919c0-19.924 0-29.885 3.877-37.495A35.574 35.574 0 0119.424 3.877C27.034 0 36.995 0 56.919 0h130.734c19.924 0 29.885 0 37.495 3.877a35.576 35.576 0 0115.547 15.547c3.877 7.61 3.877 17.571 3.877 37.495V444.88c0 19.924 0 29.885-3.877 37.495a35.577 35.577 0 01-15.547 15.547c-7.61 3.877-17.571 3.877-37.495 3.877H56.919c-19.924 0-29.885 0-37.495-3.877a35.576 35.576 0 01-15.547-15.547C0 474.766 0 464.805 0 444.881V56.919z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"I-a4R3SsQca"}
          x={"0"}
          y={"0"}
          width={"244.572"}
          height={"501.8"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"8"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"}
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_1078:23861"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle11Icon;
/* prettier-ignore-end */
