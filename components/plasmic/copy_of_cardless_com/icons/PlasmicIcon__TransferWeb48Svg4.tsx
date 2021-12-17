// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransferWeb48Svg4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransferWeb48Svg4Icon(props: TransferWeb48Svg4IconProps) {
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

      <rect width={"48"} height={"48"} rx={"8"} fill={"#E6F6FC"}></rect>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.625 24c0-6.28 5.057-11.375 11.375-11.375 3.76 0 6.576 1.57 8.435 3.12.452.376.848.752 1.19 1.106v-2.768a.875.875 0 011.75 0v5.25a.875.875 0 01-.875.875h-4.667a.875.875 0 110-1.75h2.897a13.322 13.322 0 00-1.415-1.37c-1.641-1.367-4.075-2.713-7.315-2.713A9.603 9.603 0 0014.375 24a.875.875 0 01-1.75 0zm21.875-.875c.483 0 .875.392.875.875 0 6.282-5.093 11.375-11.375 11.375-3.203 0-5.738-1.61-7.429-3.143a16.104 16.104 0 01-1.03-1.023v2.708a.875.875 0 01-1.75 0v-5.25c0-.484.392-.875.876-.875h4.742a.875.875 0 110 1.75h-3.005c.359.424.809.91 1.342 1.393 1.526 1.383 3.658 2.69 6.254 2.69A9.625 9.625 0 0033.625 24c0-.483.392-.875.875-.875z"
        }
        fill={"#00A3E0"}
      ></path>
    </svg>
  );
}

export default TransferWeb48Svg4Icon;
/* prettier-ignore-end */
