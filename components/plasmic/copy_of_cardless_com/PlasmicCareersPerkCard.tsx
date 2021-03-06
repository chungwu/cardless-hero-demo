// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: x7GIpgt-pnBq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicCareersPerkCard.module.css"; // plasmic-import: x7GIpgt-pnBq/css

import Group4Icon from "./icons/PlasmicIcon__Group4"; // plasmic-import: rePQFkfOwMOk5/icon
import Cutlery5Icon from "./icons/PlasmicIcon__Cutlery5"; // plasmic-import: P6Q6zf2191kAT/icon
import CompassIcon from "./icons/PlasmicIcon__Compass"; // plasmic-import: lL-_sQ7LqZfMI/icon
import Sun1Icon from "./icons/PlasmicIcon__Sun1"; // plasmic-import: VAsFC2gKRwCVz/icon
import DollarSignIcon from "./icons/PlasmicIcon__DollarSign"; // plasmic-import: ym90mEN_vW8VX/icon
import BatteryCharging21Icon from "./icons/PlasmicIcon__BatteryCharging21"; // plasmic-import: aiwDM3K3OLBVp/icon
import Heart2Icon from "./icons/PlasmicIcon__Heart2"; // plasmic-import: DqSLlcmt6RIOG/icon
import Users1Icon from "./icons/PlasmicIcon__Users1"; // plasmic-import: 9GHDUb3-zFBI-/icon
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: nSAucjCNg2r89/icon

export type PlasmicCareersPerkCard__VariantMembers = {
  careersPage:
    | "lunch"
    | "transit"
    | "childcare"
    | "compensation"
    | "recharge"
    | "health"
    | "adventures"
    | "home";
};

export type PlasmicCareersPerkCard__VariantsArgs = {
  careersPage?: MultiChoiceArg<
    | "lunch"
    | "transit"
    | "childcare"
    | "compensation"
    | "recharge"
    | "health"
    | "adventures"
    | "home"
  >;
};

type VariantPropType = keyof PlasmicCareersPerkCard__VariantsArgs;
export const PlasmicCareersPerkCard__VariantProps = new Array<VariantPropType>(
  "careersPage"
);

export type PlasmicCareersPerkCard__ArgsType = {};
type ArgPropType = keyof PlasmicCareersPerkCard__ArgsType;
export const PlasmicCareersPerkCard__ArgProps = new Array<ArgPropType>();

export type PlasmicCareersPerkCard__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultCareersPerkCardProps {
  careersPage?: MultiChoiceArg<
    | "lunch"
    | "transit"
    | "childcare"
    | "compensation"
    | "recharge"
    | "health"
    | "adventures"
    | "home"
  >;
  className?: string;
}

