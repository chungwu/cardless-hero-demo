// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProfilePicture4SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProfilePicture4SvgIcon(props: ProfilePicture4SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 41 40"}
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

      <circle cx={"20.333"} cy={"20"} r={"20"} fill={"currentColor"}></circle>

      <defs>
        <pattern
          id={"Yz1g5Pdyca"}
          patternContentUnits={"objectBoundingBox"}
          width={"1"}
          height={"1"}
        >
          <use xlinkHref={"#Yz1g5Pdycb"} transform={"scale(.0025)"}></use>
        </pattern>

        <image
          id={"Yz1g5Pdycb"}
          width={"400"}
          height={"400"}
          xlinkHref={
            "data:image/png;base64,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gnUJws/eVIoZU8Xfnfo9+8+xl6wjWAPh3dcllEunEKwojbluFzOVYnxni+G879n2sbt+CFZkhB8fnJ1MlyfSQz/sqjfba7ut9det1e1j61MIVrSV8qnyxLDF612k1naPfQgewRraeN24np6dTN+4no7cF8DWd1uvaq1qLVjbbRlJIVixU55MF8ZSpXzqRj5dup4aqPFXtRZs7wXVWlCttV69CRSKAeG5k0uz9rqVSLQSWx8kbHwkWcqnwy/0jI8kez0Q22kEO3vt/zbb1VpQb7arb1rbjbY8YYTFheaSX2R/++DYu/+/kEsWT70j+arWqjc/ylOQSCTCQjmwGGHRkwnar39puwCx5vkSQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIEyyEABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECwAwQIQLECwAAQLQLAAwQIQLECwAAQLQLAAwQIQLADBAgQLQLAABAsQLADBAhAsQLAABAtAsADBAhAsAMECBAtAsAAECxAsAMECECxAsAAEC0CwAMECECxAsAAEC0CwAMECECwAwQIEC0CwAAQLECyAAfL/ZA8PQkEwO44AAAAASUVORK5CYII="
          }
        ></image>
      </defs>
    </svg>
  );
}

export default ProfilePicture4SvgIcon;
/* prettier-ignore-end */
