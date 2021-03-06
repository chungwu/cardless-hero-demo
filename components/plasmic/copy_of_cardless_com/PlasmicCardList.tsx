// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: aQKGnrPZ14KO
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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicCardList.module.css"; // plasmic-import: aQKGnrPZ14KO/css

export type PlasmicCardList__VariantMembers = {
  size: "_4" | "_5" | "_7";
  fade: "fade";
};

export type PlasmicCardList__VariantsArgs = {
  size?: SingleChoiceArg<"_4" | "_5" | "_7">;
  fade?: SingleBooleanChoiceArg<"fade">;
};

type VariantPropType = keyof PlasmicCardList__VariantsArgs;
export const PlasmicCardList__VariantProps = new Array<VariantPropType>(
  "size",
  "fade"
);

export type PlasmicCardList__ArgsType = {};
type ArgPropType = keyof PlasmicCardList__ArgsType;
export const PlasmicCardList__ArgProps = new Array<ArgPropType>();

export type PlasmicCardList__OverridesType = {
  root?: p.Flex<"div">;
  fade?: p.Flex<"div">;
  fade2?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  list?: p.Flex<"div">;
};

export interface DefaultCardListProps {
  size?: SingleChoiceArg<"_4" | "_5" | "_7">;
  fade?: SingleBooleanChoiceArg<"fade">;
  className?: string;
}

function PlasmicCardList__RenderFunc(props: {
  variants: PlasmicCardList__VariantsArgs;
  args: PlasmicCardList__ArgsType;
  overrides: PlasmicCardList__OverridesType;
  dataFetches?: PlasmicCardList__Fetches;
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
      {(hasVariant(variants, "fade", "fade") ? true : true) ? (
        <ArrowButton
          className={classNames("__wab_instance", sty.arrowButton__fAi1S, {
            [sty.arrowButton__fade__fAi1SThlqW]: hasVariant(
              variants,
              "fade",
              "fade"
            )
          })}
        />
      ) : null}
      {(hasVariant(variants, "fade", "fade") ? true : true) ? (
        <ArrowButton
          className={classNames("__wab_instance", sty.arrowButton__nOPfz, {
            [sty.arrowButton__fade__nOPfzThlqW]: hasVariant(
              variants,
              "fade",
              "fade"
            )
          })}
          right={"right" as const}
        />
      ) : null}
      {(
        hasVariant(variants, "fade", "fade")
          ? true
          : hasVariant(variants, "size", "_4")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"fade"}
          data-plasmic-override={overrides.fade}
          className={classNames(projectcss.all, sty.fade, {
            [sty.fade__fade]: hasVariant(variants, "fade", "fade"),
            [sty.fade__size__4]: hasVariant(variants, "size", "_4")
          })}
        />
      ) : null}
      {(
        hasVariant(variants, "fade", "fade")
          ? true
          : hasVariant(variants, "size", "_4")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"fade2"}
          data-plasmic-override={overrides.fade2}
          className={classNames(projectcss.all, sty.fade2, {
            [sty.fade2__fade]: hasVariant(variants, "fade", "fade"),
            [sty.fade2__size__4]: hasVariant(variants, "size", "_4")
          })}
        />
      ) : null}

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"list"}
          data-plasmic-override={overrides.list}
          hasGap={true}
          className={classNames(projectcss.all, sty.list, {
            [sty.list__fade]: hasVariant(variants, "fade", "fade")
          })}
        >
          <CardSelector
            className={classNames("__wab_instance", sty.cardSelector__qGu6Z)}
            logo={
              <BrandLogo
                className={classNames("__wab_instance", sty.brandLogo__aRkMf)}
                logos={"manUtd" as const}
              />
            }
            name={"Manchester United"}
          />

          <CardSelector
            className={classNames("__wab_instance", sty.cardSelector__w8Xg5)}
            logo={
              <BrandLogo
                className={classNames("__wab_instance", sty.brandLogo__zafqO)}
                logos={"cavs" as const}
              />
            }
            name={"Cleveland Cavaliers"}
          />

          <CardSelector
            className={classNames("__wab_instance", sty.cardSelector__o0As1)}
            logo={
              <BrandLogo
                className={classNames("__wab_instance", sty.brandLogo___5GolV)}
                logos={"marlins" as const}
              />
            }
            name={"Miami Marlins"}
          />

          <CardSelector
            className={classNames("__wab_instance", sty.cardSelector__sZmVw)}
            logo={
              <BrandLogo
                className={classNames("__wab_instance", sty.brandLogo___5SM9)}
                logos={"celtics" as const}
              />
            }
            name={"Boston Celtics"}
          />
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fade", "fade2", "freeBox", "list"],
  fade: ["fade"],
  fade2: ["fade2"],
  freeBox: ["freeBox", "list"],
  list: ["list"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  fade: "div";
  fade2: "div";
  freeBox: "div";
  list: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardList__VariantsArgs;
    args?: PlasmicCardList__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCardList__Fetches;
  } & Omit<PlasmicCardList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCardList__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCardList__ArgProps,
      internalVariantPropNames: PlasmicCardList__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCardList__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCardList";
  } else {
    func.displayName = `PlasmicCardList.${nodeName}`;
  }
  return func;
}

export const PlasmicCardList = Object.assign(
  // Top-level PlasmicCardList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fade: makeNodeComponent("fade"),
    fade2: makeNodeComponent("fade2"),
    freeBox: makeNodeComponent("freeBox"),
    list: makeNodeComponent("list"),

    // Metadata about props expected for PlasmicCardList
    internalVariantProps: PlasmicCardList__VariantProps,
    internalArgProps: PlasmicCardList__ArgProps
  }
);

export default PlasmicCardList;
/* prettier-ignore-end */
