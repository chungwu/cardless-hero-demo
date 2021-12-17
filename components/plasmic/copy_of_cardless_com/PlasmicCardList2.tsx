// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: uuQnBH6TBKAT
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
import ArrowButton from "../../ArrowButton"; // plasmic-import: LVNvmxA1SLWB/component
import CardSelector from "../../CardSelector"; // plasmic-import: 0PjlvTKr4NOS/component
import BrandLogo from "../../BrandLogo"; // plasmic-import: Ih8CO7qIPWwS/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicCardList2.module.css"; // plasmic-import: uuQnBH6TBKAT/css

export type PlasmicCardList2__VariantMembers = {
  size: "_4" | "_5" | "_7";
  fade: "fade";
};

export type PlasmicCardList2__VariantsArgs = {
  size?: SingleChoiceArg<"_4" | "_5" | "_7">;
  fade?: SingleBooleanChoiceArg<"fade">;
};

type VariantPropType = keyof PlasmicCardList2__VariantsArgs;
export const PlasmicCardList2__VariantProps = new Array<VariantPropType>(
  "size",
  "fade"
);

export type PlasmicCardList2__ArgsType = {};
type ArgPropType = keyof PlasmicCardList2__ArgsType;
export const PlasmicCardList2__ArgProps = new Array<ArgPropType>();

export type PlasmicCardList2__OverridesType = {
  root?: p.Flex<"div">;
  list?: p.Flex<"div">;
  manUtd?: p.Flex<typeof CardSelector>;
  cavs?: p.Flex<typeof CardSelector>;
  celtics?: p.Flex<typeof CardSelector>;
  marlins?: p.Flex<typeof CardSelector>;
  fadeGradient?: p.Flex<"div">;
};

export interface DefaultCardList2Props {
  size?: SingleChoiceArg<"_4" | "_5" | "_7">;
  fade?: SingleBooleanChoiceArg<"fade">;
  className?: string;
}