function PlasmicCareersPerkCard__RenderFunc(props: {
  variants: PlasmicCareersPerkCard__VariantsArgs;
  args: PlasmicCareersPerkCard__ArgsType;
  overrides: PlasmicCareersPerkCard__OverridesType;
  dataFetches?: PlasmicCareersPerkCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___2HsT5)}>
        <div className={classNames(projectcss.all, sty.freeBox__x5JaO)}>
          <div className={classNames(projectcss.all, sty.freeBox___3Pw5)}>
            <p.PlasmicIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              PlasmicIconType={
                hasVariant(variants, "careersPage", "home")
                  ? HomeIcon
                  : hasVariant(variants, "careersPage", "adventures")
                  ? Users1Icon
                  : hasVariant(variants, "careersPage", "health")
                  ? Heart2Icon
                  : hasVariant(variants, "careersPage", "recharge")
                  ? BatteryCharging21Icon
                  : hasVariant(variants, "careersPage", "compensation")
                  ? DollarSignIcon
                  : hasVariant(variants, "careersPage", "childcare")
                  ? Sun1Icon
                  : hasVariant(variants, "careersPage", "transit")
                  ? CompassIcon
                  : hasVariant(variants, "careersPage", "lunch")
                  ? Cutlery5Icon
                  : Group4Icon
              }
              className={classNames(projectcss.all, sty.svg, {
                [sty.svg__careersPage_adventures]: hasVariant(
                  variants,
                  "careersPage",
                  "adventures"
                ),
                [sty.svg__careersPage_childcare]: hasVariant(
                  variants,
                  "careersPage",
                  "childcare"
                ),
                [sty.svg__careersPage_compensation]: hasVariant(
                  variants,
                  "careersPage",
                  "compensation"
                ),
                [sty.svg__careersPage_health]: hasVariant(
                  variants,
                  "careersPage",
                  "health"
                ),
                [sty.svg__careersPage_home]: hasVariant(
                  variants,
                  "careersPage",
                  "home"
                ),
                [sty.svg__careersPage_lunch]: hasVariant(
                  variants,
                  "careersPage",
                  "lunch"
                ),
                [sty.svg__careersPage_recharge]: hasVariant(
                  variants,
                  "careersPage",
                  "recharge"
                ),
                [sty.svg__careersPage_transit]: hasVariant(
                  variants,
                  "careersPage",
                  "transit"
                )
              })}
              role={"img"}
            />
          </div>
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__t8ArO)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xfz7A,
            {
              [sty.text__careersPage_adventures__xfz7AYekm]: hasVariant(
                variants,
                "careersPage",
                "adventures"
              ),
              [sty.text__careersPage_childcare__xfz7A6ZCh]: hasVariant(
                variants,
                "careersPage",
                "childcare"
              ),
              [sty.text__careersPage_health__xfz7A5Mg0]: hasVariant(
                variants,
                "careersPage",
                "health"
              ),
              [sty.text__careersPage_home__xfz7AE0Xdj]: hasVariant(
                variants,
                "careersPage",
                "home"
              ),
              [sty.text__careersPage_lunch__xfz7Ai8Mz2]: hasVariant(
                variants,
                "careersPage",
                "lunch"
              ),
              [sty.text__careersPage_recharge__xfz7A4GdMq]: hasVariant(
                variants,
                "careersPage",
                "recharge"
              ),
              [sty.text__careersPage_transit__xfz7APt5WQ]: hasVariant(
                variants,
                "careersPage",
                "transit"
              )
            }
          )}
        >
          {hasVariant(variants, "careersPage", "home")
            ? "Home office stipend"
            : hasVariant(variants, "careersPage", "adventures")
            ? "Adventures"
            : hasVariant(variants, "careersPage", "health")
            ? "Health"
            : hasVariant(variants, "careersPage", "recharge")
            ? "Recharge"
            : hasVariant(variants, "careersPage", "childcare")
            ? "Childcare"
            : hasVariant(variants, "careersPage", "transit")
            ? "Transit"
            : hasVariant(variants, "careersPage", "lunch")
            ? "Catered Lunches"
            : "Compensation"}
        </div>
      </div>

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__rmM2S,
          {
            [sty.text__careersPage_adventures__rmM2SYekm]: hasVariant(
              variants,
              "careersPage",
              "adventures"
            ),
            [sty.text__careersPage_childcare__rmM2S6ZCh]: hasVariant(
              variants,
              "careersPage",
              "childcare"
            ),
            [sty.text__careersPage_health__rmM2S5Mg0]: hasVariant(
              variants,
              "careersPage",
              "health"
            ),
            [sty.text__careersPage_home__rmM2SE0Xdj]: hasVariant(
              variants,
              "careersPage",
              "home"
            ),
            [sty.text__careersPage_lunch__rmM2Si8Mz2]: hasVariant(
              variants,
              "careersPage",
              "lunch"
            ),
            [sty.text__careersPage_recharge__rmM2S4GdMq]: hasVariant(
              variants,
              "careersPage",
              "recharge"
            ),
            [sty.text__careersPage_transit__rmM2SPt5WQ]: hasVariant(
              variants,
              "careersPage",
              "transit"
            )
          }
        )}
      >
        {hasVariant(variants, "careersPage", "home")
          ? "We help you cover expenses for your home-office setup"
          : hasVariant(variants, "careersPage", "adventures")
          ? "Amazing team trips and offsites, including via our brand partners"
          : hasVariant(variants, "careersPage", "health")
          ? "Top-of-the-line healthcare (medical, vision, and dental)"
          : hasVariant(variants, "careersPage", "recharge")
          ? "Unlimited paid time off, with a minimum of 15 days off per year"
          : hasVariant(variants, "careersPage", "childcare")
          ? "We provide a generous monthly childcare stipend"
          : hasVariant(variants, "careersPage", "transit")
          ? "We offset the cost of public transit and parking passes"
          : hasVariant(variants, "careersPage", "lunch")
          ? "We cater lunch daily at our beautiful office in San Francisco and provide plenty of snacks and drinks"
          : "Competitive salary, meaningful equity and a 401(k) plan"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCareersPerkCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCareersPerkCard__VariantsArgs;
    args?: PlasmicCareersPerkCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCareersPerkCard__Fetches;
  } & Omit<PlasmicCareersPerkCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCareersPerkCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCareersPerkCard__ArgProps,
      internalVariantPropNames: PlasmicCareersPerkCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCareersPerkCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCareersPerkCard";
  } else {
    func.displayName = `PlasmicCareersPerkCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCareersPerkCard = Object.assign(
  // Top-level PlasmicCareersPerkCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicCareersPerkCard
    internalVariantProps: PlasmicCareersPerkCard__VariantProps,
    internalArgProps: PlasmicCareersPerkCard__ArgProps
  }
);

export default PlasmicCareersPerkCard;
/* prettier-ignore-end */
