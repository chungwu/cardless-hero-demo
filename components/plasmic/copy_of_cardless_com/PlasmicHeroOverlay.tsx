// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: gL5YkDbpKAXj
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
import * as sty from "./PlasmicHeroOverlay.module.css"; // plasmic-import: gL5YkDbpKAXj/css

import Cutlery2Icon from "./icons/PlasmicIcon__Cutlery2"; // plasmic-import: QmGbG4CdDnHHq/icon
import CreditCardIcon from "./icons/PlasmicIcon__CreditCard"; // plasmic-import: vv4iYc_EZgVEt/icon
import Coffee2Icon from "./icons/PlasmicIcon__Coffee2"; // plasmic-import: qjTlS0xLwSgps/icon

export type PlasmicHeroOverlay__VariantMembers = {
  scene: "scene0" | "scene1" | "scene2" | "scene3" | "scene4" | "scene5";
};

export type PlasmicHeroOverlay__VariantsArgs = {
  scene?: SingleChoiceArg<
    "scene0" | "scene1" | "scene2" | "scene3" | "scene4" | "scene5"
  >;
};

type VariantPropType = keyof PlasmicHeroOverlay__VariantsArgs;
export const PlasmicHeroOverlay__VariantProps = new Array<VariantPropType>(
  "scene"
);

export type PlasmicHeroOverlay__ArgsType = {};
type ArgPropType = keyof PlasmicHeroOverlay__ArgsType;
export const PlasmicHeroOverlay__ArgProps = new Array<ArgPropType>();

export type PlasmicHeroOverlay__OverridesType = {
  root?: p.Flex<"div">;
  balance?: p.Flex<"div">;
  _5094?: p.Flex<"div">;
  transaction?: p.Flex<"div">;
  content?: p.Flex<"div">;
  left?: p.Flex<"div">;
  transactionIcon?: p.Flex<"div">;
  right?: p.Flex<"div">;
  transaction2?: p.Flex<"div">;
  content2?: p.Flex<"div">;
  left2?: p.Flex<"div">;
  transactionIcon2?: p.Flex<"div">;
  text2?: p.Flex<"div">;
  right2?: p.Flex<"div">;
  transaction3?: p.Flex<"div">;
  content3?: p.Flex<"div">;
  left3?: p.Flex<"div">;
  transactionIcon3?: p.Flex<"div">;
  text3?: p.Flex<"div">;
  right3?: p.Flex<"div">;
  rewards?: p.Flex<"div">;
  image2?: p.Flex<"div">;
  image?: p.Flex<"div">;
  price?: p.Flex<"div">;
  content4?: p.Flex<"div">;
  text4?: p.Flex<"div">;
  right4?: p.Flex<"div">;
  wrapper?: p.Flex<"div">;
  button?: p.Flex<"div">;
};

export interface DefaultHeroOverlayProps {
  scene?: SingleChoiceArg<
    "scene0" | "scene1" | "scene2" | "scene3" | "scene4" | "scene5"
  >;
  className?: string;
}

