// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VacationWeb48SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VacationWeb48SvgIcon(props: VacationWeb48SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect width={"48"} height={"48"} rx={"8"} fill={"#FAFAFA"}></rect>

      <path
        d={
          "M17.833 31H15.5a2.333 2.333 0 01-2.333-2.333v-9.334A2.333 2.333 0 0115.5 17h3.722M29.5 17h2.333a2.333 2.333 0 012.334 2.333v9.334A2.333 2.333 0 0131.833 31h-3.721M37 25.167v-2.334M24.833 17l-4.666 7h7L22.5 31"
        }
        stroke={"#F00303"}
        strokeWidth={"1.75"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VacationWeb48SvgIcon;
/* prettier-ignore-end */
