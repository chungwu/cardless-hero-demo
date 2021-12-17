// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2SvgIcon(props: Icon2SvgIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M27.447 14.105A1 1 0 0026 15v18a1 1 0 002 0v-6.22l.212-.052.054-.014c.682-.17 1.277-.319 1.75-.5.51-.194.983-.461 1.348-.93.366-.468.51-.99.576-1.533.06-.503.06-1.116.06-1.818v-2.508c0-.562 0-1.057-.043-1.47-.046-.448-.149-.882-.405-1.297-.257-.415-.6-.701-.979-.943-.35-.223-.793-.444-1.296-.695l-.041-.02-1.789-.895zm1.857 10.24c-.304.117-.707.224-1.304.374v-8.101l.341.17c.557.279.906.455 1.158.616.234.148.31.238.351.306.042.068.09.177.118.451.03.298.032.69.032 1.311v2.405c0 .774-.002 1.267-.046 1.636-.041.343-.108.466-.166.54-.058.075-.161.17-.484.293zM16.5 15a1 1 0 00-2 0v4.178c0 .65 0 1.218.053 1.687.058.508.187.998.51 1.449.324.45.747.728 1.21.945.428.2.966.382 1.582.59l.049.016.096.032V33a1 1 0 002 0v-9.103l.096-.032.049-.017c.615-.207 1.154-.388 1.582-.589.462-.217.886-.495 1.21-.945.323-.451.452-.941.51-1.449.053-.469.053-1.038.053-1.686V15a1 1 0 00-2 0v4.126c0 .717-.002 1.17-.04 1.513-.037.317-.096.435-.148.508-.052.072-.145.166-.434.301-.22.103-.497.206-.878.337V15a1 1 0 00-2 0v6.785a9.272 9.272 0 01-.878-.337c-.29-.135-.382-.229-.434-.301-.052-.073-.112-.19-.148-.508-.039-.342-.04-.796-.04-1.513V15z"
        }
        fill={"#F00303"}
      ></path>
    </svg>
  );
}

export default Icon2SvgIcon;
/* prettier-ignore-end */
