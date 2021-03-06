// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: T8OSoIuEHjkb
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
import ItemCarouselItem from "../../ItemCarouselItem"; // plasmic-import: zUXky6xuKkg7/component
import ArrowButton from "../../ArrowButton"; // plasmic-import: LVNvmxA1SLWB/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicItemCarousel.module.css"; // plasmic-import: T8OSoIuEHjkb/css

export type PlasmicItemCarousel__VariantMembers = {
  inWrapper: "inWrapper";
};

export type PlasmicItemCarousel__VariantsArgs = {
  inWrapper?: SingleBooleanChoiceArg<"inWrapper">;
};

type VariantPropType = keyof PlasmicItemCarousel__VariantsArgs;
export const PlasmicItemCarousel__VariantProps = new Array<VariantPropType>(
  "inWrapper"
);

export type PlasmicItemCarousel__ArgsType = {
  items?: React.ReactNode;
};

type ArgPropType = keyof PlasmicItemCarousel__ArgsType;
export const PlasmicItemCarousel__ArgProps = new Array<ArgPropType>("items");

export type PlasmicItemCarousel__OverridesType = {
  root?: p.Flex<"div">;
  itemRow?: p.Flex<"div">;
  controlButtons?: p.Flex<"div">;
  leftButton?: p.Flex<typeof ArrowButton>;
  rightButton?: p.Flex<typeof ArrowButton>;
};

export interface DefaultItemCarouselProps {
  items?: React.ReactNode;
  inWrapper?: SingleBooleanChoiceArg<"inWrapper">;
  className?: string;
}

function PlasmicItemCarousel__RenderFunc(props: {
  variants: PlasmicItemCarousel__VariantsArgs;
  args: PlasmicItemCarousel__ArgsType;
  overrides: PlasmicItemCarousel__OverridesType;
  dataFetches?: PlasmicItemCarousel__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.root,
        "itemCarousel" as const
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"itemRow"}
        data-plasmic-override={overrides.itemRow}
        hasGap={true}
        className={classNames(
          projectcss.all,
          sty.itemRow,
          "itemScrollContainer hiddenScrollBar" as const,
          {
            [sty.itemRow__inWrapper]: hasVariant(
              variants,
              "inWrapper",
              "inWrapper"
            )
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <ItemCarouselItem
                className={classNames(
                  "__wab_instance",
                  sty.itemCarouselItem__wiInz
                )}
              />

              <ItemCarouselItem
                className={classNames(
                  "__wab_instance",
                  sty.itemCarouselItem__blS6M
                )}
                title={"Item 2"}
              />

              <ItemCarouselItem
                className={classNames(
                  "__wab_instance",
                  sty.itemCarouselItem__iwD
                )}
                title={"Item 3"}
              />

              <ItemCarouselItem
                className={classNames(
                  "__wab_instance",
                  sty.itemCarouselItem__jEcl6
                )}
                title={"Item 4\n"}
              />

              <ItemCarouselItem
                className={classNames(
                  "__wab_instance",
                  sty.itemCarouselItem__sejHq
                )}
                title={"Item 2"}
              />
            </React.Fragment>
          ),
          value: args.items
        })}
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"controlButtons"}
          data-plasmic-override={overrides.controlButtons}
          hasGap={true}
          className={classNames(projectcss.all, sty.controlButtons)}
        >
          <ArrowButton
            data-plasmic-name={"leftButton"}
            data-plasmic-override={overrides.leftButton}
            className={classNames("__wab_instance", sty.leftButton)}
          />

          <ArrowButton
            data-plasmic-name={"rightButton"}
            data-plasmic-override={overrides.rightButton}
            className={classNames("__wab_instance", sty.rightButton)}
            right={"right" as const}
          />
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "itemRow", "controlButtons", "leftButton", "rightButton"],
  itemRow: ["itemRow"],
  controlButtons: ["controlButtons", "leftButton", "rightButton"],
  leftButton: ["leftButton"],
  rightButton: ["rightButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  itemRow: "div";
  controlButtons: "div";
  leftButton: typeof ArrowButton;
  rightButton: typeof ArrowButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicItemCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicItemCarousel__VariantsArgs;
    args?: PlasmicItemCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicItemCarousel__Fetches;
  } & Omit<PlasmicItemCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicItemCarousel__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicItemCarousel__ArgProps,
      internalVariantPropNames: PlasmicItemCarousel__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicItemCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItemCarousel";
  } else {
    func.displayName = `PlasmicItemCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicItemCarousel = Object.assign(
  // Top-level PlasmicItemCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    itemRow: makeNodeComponent("itemRow"),
    controlButtons: makeNodeComponent("controlButtons"),
    leftButton: makeNodeComponent("leftButton"),
    rightButton: makeNodeComponent("rightButton"),

    // Metadata about props expected for PlasmicItemCarousel
    internalVariantProps: PlasmicItemCarousel__VariantProps,
    internalArgProps: PlasmicItemCarousel__ArgProps
  }
);

export default PlasmicItemCarousel;
/* prettier-ignore-end */
