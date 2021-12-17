// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cutlery3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cutlery3Icon(props: Cutlery3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M5.544 2.097a.637.637 0 10-.9.9l2.195 2.195c.634.635.788.811.856 1.015.068.205.051.438-.076 1.327l-.004.03L3.422 3.37a.637.637 0 00-.9.9l4.192 4.194-.03.004c-.888.127-1.121.144-1.326.076-.204-.068-.38-.222-1.015-.856L2.148 5.492a.637.637 0 00-.9.9l2.195 2.196.088.088c.501.503.899.901 1.425 1.076.526.176 1.083.096 1.786-.006l.123-.017.975-.14.598.598-1.248 1.248-5.093 5.094a.637.637 0 00.9.9l5.094-5.093 1.248-1.248 3.794 3.795 2.547 2.546a.637.637 0 00.9-.9l-2.546-2.547-3.795-3.794.797-.798 2.097 2.097a.637.637 0 00.9 0l3.542-3.542.031-.031c.54-.54.99-.99 1.298-1.394.327-.428.555-.88.555-1.426 0-.547-.228-.999-.555-1.426-.309-.405-.758-.855-1.298-1.395l-.03-.03-.147-.146a.637.637 0 00-.9 0l-5.943 5.942L9.34 9.287l-.599-.598.14-.975.017-.123c.102-.703.182-1.26.006-1.786-.175-.526-.573-.924-1.076-1.426l-.088-.087-2.195-2.195z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cutlery3Icon;
/* prettier-ignore-end */
