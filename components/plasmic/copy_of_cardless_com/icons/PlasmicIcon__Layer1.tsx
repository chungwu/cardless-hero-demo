// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Layer1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Layer1Icon(props: Layer1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 153 32"}
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
          "M31.2 18.405c0-7.666 5.287-11.53 11.175-11.53 5.444 0 9.566 3.187 10.178 7.858h-4.45c-.322-2.48-2.707-4.187-5.732-4.187-3.93 0-6.892 2.738-6.892 7.859s2.967 7.827 6.892 7.827c3.096 0 5.476-1.708 5.862-4.156h4.256c-.452 4.67-4.573 7.86-10.114 7.86-5.99 0-11.176-3.866-11.176-11.531zm22.674 3.157c0-4.96 2.837-8.374 7.665-8.374 2.029 0 3.8.837 4.735 2.093v-1.836h3.961v16.233h-3.961v-1.9c-.774 1.29-2.642 2.158-4.67 2.158-4.897 0-7.73-3.414-7.73-8.374zm12.688 0c0-2.996-1.74-4.96-4.411-4.96-2.61 0-4.348 1.964-4.348 4.96s1.74 4.96 4.348 4.96c2.673 0 4.411-1.966 4.411-4.96zm13.626-4.8c-4.141 0-3.51 4.11-3.51 6.364v6.55h-3.963V13.445h3.962v2.867c.805-2.064 2.064-2.867 4.155-2.867h1.901v3.317h-2.545zm3.037 4.8c0-4.96 2.867-8.374 7.665-8.374 2.126 0 3.833.903 4.772 2.222V6.488h3.924v23.19h-3.93v-2.03c-.933 1.42-2.737 2.288-4.701 2.288-4.865 0-7.73-3.414-7.73-8.374zm12.689 0c0-2.996-1.74-4.96-4.385-4.96-2.645 0-4.385 1.964-4.385 4.96s1.74 4.96 4.385 4.96c2.645 0 4.385-1.966 4.385-4.96zm6.216-15.074h3.929v23.19h-3.929V6.487zm21.966 17.779c-.612 3.446-3.639 5.675-7.633 5.675-5.315 0-8.277-4.188-8.277-8.438 0-4.283 2.641-8.438 7.956-8.438 5.443 0 7.891 4.09 7.891 7.955 0 .549-.032 1.032-.064 1.353h-11.981c.29 2.61 1.964 4.284 4.476 4.284 2.029 0 3.353-.837 3.768-2.383h3.869l-.005-.008zm-12.014-4.513h7.984c-.161-2.064-1.578-3.611-3.93-3.611-2.218.007-3.635 1.167-4.054 3.614v-.003zm13.45 4.513h3.611c.161 1.548 1.352 2.513 3.123 2.513 1.548 0 2.579-.774 2.579-1.74 0-3.611-8.889-.161-8.889-7.02 0-2.838 2.48-4.832 5.829-4.832 3.801 0 6.41 2.093 6.571 5.25h-3.611c-.226-1.514-1.611-2.286-2.867-2.286-1.419 0-2.351.645-2.351 1.74 0 3.51 9.018-.355 9.018 6.988 0 3.06-2.48 5.057-6.28 5.057-3.931-.002-6.54-2.191-6.733-5.67zm14.333 0h3.611c.161 1.548 1.353 2.513 3.123 2.513 1.548 0 2.58-.774 2.58-1.74 0-3.611-8.89-.161-8.89-7.02 0-2.838 2.48-4.832 5.829-4.832 3.801 0 6.41 2.093 6.578 5.25h-3.611c-.226-1.514-1.611-2.286-2.867-2.286-1.419 0-2.351.645-2.351 1.74 0 3.51 9.018-.355 9.018 6.988 0 3.06-2.48 5.057-6.28 5.057-3.938-.002-6.549-2.191-6.74-5.67zM6.927 16.724v8.192a1.452 1.452 0 002.18 1.26l9.93-5.737a3.467 3.467 0 015.208 3 3.467 3.467 0 01-1.736 2.995l-8.944 5.171a2.907 2.907 0 01-2.909 0l-9.204-5.318A2.908 2.908 0 010 23.771V13.136a2.91 2.91 0 011.453-2.517L19.042.466a3.468 3.468 0 015.203 3.002A3.47 3.47 0 0122.51 6.47L8.016 14.836a2.182 2.182 0 00-1.09 1.888z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Layer1Icon;
/* prettier-ignore-end */