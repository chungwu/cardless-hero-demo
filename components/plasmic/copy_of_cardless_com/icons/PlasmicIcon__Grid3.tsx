// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Grid3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Grid3Icon(props: Grid3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 304 200"}
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
          "M22.942 0h-.706v23.333H0v.741h22.236v31.852H0v.74h22.236v6.667H0v.741h22.236v31.852H0v.74h22.236v6.667H0v.741h22.236v31.852H0v.741h22.236v6.666H0v.741h22.236v31.852H0v.741h22.236V200h.706v-23.333h36.354V200h.706v-23.333h6.353V200h.706v-23.333h36.707V200h.706v-23.333h6.353V200h.706v-23.333h36.354V200h.706v-23.333h6.354V200h.705v-23.333h36.355V200h.706v-23.333h6.353V200h.706v-23.333h36.707V200h.706v-23.333h6.353V200h.706v-23.333h36.354V200h.706v-23.333h22.236v-.741h-22.236v-31.852h22.236v-.741h-22.236v-6.666h22.236v-.741h-22.236v-31.852h22.236v-.741h-22.236v-6.666h22.236v-.741h-22.236V64.074h22.236v-.74h-22.236v-6.667h22.236v-.741h-22.236V24.074h22.236v-.74h-22.236V0h-.706v23.333h-36.354V0h-.706v23.333h-6.353V0h-.706v23.333h-36.707V0h-.706v23.333h-6.353V0h-.706v23.333h-36.355V0h-.705v23.333h-6.354V0h-.706v23.333h-36.354V0h-.706v23.333h-6.353V0h-.706v23.333H67.061V0h-.706v23.333h-6.353V0h-.706v23.333H22.942V0zm257.656 175.926v-31.852h-36.354v31.852h36.354zm-37.06 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852h-36.707v31.852h36.707zm-37.413 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852h-36.355v31.852h36.355zm-37.06 0v-31.852h-6.354v31.852h6.354zm-7.06 0v-31.852h-36.354v31.852h36.354zm-37.06 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852H67.061v31.852h36.707zm-37.413 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852H22.942v31.852h36.354zm0-32.593H22.942v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.353v6.666zm37.412 0H67.061v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.354v6.666zm37.06 0h-36.355v-6.666h36.355v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.413 0h-36.707v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm0-7.407v-31.852h-36.354v31.852h36.354zm-37.06 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852h-36.707v31.852h36.707zm-37.413 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852h-36.355v31.852h36.355zm-37.06 0v-31.852h-6.354v31.852h6.354zm-7.06 0v-31.852h-36.354v31.852h36.354zm-37.06 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852H67.061v31.852h36.707zm-37.413 0v-31.852h-6.353v31.852h6.353zm-7.059 0v-31.852H22.942v31.852h36.354zm0-32.593H22.942v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.353v6.666zm37.412 0H67.061v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.354v6.666zm37.06 0h-36.355v-6.666h36.355v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.413 0h-36.707v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm0-7.407V64.074h-36.354v31.852h36.354zm-37.06 0V64.074h-6.353v31.852h6.353zm-7.059 0V64.074h-36.707v31.852h36.707zm-37.413 0V64.074h-6.353v31.852h6.353zm-7.059 0V64.074h-36.355v31.852h36.355zm-37.06 0V64.074h-6.354v31.852h6.354zm-7.06 0V64.074h-36.354v31.852h36.354zm-37.06 0V64.074h-6.353v31.852h6.353zm-7.059 0V64.074H67.061v31.852h36.707zm-37.413 0V64.074h-6.353v31.852h6.353zm-7.059 0V64.074H22.942v31.852h36.354zm0-32.593H22.942v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.353v6.666zm37.412 0H67.061v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm7.06 0h-6.354v-6.666h6.354v6.666zm37.06 0h-36.355v-6.666h36.355v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.413 0h-36.707v-6.666h36.707v6.666zm7.059 0h-6.353v-6.666h6.353v6.666zm37.06 0h-36.354v-6.666h36.354v6.666zm0-7.407V24.074h-36.354v31.852h36.354zm-37.06 0V24.074h-6.353v31.852h6.353zm-7.059 0V24.074h-36.707v31.852h36.707zm-37.413 0V24.074h-6.353v31.852h6.353zm-7.059 0V24.074h-36.355v31.852h36.355zm-37.06 0V24.074h-6.354v31.852h6.354zm-7.06 0V24.074h-36.354v31.852h36.354zm-37.06 0V24.074h-6.353v31.852h6.353zm-7.059 0V24.074H67.061v31.852h36.707zm-37.413 0V24.074h-6.353v31.852h6.353zm-7.059 0V24.074H22.942v31.852h36.354z"
        }
        fill={"currentColor"}
        fillOpacity={".7"}
      ></path>
    </svg>
  );
}

export default Grid3Icon;
/* prettier-ignore-end */
