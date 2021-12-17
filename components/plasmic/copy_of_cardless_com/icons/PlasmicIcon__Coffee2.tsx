// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Coffee2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Coffee2Icon(props: Coffee2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.948 4.25h6.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.058.434.074.95.078 1.545.31.001.562.008.788.053a2.75 2.75 0 012.161 2.16c.053.268.053.571.053.964v.146c0 .393 0 .696-.053.963a2.75 2.75 0 01-2.16 2.161c-.236.047-.5.053-.828.053-.012.215-.027.42-.047.612-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 01-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 01-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32V8.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.344-.08 2.243-.08zm10.8 9c.304-.002.413-.008.496-.024a1.25 1.25 0 00.982-.982c.02-.103.024-.243.024-.744 0-.5-.004-.641-.024-.744a1.25 1.25 0 00-.982-.982c-.083-.016-.19-.022-.494-.024v2.292c0 .43 0 .832-.003 1.207z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Coffee2Icon;
/* prettier-ignore-end */
