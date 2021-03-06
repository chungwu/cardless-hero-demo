// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: oJjF7smFRwcN
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

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicImageCard.module.css"; // plasmic-import: oJjF7smFRwcN/css

export type PlasmicImageCard__VariantMembers = {};

export type PlasmicImageCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicImageCard__VariantsArgs;
export const PlasmicImageCard__VariantProps = new Array<VariantPropType>();

export type PlasmicImageCard__ArgsType = {};
type ArgPropType = keyof PlasmicImageCard__ArgsType;
export const PlasmicImageCard__ArgProps = new Array<ArgPropType>();

export type PlasmicImageCard__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultImageCardProps {
  className?: string;
}

function PlasmicImageCard__RenderFunc(props: {
  variants: PlasmicImageCard__VariantsArgs;
  args: PlasmicImageCard__ArgsType;
  overrides: PlasmicImageCard__OverridesType;
  dataFetches?: PlasmicImageCard__Fetches;
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {(hasVariant(globalVariants, "screen", "laptopSmall") ? true : true) ? (
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "tabletSmall")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "tablet")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "laptopSmall")
                ? ("auto" as const)
                : hasVariant(globalVariants, "screen", "laptop")
                ? ("auto" as const)
                : ("40vw" as const)
            }
            displayMaxHeight={
              hasVariant(globalVariants, "screen", "laptopSmall")
                ? ("364px" as const)
                : ("720px" as const)
            }
            displayMaxWidth={
              hasVariant(globalVariants, "screen", "tablet")
                ? ("none" as const)
                : hasVariant(globalVariants, "screen", "laptopSmall")
                ? ("465px" as const)
                : hasVariant(globalVariants, "screen", "laptop")
                ? ("2033px" as const)
                : ("720px" as const)
            }
            displayMinHeight={
              hasVariant(globalVariants, "screen", "tabletSmall")
                ? ("565px" as const)
                : hasVariant(globalVariants, "screen", "tablet")
                ? ("938px" as const)
                : hasVariant(globalVariants, "screen", "laptop")
                ? ("635px" as const)
                : ("0" as const)
            }
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobile")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "tabletSmall")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "tablet")
                ? ("120vw" as const)
                : hasVariant(globalVariants, "screen", "laptopSmall")
                ? ("100%" as const)
                : hasVariant(globalVariants, "screen", "laptop")
                ? ("100%" as const)
                : ("40vw" as const)
            }
            loading={
              hasVariant(globalVariants, "screen", "laptopSmall")
                ? ("lazy" as const)
                : hasVariant(globalVariants, "screen", "laptop")
                ? ("lazy" as const)
                : ("lazy" as const)
            }
            src={
              hasVariant(globalVariants, "screen", "laptopSmall")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/manutdTranspNamepng.png",
                    fullWidth: 2400,
                    fullHeight: 2400,
                    aspectRatio: undefined
                  }
                : hasVariant(globalVariants, "screen", "laptop")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/manutdTranspNamepng.png",
                    fullWidth: 2400,
                    fullHeight: 2400,
                    aspectRatio: undefined
                  }
                : {
                    src: "/plasmic/copy_of_cardless_com/images/manutdTranspNamepng2.png",
                    fullWidth: 1200,
                    fullHeight: 1200,
                    aspectRatio: undefined
                  }
            }
          />
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicImageCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicImageCard__VariantsArgs;
    args?: PlasmicImageCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicImageCard__Fetches;
  } & Omit<PlasmicImageCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicImageCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicImageCard__ArgProps,
      internalVariantPropNames: PlasmicImageCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicImageCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicImageCard";
  } else {
    func.displayName = `PlasmicImageCard.${nodeName}`;
  }
  return func;
}

export const PlasmicImageCard = Object.assign(
  // Top-level PlasmicImageCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicImageCard
    internalVariantProps: PlasmicImageCard__VariantProps,
    internalArgProps: PlasmicImageCard__ArgProps
  }
);

export default PlasmicImageCard;
/* prettier-ignore-end */
