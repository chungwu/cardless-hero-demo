// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Cutlery2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Cutlery2Icon(props: Cutlery2IconProps) {
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
          "M6.53 2.47a.75.75 0 00-1.06 1.06l2.585 2.586c.748.747.93.955 1.01 1.196.08.24.06.516-.09 1.562l-.005.035-4.94-4.94A.75.75 0 002.97 5.03l4.939 4.94-.035.005c-1.046.15-1.322.17-1.562.09-.24-.08-.449-.262-1.196-1.01L2.53 6.47a.75.75 0 00-1.06 1.06l2.585 2.586.104.104c.59.592 1.059 1.061 1.678 1.268.62.206 1.276.112 2.104-.008l.145-.02 1.149-.165.704.705-1.47 1.47-6 6a.75.75 0 101.061 1.06l6-6L11 13.06l4.47 4.47 3 3a.75.75 0 101.06-1.06l-3-3L12.06 12l.94-.94 2.47 2.47a.75.75 0 001.06 0l4.172-4.171.037-.037c.635-.635 1.165-1.165 1.529-1.642.384-.504.654-1.036.654-1.68 0-.644-.27-1.176-.654-1.68-.364-.477-.894-1.007-1.53-1.642l-.036-.037-.172-.171a.75.75 0 00-1.06 0l-7 7L11 10.94l-.704-.705.164-1.149.02-.145c.12-.828.214-1.484.008-2.104-.207-.62-.676-1.087-1.269-1.678l-.103-.104L6.53 2.47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Cutlery2Icon;
/* prettier-ignore-end */