function PlasmicCardList2__RenderFunc(props: {
  variants: PlasmicCardList2__VariantsArgs;
  args: PlasmicCardList2__ArgsType;
  overrides: PlasmicCardList2__OverridesType;
  dataFetches?: PlasmicCardList2__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___7IrJi)}>
        <div className={classNames(projectcss.all, sty.freeBox___3FlHf)}>
          {(
            hasVariant(variants, "fade", "fade")
              ? true
              : hasVariant(globalVariants, "screen", "tablet")
              ? true
              : true
          ) ? (
            <ArrowButton
              className={classNames("__wab_instance", sty.arrowButton__utNtA, {
                [sty.arrowButton__fade__utNtAlpnn4]: hasVariant(
                  variants,
                  "fade",
                  "fade"
                )
              })}
            />
          ) : null}
          {(
            hasVariant(variants, "fade", "fade")
              ? true
              : hasVariant(globalVariants, "screen", "tablet")
              ? true
              : true
          ) ? (
            <ArrowButton
              className={classNames("__wab_instance", sty.arrowButton__uf5T0, {
                [sty.arrowButton__fade__uf5T0Lpnn4]: hasVariant(
                  variants,
                  "fade",
                  "fade"
                )
              })}
              right={"right" as const}
            />
          ) : null}

          <p.Stack
            as={"div"}
            data-plasmic-name={"list"}
            data-plasmic-override={overrides.list}
            hasGap={true}
            className={classNames(projectcss.all, sty.list, {
              [sty.list__fade]: hasVariant(variants, "fade", "fade"),
              [sty.list__size__4]: hasVariant(variants, "size", "_4")
            })}
          >
            <CardSelector
              data-plasmic-name={"manUtd"}
              data-plasmic-override={overrides.manUtd}
              active={
                hasVariant(globalVariants, "screen", "tablet")
                  ? ("active" as const)
                  : undefined
              }
              className={classNames("__wab_instance", sty.manUtd, {
                [sty.manUtd__fade]: hasVariant(variants, "fade", "fade")
              })}
              logo={
                <BrandLogo
                  className={classNames("__wab_instance", sty.brandLogo__jOcZf)}
                  logos={"manUtd" as const}
                />
              }
              name={"Manchester United"}
            />

            <CardSelector
              data-plasmic-name={"cavs"}
              data-plasmic-override={overrides.cavs}
              active={
                hasVariant(globalVariants, "screen", "tablet")
                  ? ("active" as const)
                  : undefined
              }
              className={classNames("__wab_instance", sty.cavs)}
              logo={
                <BrandLogo
                  className={classNames("__wab_instance", sty.brandLogo__r87Mh)}
                  logos={"cavs" as const}
                />
              }
              name={"Cleveland Cavaliers"}
            />

            <CardSelector
              data-plasmic-name={"celtics"}
              data-plasmic-override={overrides.celtics}
              active={
                hasVariant(globalVariants, "screen", "tablet")
                  ? ("active" as const)
                  : undefined
              }
              className={classNames("__wab_instance", sty.celtics)}
              logo={
                <BrandLogo
                  className={classNames("__wab_instance", sty.brandLogo__gFibg)}
                  logos={"celtics" as const}
                />
              }
              name={"Boston Celtics"}
            />

            <CardSelector
              data-plasmic-name={"marlins"}
              data-plasmic-override={overrides.marlins}
              active={
                hasVariant(globalVariants, "screen", "tablet")
                  ? ("active" as const)
                  : undefined
              }
              className={classNames("__wab_instance", sty.marlins)}
              logo={
                <BrandLogo
                  className={classNames(
                    "__wab_instance",
                    sty.brandLogo___9VpWp
                  )}
                  logos={"marlins" as const}
                />
              }
              name={"Miami Marlins"}
            />
          </p.Stack>

          {(
            hasVariant(variants, "fade", "fade")
              ? true
              : hasVariant(globalVariants, "screen", "tablet")
              ? true
              : true
          ) ? (
            <div
              data-plasmic-name={"fadeGradient"}
              data-plasmic-override={overrides.fadeGradient}
              className={classNames(projectcss.all, sty.fadeGradient, {
                [sty.fadeGradient__fade]: hasVariant(variants, "fade", "fade"),
                [sty.fadeGradient__size__4]: hasVariant(variants, "size", "_4")
              })}
            />
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "list",
    "manUtd",
    "cavs",
    "celtics",
    "marlins",
    "fadeGradient"
  ],
  list: ["list", "manUtd", "cavs", "celtics", "marlins"],
  manUtd: ["manUtd"],
  cavs: ["cavs"],
  celtics: ["celtics"],
  marlins: ["marlins"],
  fadeGradient: ["fadeGradient"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  list: "div";
  manUtd: typeof CardSelector;
  cavs: typeof CardSelector;
  celtics: typeof CardSelector;
  marlins: typeof CardSelector;
  fadeGradient: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardList2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardList2__VariantsArgs;
    args?: PlasmicCardList2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardList2__Fetches;
  } & Omit<PlasmicCardList2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardList2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardList2__ArgProps,
      internalVariantPropNames: PlasmicCardList2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardList2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardList2";
  } else {
    func.displayName = `PlasmicCardList2.${nodeName}`;
  }
  return func;
}

export const PlasmicCardList2 = Object.assign(
  // Top-level PlasmicCardList2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    list: makeNodeComponent("list"),
    manUtd: makeNodeComponent("manUtd"),
    cavs: makeNodeComponent("cavs"),
    celtics: makeNodeComponent("celtics"),
    marlins: makeNodeComponent("marlins"),
    fadeGradient: makeNodeComponent("fadeGradient"),

    // Metadata about props expected for PlasmicCardList2
    internalVariantProps: PlasmicCardList2__VariantProps,
    internalArgProps: PlasmicCardList2__ArgProps
  }
);

export default PlasmicCardList2;
/* prettier-ignore-end */