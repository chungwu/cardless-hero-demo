// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DonateWeb48Svg3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DonateWeb48Svg3Icon(props: DonateWeb48Svg3IconProps) {
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

      <rect width={"48"} height={"48"} rx={"8"} fill={"#86003A"}></rect>

      <g clipPath={"url(#5qrfqqPs7a)"}>
        <path
          d={
            "M33.332 25.75v0a5.584 5.584 0 00.213-8.1l-.103-.103a5.723 5.723 0 00-8.094 0l-1.495 1.495-1.385-1.386a5.878 5.878 0 00-8.313 0v0a5.878 5.878 0 000 8.313l9.698 9.698-.131-.132"
          }
          stroke={"#FDBB30"}
          strokeWidth={"1.75"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path
          d={
            "M32.766 33.24c0-3.607-5.034-2.074-5.034-4.122 0-.647.568-1.07 1.48-1.07.646 0 1.143.237 1.428.63.257.356.597.718 1.036.718.486 0 .887-.415.731-.875-.34-1-1.187-1.692-2.363-1.9v-.456a.707.707 0 00-1.414 0v.416c-1.559.198-2.602 1.176-2.602 2.537 0 3.541 4.967 2.167 4.967 4.149 0 .819-.687 1.215-1.678 1.215-.809 0-1.393-.35-1.686-.94-.197-.396-.542-.75-.985-.75-.488 0-.89.413-.754.882.356 1.24 1.344 2.08 2.738 2.275v.462a.707.707 0 101.414 0v-.462c1.638-.211 2.722-1.202 2.722-2.709z"
          }
          fill={"#FDBB30"}
        ></path>
      </g>

      <defs>
        <clipPath id={"5qrfqqPs7a"}>
          <path
            fill={"#fff"}
            transform={"translate(10 10)"}
            d={"M0 0h28v28H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default DonateWeb48Svg3Icon;
/* prettier-ignore-end */
