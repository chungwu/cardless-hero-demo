// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: dzOYVotBa55E
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
import ImageLeft from "../../ImageLeft"; // plasmic-import: i5UR_SxBMe0v/component
import OfferTerms from "../../OfferTerms"; // plasmic-import: JiFB2-JKD_Yz/component
import NavButton from "../../NavButton"; // plasmic-import: s0OJmmocqt8k/component

import { useScreenVariants as useScreenVariantsbUUiKYc55Zpu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bUUiKYc55Zpu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "./plasmic_copy_of_cardless_com.module.css"; // plasmic-import: 5bwAVSS7yxRyYYekzZSF6R/projectcss
import * as sty from "./PlasmicHomePageRightCardForYouContent.module.css"; // plasmic-import: dzOYVotBa55E/css

import ArrowRightIcon from "./icons/PlasmicIcon__ArrowRight"; // plasmic-import: E7YdTcD7oFygJ/icon

export type PlasmicHomePageRightCardForYouContent__VariantMembers = {
  slide: "manUtd" | "cavs" | "celtics" | "marlins";
};

export type PlasmicHomePageRightCardForYouContent__VariantsArgs = {
  slide?: SingleChoiceArg<"manUtd" | "cavs" | "celtics" | "marlins">;
};

type VariantPropType =
  keyof PlasmicHomePageRightCardForYouContent__VariantsArgs;
export const PlasmicHomePageRightCardForYouContent__VariantProps =
  new Array<VariantPropType>("slide");

export type PlasmicHomePageRightCardForYouContent__ArgsType = {};
type ArgPropType = keyof PlasmicHomePageRightCardForYouContent__ArgsType;
export const PlasmicHomePageRightCardForYouContent__ArgProps =
  new Array<ArgPropType>();

export type PlasmicHomePageRightCardForYouContent__OverridesType = {
  root?: p.Flex<typeof ImageLeft>;
  copyDownloadButtons10?: p.Flex<"div">;
  copy13?: p.Flex<"div">;
  heading10?: p.Flex<"div">;
  offer2?: p.Flex<typeof OfferTerms>;
  navButton?: p.Flex<typeof NavButton>;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHomePageRightCardForYouContentProps {
  slide?: SingleChoiceArg<"manUtd" | "cavs" | "celtics" | "marlins">;
  className?: string;
}

function PlasmicHomePageRightCardForYouContent__RenderFunc(props: {
  variants: PlasmicHomePageRightCardForYouContent__VariantsArgs;
  args: PlasmicHomePageRightCardForYouContent__ArgsType;
  overrides: PlasmicHomePageRightCardForYouContent__OverridesType;
  dataFetches?: PlasmicHomePageRightCardForYouContent__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbUUiKYc55Zpu()
  });

  return (
    <ImageLeft
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root, {
        [sty.root__slide_celtics]: hasVariant(variants, "slide", "celtics"),
        [sty.root__slide_manUtd]: hasVariant(variants, "slide", "manUtd"),
        [sty.root__slide_marlins]: hasVariant(variants, "slide", "marlins")
      })}
      flipSections={
        hasVariant(globalVariants, "screen", "tablet")
          ? ("flipSections" as const)
          : undefined
      }
      slot={
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBox__slide_cavs]: hasVariant(variants, "slide", "cavs"),
            [sty.freeBox__slide_celtics]: hasVariant(
              variants,
              "slide",
              "celtics"
            ),
            [sty.freeBox__slide_manUtd]: hasVariant(
              variants,
              "slide",
              "manUtd"
            ),
            [sty.freeBox__slide_marlins]: hasVariant(
              variants,
              "slide",
              "marlins"
            )
          })}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.img__slide_cavs]: hasVariant(variants, "slide", "cavs"),
              [sty.img__slide_celtics]: hasVariant(
                variants,
                "slide",
                "celtics"
              ),
              [sty.img__slide_manUtd]: hasVariant(variants, "slide", "manUtd"),
              [sty.img__slide_marlins]: hasVariant(variants, "slide", "marlins")
            })}
            displayHeight={
              hasVariant(globalVariants, "screen", "tablet")
                ? ("100%" as const)
                : ("100%" as const)
            }
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "tablet")
                ? ("120%" as const)
                : ("120%" as const)
            }
            loading={"eager" as const}
            src={
              hasVariant(variants, "slide", "marlins")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/marlinsTranspNamepng.png",
                    fullWidth: 1200,
                    fullHeight: 1200,
                    aspectRatio: undefined
                  }
                : hasVariant(variants, "slide", "celtics")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/celticsTranspNamepng.png",
                    fullWidth: 1200,
                    fullHeight: 1200,
                    aspectRatio: undefined
                  }
                : hasVariant(variants, "slide", "cavs")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/cavsTranspNamepng.png",
                    fullWidth: 1200,
                    fullHeight: 1200,
                    aspectRatio: undefined
                  }
                : hasVariant(variants, "slide", "manUtd")
                ? {
                    src: "/plasmic/copy_of_cardless_com/images/manutdTranspNamepng2.png",
                    fullWidth: 1200,
                    fullHeight: 1200,
                    aspectRatio: undefined
                  }
                : undefined
            }
          />
        </div>
      }
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"copyDownloadButtons10"}
        data-plasmic-override={overrides.copyDownloadButtons10}
        hasGap={true}
        className={classNames(projectcss.all, sty.copyDownloadButtons10)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"copy13"}
          data-plasmic-override={overrides.copy13}
          hasGap={true}
          className={classNames(projectcss.all, sty.copy13)}
        >
          <div
            data-plasmic-name={"heading10"}
            data-plasmic-override={overrides.heading10}
            className={classNames(projectcss.all, sty.heading10)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mmSJ,
                {
                  [sty.text__slide_cavs__mmSJyEJpa]: hasVariant(
                    variants,
                    "slide",
                    "cavs"
                  ),
                  [sty.text__slide_celtics__mmSJ9TM6M]: hasVariant(
                    variants,
                    "slide",
                    "celtics"
                  ),
                  [sty.text__slide_manUtd__mmSJeOzKr]: hasVariant(
                    variants,
                    "slide",
                    "manUtd"
                  ),
                  [sty.text__slide_marlins__mmSJ5AVcj]: hasVariant(
                    variants,
                    "slide",
                    "marlins"
                  )
                }
              )}
            >
              {hasVariant(variants, "slide", "marlins")
                ? "Miami Marlins"
                : hasVariant(variants, "slide", "celtics")
                ? "Boston Celtics"
                : hasVariant(variants, "slide", "cavs")
                ? "Cleveland Cavaliers"
                : hasVariant(variants, "slide", "manUtd")
                ? "Manchester United"
                : "Limited Time Offer"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ffAu,
                {
                  [sty.text__slide_cavs__ffAuYEJpa]: hasVariant(
                    variants,
                    "slide",
                    "cavs"
                  ),
                  [sty.text__slide_celtics__ffAu9TM6M]: hasVariant(
                    variants,
                    "slide",
                    "celtics"
                  ),
                  [sty.text__slide_manUtd__ffAuEOzKr]: hasVariant(
                    variants,
                    "slide",
                    "manUtd"
                  ),
                  [sty.text__slide_marlins__ffAu5AVcj]: hasVariant(
                    variants,
                    "slide",
                    "marlins"
                  )
                }
              )}
            >
              {hasVariant(variants, "slide", "marlins")
                ? "Earn 10,000 Points"
                : hasVariant(variants, "slide", "celtics")
                ? "Earn 30,000 Points"
                : hasVariant(variants, "slide", "cavs")
                ? "Earn Double Points"
                : hasVariant(variants, "slide", "manUtd")
                ? "Earn Double Points"
                : hasVariant(globalVariants, "screen", "tabletSmall")
                ? "Earn Double Points"
                : hasVariant(globalVariants, "screen", "tablet")
                ? "Earn Double Points"
                : hasVariant(globalVariants, "screen", "laptopSmall")
                ? "Earn Double Points"
                : "Earn Double Points"}
            </div>
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nu1P7,
              {
                [sty.text__slide_cavs__nu1P7YEJpa]: hasVariant(
                  variants,
                  "slide",
                  "cavs"
                ),
                [sty.text__slide_celtics__nu1P79TM6M]: hasVariant(
                  variants,
                  "slide",
                  "celtics"
                ),
                [sty.text__slide_marlins__nu1P75AVcj]: hasVariant(
                  variants,
                  "slide",
                  "marlins"
                )
              }
            )}
          >
            {hasVariant(variants, "slide", "marlins")
              ? "Worth at least $100 in statement credits and other rewards, after spending $1,000 in three months*"
              : hasVariant(variants, "slide", "celtics")
              ? "Worth at least $300 in statement credits and other rewards, after spending $2,500 in three months*"
              : "On Qualifying Purchases in your first year, up to 100,000 bonus points*"}
          </div>

          <OfferTerms
            data-plasmic-name={"offer2"}
            data-plasmic-override={overrides.offer2}
            asterisk={"asterisk" as const}
            className={classNames("__wab_instance", sty.offer2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__by18W,
                "offerTermsModal" as const,
                {
                  [sty.text__slide_manUtd__by18WEOzKr]: hasVariant(
                    variants,
                    "slide",
                    "manUtd"
                  )
                }
              )}
            >
              {"Offer Terms"}
            </div>
          </OfferTerms>
        </p.Stack>

        <NavButton
          data-plasmic-name={"navButton"}
          data-plasmic-override={overrides.navButton}
          className={classNames("__wab_instance", sty.navButton, {
            [sty.navButton__slide_cavs]: hasVariant(variants, "slide", "cavs"),
            [sty.navButton__slide_celtics]: hasVariant(
              variants,
              "slide",
              "celtics"
            ),
            [sty.navButton__slide_manUtd]: hasVariant(
              variants,
              "slide",
              "manUtd"
            ),
            [sty.navButton__slide_marlins]: hasVariant(
              variants,
              "slide",
              "marlins"
            )
          })}
          destination={
            hasVariant(variants, "slide", "marlins")
              ? ("/marlins" as const)
              : hasVariant(variants, "slide", "celtics")
              ? ("/celtics" as const)
              : hasVariant(variants, "slide", "cavs")
              ? ("/cavs" as const)
              : hasVariant(variants, "slide", "manUtd")
              ? ("/manutd" as const)
              : undefined
          }
          type={"secondary" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__a2Zwg,
              {
                [sty.text__slide_manUtd__a2ZwgEOzKr]: hasVariant(
                  variants,
                  "slide",
                  "manUtd"
                )
              }
            )}
          >
            {"Learn more"}
          </div>
        </NavButton>
      </p.Stack>
    </ImageLeft>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "copyDownloadButtons10",
    "copy13",
    "heading10",
    "offer2",
    "navButton",
    "freeBox",
    "img"
  ],
  copyDownloadButtons10: [
    "copyDownloadButtons10",
    "copy13",
    "heading10",
    "offer2",
    "navButton"
  ],
  copy13: ["copy13", "heading10", "offer2"],
  heading10: ["heading10"],
  offer2: ["offer2"],
  navButton: ["navButton"],
  freeBox: ["freeBox", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof ImageLeft;
  copyDownloadButtons10: "div";
  copy13: "div";
  heading10: "div";
  offer2: typeof OfferTerms;
  navButton: typeof NavButton;
  freeBox: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomePageRightCardForYouContent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomePageRightCardForYouContent__VariantsArgs;
    args?: PlasmicHomePageRightCardForYouContent__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomePageRightCardForYouContent__Fetches;
  } & Omit< // Specify variants directly as props
    PlasmicHomePageRightCardForYouContent__VariantsArgs,
    ReservedPropsType
  > &
    // Specify args directly as props
    Omit<PlasmicHomePageRightCardForYouContent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomePageRightCardForYouContent__ArgProps,
      internalVariantPropNames:
        PlasmicHomePageRightCardForYouContent__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomePageRightCardForYouContent__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomePageRightCardForYouContent";
  } else {
    func.displayName = `PlasmicHomePageRightCardForYouContent.${nodeName}`;
  }
  return func;
}

export const PlasmicHomePageRightCardForYouContent = Object.assign(
  // Top-level PlasmicHomePageRightCardForYouContent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    copyDownloadButtons10: makeNodeComponent("copyDownloadButtons10"),
    copy13: makeNodeComponent("copy13"),
    heading10: makeNodeComponent("heading10"),
    offer2: makeNodeComponent("offer2"),
    navButton: makeNodeComponent("navButton"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHomePageRightCardForYouContent
    internalVariantProps: PlasmicHomePageRightCardForYouContent__VariantProps,
    internalArgProps: PlasmicHomePageRightCardForYouContent__ArgProps
  }
);

export default PlasmicHomePageRightCardForYouContent;
/* prettier-ignore-end */
