// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: UL0bObsgqj2z
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
import * as sty from "./PlasmicCareersInfoCard.module.css"; // plasmic-import: UL0bObsgqj2z/css

export type PlasmicCareersInfoCard__VariantMembers = {};

export type PlasmicCareersInfoCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCareersInfoCard__VariantsArgs;
export const PlasmicCareersInfoCard__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCareersInfoCard__ArgsType = {
  cardTitle?: React.ReactNode;
  cardSubtitle?: React.ReactNode;
  cardContent?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCareersInfoCard__ArgsType;
export const PlasmicCareersInfoCard__ArgProps = new Array<ArgPropType>(
  "cardTitle",
  "cardSubtitle",
  "cardContent"
);

export type PlasmicCareersInfoCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCareersInfoCardProps {
  cardTitle?: React.ReactNode;
  cardSubtitle?: React.ReactNode;
  cardContent?: React.ReactNode;
  className?: string;
}

function PlasmicCareersInfoCard__RenderFunc(props: {
  variants: PlasmicCareersInfoCard__VariantsArgs;
  args: PlasmicCareersInfoCard__ArgsType;
  overrides: PlasmicCareersInfoCard__OverridesType;
  dataFetches?: PlasmicCareersInfoCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__nnKzd)}>
        {p.renderPlasmicSlot({
          defaultContents: "Title Text",
          value: args.cardTitle,
          className: classNames(sty.slotTargetCardTitle)
        })}

        {p.renderPlasmicSlot({
          defaultContents: "SubText",
          value: args.cardSubtitle,
          className: classNames(sty.slotTargetCardSubtitle)
        })}
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__cFbCm)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vPbQn
              )}
            >
              {'"Quote"'}
            </div>
          ),

          value: args.cardContent,
          className: classNames(sty.slotTargetCardContent)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCareersInfoCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCareersInfoCard__VariantsArgs;
    args?: PlasmicCareersInfoCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCareersInfoCard__Fetches;
  } & Omit<PlasmicCareersInfoCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCareersInfoCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCareersInfoCard__ArgProps,
      internalVariantPropNames: PlasmicCareersInfoCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCareersInfoCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCareersInfoCard";
  } else {
    func.displayName = `PlasmicCareersInfoCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCareersInfoCard = Object.assign(
  // Top-level PlasmicCareersInfoCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCareersInfoCard
    internalVariantProps: PlasmicCareersInfoCard__VariantProps,
    internalArgProps: PlasmicCareersInfoCard__ArgProps
  }
);

export default PlasmicCareersInfoCard;
/* prettier-ignore-end */
