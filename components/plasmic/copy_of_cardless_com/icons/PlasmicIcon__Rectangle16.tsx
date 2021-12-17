// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle16Icon(props: Rectangle16IconProps) {
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

      <g filter={"url(#8cOHxsUojFa)"}>
        <path
          d={
            "M0 56.92c0-19.924 0-29.886 3.877-37.496A35.575 35.575 0 0119.424 3.877C27.034 0 36.996 0 56.92 0h130.74c19.924 0 29.886 0 37.496 3.877a35.576 35.576 0 0115.547 15.547c3.877 7.61 3.877 17.572 3.877 37.496v387.975c0 19.924 0 29.886-3.877 37.496a35.577 35.577 0 01-15.547 15.547c-7.61 3.877-17.572 3.877-37.496 3.877H56.92c-19.924 0-29.886 0-37.496-3.877a35.576 35.576 0 01-15.547-15.547C0 474.781 0 464.819 0 444.895V56.92z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"8cOHxsUojFa"}
          x={"0"}
          y={"0"}
          width={"244.579"}
          height={"501.815"}
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

          <feGaussianBlur stdDeviation={"2.737"}></feGaussianBlur>

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
            result={"effect1_innerShadow_1447:26036"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Rectangle16Icon;
/* prettier-ignore-end */