function PlasmicHeroOverlay__RenderFunc(props: {
  variants: PlasmicHeroOverlay__VariantsArgs;
  args: PlasmicHeroOverlay__ArgsType;
  overrides: PlasmicHeroOverlay__OverridesType;
  dataFetches?: PlasmicHeroOverlay__Fetches;
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
      className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
        [sty.root__scene_scene0]: hasVariant(variants, "scene", "scene0"),
        [sty.root__scene_scene1]: hasVariant(variants, "scene", "scene1"),
        [sty.root__scene_scene2]: hasVariant(variants, "scene", "scene2"),
        [sty.root__scene_scene3]: hasVariant(variants, "scene", "scene3"),
        [sty.root__scene_scene4]: hasVariant(variants, "scene", "scene4"),
        [sty.root__scene_scene5]: hasVariant(variants, "scene", "scene5")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"balance"}
        data-plasmic-override={overrides.balance}
        hasGap={true}
        className={classNames(projectcss.all, sty.balance, {
          [sty.balance__scene_scene1]: hasVariant(variants, "scene", "scene1"),
          [sty.balance__scene_scene2]: hasVariant(variants, "scene", "scene2")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7YFCf,
            {
              [sty.text__scene_scene4___7YFCf8SDj4]: hasVariant(
                variants,
                "scene",
                "scene4"
              ),
              [sty.text__scene_scene5___7YFCffOgZv]: hasVariant(
                variants,
                "scene",
                "scene5"
              )
            }
          )}
        >
          {hasVariant(variants, "scene", "scene5")
            ? "Your Points"
            : hasVariant(variants, "scene", "scene4")
            ? "Your Points"
            : "Balance"}
        </div>

        <div
          data-plasmic-name={"_5094"}
          data-plasmic-override={overrides._5094}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty._5094,
            {
              [sty._5094__scene_scene4]: hasVariant(
                variants,
                "scene",
                "scene4"
              ),
              [sty._5094__scene_scene5]: hasVariant(variants, "scene", "scene5")
            }
          )}
        >
          {hasVariant(variants, "scene", "scene5")
            ? "4,574"
            : hasVariant(variants, "scene", "scene4")
            ? "12,574"
            : "$50.94 "}
        </div>
      </p.Stack>

      {(hasVariant(variants, "scene", "scene3") ? true : false) ? (
        <div
          data-plasmic-name={"transaction"}
          data-plasmic-override={overrides.transaction}
          className={classNames(projectcss.all, sty.transaction, {
            [sty.transaction__scene_scene1]: hasVariant(
              variants,
              "scene",
              "scene1"
            ),
            [sty.transaction__scene_scene2]: hasVariant(
              variants,
              "scene",
              "scene2"
            ),
            [sty.transaction__scene_scene3]: hasVariant(
              variants,
              "scene",
              "scene3"
            ),
            [sty.transaction__scene_scene5]: hasVariant(
              variants,
              "scene",
              "scene5"
            )
          })}
        >
          <div
            data-plasmic-name={"content"}
            data-plasmic-override={overrides.content}
            className={classNames(projectcss.all, sty.content)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"left"}
              data-plasmic-override={overrides.left}
              hasGap={true}
              className={classNames(projectcss.all, sty.left)}
            >
              <div
                data-plasmic-name={"transactionIcon"}
                data-plasmic-override={overrides.transactionIcon}
                className={classNames(projectcss.all, sty.transactionIcon)}
              >
                <Cutlery2Icon
                  className={classNames(projectcss.all, sty.svg___9QYZ)}
                  role={"img"}
                />
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__whpdK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rUigK
                )}
              >
                {"7th Market"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cqEv
                )}
              >
                {"52 Points"}
              </div>
            </div>

            <div
              data-plasmic-name={"right"}
              data-plasmic-override={overrides.right}
              className={classNames(projectcss.all, sty.right)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oLr0S
                )}
              >
                {"$25.99"}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {(
        hasVariant(variants, "scene", "scene3")
          ? true
          : hasVariant(variants, "scene", "scene2")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"transaction2"}
          data-plasmic-override={overrides.transaction2}
          className={classNames(projectcss.all, sty.transaction2, {
            [sty.transaction2__scene_scene1]: hasVariant(
              variants,
              "scene",
              "scene1"
            ),
            [sty.transaction2__scene_scene2]: hasVariant(
              variants,
              "scene",
              "scene2"
            ),
            [sty.transaction2__scene_scene3]: hasVariant(
              variants,
              "scene",
              "scene3"
            )
          })}
        >
          <div
            data-plasmic-name={"content2"}
            data-plasmic-override={overrides.content2}
            className={classNames(projectcss.all, sty.content2)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"left2"}
              data-plasmic-override={overrides.left2}
              hasGap={true}
              className={classNames(projectcss.all, sty.left2)}
            >
              <div
                data-plasmic-name={"transactionIcon2"}
                data-plasmic-override={overrides.transactionIcon2}
                className={classNames(projectcss.all, sty.transactionIcon2)}
              >
                <CreditCardIcon
                  className={classNames(projectcss.all, sty.svg__oKl9Y)}
                  role={"img"}
                />
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"text2"}
              data-plasmic-override={overrides.text2}
              className={classNames(projectcss.all, sty.text2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lPwMr
                )}
              >
                {"Made Haven"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dHb1K,
                  {
                    [sty.text__scene_scene2__dHb1KUrEgl]: hasVariant(
                      variants,
                      "scene",
                      "scene2"
                    )
                  }
                )}
              >
                {"36 Points"}
              </div>
            </div>

            <div
              data-plasmic-name={"right2"}
              data-plasmic-override={overrides.right2}
              className={classNames(projectcss.all, sty.right2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9KJwy
                )}
              >
                {"$35.93"}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {(
        hasVariant(variants, "scene", "scene3")
          ? true
          : hasVariant(variants, "scene", "scene2")
          ? true
          : hasVariant(variants, "scene", "scene1")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"transaction3"}
          data-plasmic-override={overrides.transaction3}
          className={classNames(projectcss.all, sty.transaction3, {
            [sty.transaction3__scene_scene1]: hasVariant(
              variants,
              "scene",
              "scene1"
            ),
            [sty.transaction3__scene_scene2]: hasVariant(
              variants,
              "scene",
              "scene2"
            ),
            [sty.transaction3__scene_scene3]: hasVariant(
              variants,
              "scene",
              "scene3"
            )
          })}
        >
          <div
            data-plasmic-name={"content3"}
            data-plasmic-override={overrides.content3}
            className={classNames(projectcss.all, sty.content3)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"left3"}
              data-plasmic-override={overrides.left3}
              hasGap={true}
              className={classNames(projectcss.all, sty.left3)}
            >
              <div
                data-plasmic-name={"transactionIcon3"}
                data-plasmic-override={overrides.transactionIcon3}
                className={classNames(projectcss.all, sty.transactionIcon3)}
              >
                <Coffee2Icon
                  className={classNames(projectcss.all, sty.svg__m8KMj, {
                    [sty.svg__scene_scene1__m8KMjtBxTb]: hasVariant(
                      variants,
                      "scene",
                      "scene1"
                    )
                  })}
                  role={"img"}
                />
              </div>
            </p.Stack>

            <div
              data-plasmic-name={"text3"}
              data-plasmic-override={overrides.text3}
              className={classNames(projectcss.all, sty.text3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lbbf6,
                  {
                    [sty.text__scene_scene1__lbbf6TBxTb]: hasVariant(
                      variants,
                      "scene",
                      "scene1"
                    )
                  }
                )}
              >
                {"Lou???s Cafe"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cR30,
                  {
                    [sty.text__scene_scene1__cR30TBxTb]: hasVariant(
                      variants,
                      "scene",
                      "scene1"
                    )
                  }
                )}
              >
                {"17 Points"}
              </div>
            </div>

            <div
              data-plasmic-name={"right3"}
              data-plasmic-override={overrides.right3}
              className={classNames(projectcss.all, sty.right3, {
                [sty.right3__scene_scene1]: hasVariant(
                  variants,
                  "scene",
                  "scene1"
                )
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nxHoC
                )}
              >
                {"$5.48"}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {(
        hasVariant(variants, "scene", "scene5")
          ? true
          : hasVariant(variants, "scene", "scene4")
          ? true
          : false
      ) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"rewards"}
          data-plasmic-override={overrides.rewards}
          hasGap={true}
          className={classNames(projectcss.all, sty.rewards, {
            [sty.rewards__scene_scene4]: hasVariant(
              variants,
              "scene",
              "scene4"
            ),
            [sty.rewards__scene_scene5]: hasVariant(variants, "scene", "scene5")
          })}
        >
          <div
            data-plasmic-name={"image2"}
            data-plasmic-override={overrides.image2}
            className={classNames(projectcss.all, sty.image2, {
              [sty.image2__scene_scene5]: hasVariant(
                variants,
                "scene",
                "scene5"
              )
            })}
          >
            <div
              data-plasmic-name={"image"}
              data-plasmic-override={overrides.image}
              className={classNames(projectcss.all, sty.image, {
                [sty.image__scene_scene4]: hasVariant(
                  variants,
                  "scene",
                  "scene4"
                ),
                [sty.image__scene_scene5]: hasVariant(
                  variants,
                  "scene",
                  "scene5"
                )
              })}
            >
              {(hasVariant(variants, "scene", "scene5") ? true : true) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__r0P11,
                    {
                      [sty.text__scene_scene5__r0P11FOgZv]: hasVariant(
                        variants,
                        "scene",
                        "scene5"
                      )
                    }
                  )}
                >
                  {"Delivered"}
                </div>
              ) : null}
            </div>
          </div>

          {(hasVariant(variants, "scene", "scene5") ? true : true) ? (
            <div
              data-plasmic-name={"price"}
              data-plasmic-override={overrides.price}
              className={classNames(projectcss.all, sty.price, {
                [sty.price__scene_scene5]: hasVariant(
                  variants,
                  "scene",
                  "scene5"
                )
              })}
            >
              <div
                data-plasmic-name={"content4"}
                data-plasmic-override={overrides.content4}
                className={classNames(projectcss.all, sty.content4)}
              >
                <div
                  data-plasmic-name={"text4"}
                  data-plasmic-override={overrides.text4}
                  className={classNames(projectcss.all, sty.text4)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aTuoM
                    )}
                  >
                    {"Jersey"}
                  </div>

                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dbKSh
                      )}
                    >
                      {"Miami Marlins"}
                    </div>
                  ) : null}
                </div>

                <div
                  data-plasmic-name={"right4"}
                  data-plasmic-override={overrides.right4}
                  className={classNames(projectcss.all, sty.right4)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vc5NT
                    )}
                  >
                    {"8,000 Pts"}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {(hasVariant(variants, "scene", "scene5") ? true : true) ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"wrapper"}
              data-plasmic-override={overrides.wrapper}
              hasGap={true}
              className={classNames(projectcss.all, sty.wrapper, {
                [sty.wrapper__scene_scene5]: hasVariant(
                  variants,
                  "scene",
                  "scene5"
                )
              })}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                hasGap={true}
                className={classNames(projectcss.all, sty.button)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6NcCl
                  )}
                >
                  {"Redeem"}
                </div>
              </p.Stack>
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "balance",
    "_5094",
    "transaction",
    "content",
    "left",
    "transactionIcon",
    "right",
    "transaction2",
    "content2",
    "left2",
    "transactionIcon2",
    "text2",
    "right2",
    "transaction3",
    "content3",
    "left3",
    "transactionIcon3",
    "text3",
    "right3",
    "rewards",
    "image2",
    "image",
    "price",
    "content4",
    "text4",
    "right4",
    "wrapper",
    "button"
  ],
  balance: ["balance", "_5094"],
  _5094: ["_5094"],
  transaction: ["transaction", "content", "left", "transactionIcon", "right"],
  content: ["content", "left", "transactionIcon", "right"],
  left: ["left", "transactionIcon"],
  transactionIcon: ["transactionIcon"],
  right: ["right"],
  transaction2: [
    "transaction2",
    "content2",
    "left2",
    "transactionIcon2",
    "text2",
    "right2"
  ],
  content2: ["content2", "left2", "transactionIcon2", "text2", "right2"],
  left2: ["left2", "transactionIcon2"],
  transactionIcon2: ["transactionIcon2"],
  text2: ["text2"],
  right2: ["right2"],
  transaction3: [
    "transaction3",
    "content3",
    "left3",
    "transactionIcon3",
    "text3",
    "right3"
  ],
  content3: ["content3", "left3", "transactionIcon3", "text3", "right3"],
  left3: ["left3", "transactionIcon3"],
  transactionIcon3: ["transactionIcon3"],
  text3: ["text3"],
  right3: ["right3"],
  rewards: [
    "rewards",
    "image2",
    "image",
    "price",
    "content4",
    "text4",
    "right4",
    "wrapper",
    "button"
  ],
  image2: ["image2", "image"],
  image: ["image"],
  price: ["price", "content4", "text4", "right4"],
  content4: ["content4", "text4", "right4"],
  text4: ["text4"],
  right4: ["right4"],
  wrapper: ["wrapper", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  balance: "div";
  _5094: "div";
  transaction: "div";
  content: "div";
  left: "div";
  transactionIcon: "div";
  right: "div";
  transaction2: "div";
  content2: "div";
  left2: "div";
  transactionIcon2: "div";
  text2: "div";
  right2: "div";
  transaction3: "div";
  content3: "div";
  left3: "div";
  transactionIcon3: "div";
  text3: "div";
  right3: "div";
  rewards: "div";
  image2: "div";
  image: "div";
  price: "div";
  content4: "div";
  text4: "div";
  right4: "div";
  wrapper: "div";
  button: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroOverlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroOverlay__VariantsArgs;
    args?: PlasmicHeroOverlay__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeroOverlay__Fetches;
  } & Omit<PlasmicHeroOverlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroOverlay__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroOverlay__ArgProps,
      internalVariantPropNames: PlasmicHeroOverlay__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeroOverlay__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroOverlay";
  } else {
    func.displayName = `PlasmicHeroOverlay.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroOverlay = Object.assign(
  // Top-level PlasmicHeroOverlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    balance: makeNodeComponent("balance"),
    _5094: makeNodeComponent("_5094"),
    transaction: makeNodeComponent("transaction"),
    content: makeNodeComponent("content"),
    left: makeNodeComponent("left"),
    transactionIcon: makeNodeComponent("transactionIcon"),
    right: makeNodeComponent("right"),
    transaction2: makeNodeComponent("transaction2"),
    content2: makeNodeComponent("content2"),
    left2: makeNodeComponent("left2"),
    transactionIcon2: makeNodeComponent("transactionIcon2"),
    text2: makeNodeComponent("text2"),
    right2: makeNodeComponent("right2"),
    transaction3: makeNodeComponent("transaction3"),
    content3: makeNodeComponent("content3"),
    left3: makeNodeComponent("left3"),
    transactionIcon3: makeNodeComponent("transactionIcon3"),
    text3: makeNodeComponent("text3"),
    right3: makeNodeComponent("right3"),
    rewards: makeNodeComponent("rewards"),
    image2: makeNodeComponent("image2"),
    image: makeNodeComponent("image"),
    price: makeNodeComponent("price"),
    content4: makeNodeComponent("content4"),
    text4: makeNodeComponent("text4"),
    right4: makeNodeComponent("right4"),
    wrapper: makeNodeComponent("wrapper"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeroOverlay
    internalVariantProps: PlasmicHeroOverlay__VariantProps,
    internalArgProps: PlasmicHeroOverlay__ArgProps
  }
);

export default PlasmicHeroOverlay;
/* prettier-ignore-end */
