// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 36"}
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
          "M24.893 18.994c-.042-4.512 3.79-6.708 3.964-6.81-2.17-3.084-5.532-3.505-6.714-3.539-2.824-.29-5.564 1.648-7.003 1.648-1.467 0-3.683-1.62-6.07-1.572-3.074.046-5.948 1.78-7.525 4.474-3.254 5.492-.827 13.563 2.29 18.003 1.56 2.174 3.382 4.601 5.767 4.516 2.333-.094 3.205-1.45 6.02-1.45 2.79 0 3.61 1.45 6.041 1.395 2.505-.039 4.081-2.184 5.586-4.377 1.802-2.492 2.526-4.947 2.555-5.073-.06-.02-4.864-1.807-4.911-7.215zM20.298 5.725c1.255-1.53 2.114-3.612 1.875-5.725-1.816.078-4.088 1.225-5.396 2.722-1.157 1.318-2.191 3.48-1.924 5.513 2.04.148 4.135-1.004 5.445-2.51z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
