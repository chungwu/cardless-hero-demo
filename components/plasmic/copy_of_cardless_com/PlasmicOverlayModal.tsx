// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5bwAVSS7yxRyYYekzZSF6R
// Component: xZQr1nj5T1h1
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
import * as sty from "./PlasmicOverlayModal.module.css"; // plasmic-import: xZQr1nj5T1h1/css

import CloseIcon from "./icons/PlasmicIcon__Close"; // plasmic-import: t5S1aOA0LUKAN/icon

export type PlasmicOverlayModal__VariantMembers = {};

export type PlasmicOverlayModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicOverlayModal__VariantsArgs;
export const PlasmicOverlayModal__VariantProps = new Array<VariantPropType>();

export type PlasmicOverlayModal__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOverlayModal__ArgsType;
export const PlasmicOverlayModal__ArgProps = new Array<ArgPropType>(
  "title",
  "children"
);

export type PlasmicOverlayModal__OverridesType = {
  root?: p.Flex<"div">;
  modal?: p.Flex<"div">;
  content?: p.Flex<"div">;
  contentHeader?: p.Flex<"div">;
  closeButton?: p.Flex<"svg">;
  contentBody?: p.Flex<"div">;
};

export interface DefaultOverlayModalProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicOverlayModal__RenderFunc(props: {
  variants: PlasmicOverlayModal__VariantsArgs;
  args: PlasmicOverlayModal__ArgsType;
  overrides: PlasmicOverlayModal__OverridesType;
  dataFetches?: PlasmicOverlayModal__Fetches;
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
      <p.Stack
        as={"div"}
        data-plasmic-name={"modal"}
        data-plasmic-override={overrides.modal}
        hasGap={true}
        className={classNames(projectcss.all, sty.modal)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          hasGap={true}
          className={classNames(projectcss.all, sty.content)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"contentHeader"}
            data-plasmic-override={overrides.contentHeader}
            hasGap={true}
            className={classNames(projectcss.all, sty.contentHeader)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Modal Title",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}

            <p.Stack
              as={CloseIcon}
              data-plasmic-name={"closeButton"}
              data-plasmic-override={overrides.closeButton}
              hasGap={true}
              className={classNames(projectcss.all, sty.closeButton)}
              role={"img"}
            />
          </p.Stack>

          <div
            data-plasmic-name={"contentBody"}
            data-plasmic-override={overrides.contentBody}
            className={classNames(projectcss.all, sty.contentBody)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pmCmZ
                  )}
                >
                  {
                    "1. Offer is limited to new cardholders that apply for, are approved, and who open a Manchester United credit card account with First Electronic Bank, Member FDIC (FEB), powered by Cardless.  Cardholder will earn and receive points at the standard rate during the cardholder’s first twelve (12) monthly statement cycles. After an eligible cardholder completes at least one Qualifying Purchase in each of the first twelve (12) monthly statement cycles, Cardless will double the points earned by providing a bonus equal to the amount of points earned on Qualifying Purchases during the first twelve (12) monthly statement cycles, up to a maximum of 100,000 additional points.  “Qualifying Purchase” means an eligible purchase of goods and services made using your Manchester United credit card (less credits, returns, and adjustments). Qualifying Purchases do not include transactions that are returned, disputed, unauthorized, fraudulent, exceed your credit limit, are made while your account is in default, or any other transaction that FEB or Cardless may determine in their discretion is not eligible to earn points.  Allow up to 2 statement cycles after your first account anniversary for your reward points to appear on your rewards account. Returns, fees, and adjustments may reduce the amount of points you may earn.  You are not eligible for this offer if your account does not remain current and in good standing for the duration of this offer.  Offer is subject to the Cardless Card Rewards Program Terms and Conditions (Rewards Terms). This offer is not valid and you will forfeit your rewards if you violate the terms of this offer, your Cardholder Agreement, or the Rewards Terms. Cardless reserves the right to terminate or modify this offer at any time. For promotional purposes only. \n\n\n\n2. For in person transactions, accountholder must present physical card to receive discount. For online transactions accountholder must use a voucher code provided by Manchester United. \n\n\n\n3. Includes bars and restaurants on days Manchester United plays an official match.  \n\n\n\n4. Includes Netflix, Hulu, Disney+, and similar digital streaming services. See our FAQ page for more details.\n\n\n\n5. Statement credit reimbursement of Peacock Premium charges up to $5.00 per month for acounts with at least $500 of spend in the preceeding statement period.\n\n\n\n6. All experiences subject to availability and attendee consent; items are limited.1. Offer is limited to new cardholders that apply for, are approved, and who open a Manchester United credit card account with First Electronic Bank, Member FDIC (FEB), powered by Cardless.  Cardholder will earn and receive points at the standard rate during the cardholder’s first twelve (12) monthly statement cycles. After an eligible cardholder completes at least one Qualifying Purchase in each of the first twelve (12) monthly statement cycles, Cardless will double the points earned by providing a bonus equal to the amount of points earned on Qualifying Purchases during the first twelve (12) monthly statement cycles, up to a maximum of 100,000 additional points.  “Qualifying Purchase” means an eligible purchase of goods and services made using your Manchester United credit card (less credits, returns, and adjustments). Qualifying Purchases do not include transactions that are returned, disputed, unauthorized, fraudulent, exceed your credit limit, are made while your account is in default, or any other transaction that FEB or Cardless may determine in their discretion is not eligible to earn points.  Allow up to 2 statement cycles after your first account anniversary for your reward points to appear on your rewards account. Returns, fees, and adjustments may reduce the amount of points you may earn.  You are not eligible for this offer if your account does not remain current and in good standing for the duration of this offer.  Offer is subject to the Cardless Card Rewards Program Terms and Conditions (Rewards Terms). This offer is not valid and you will forfeit your rewards if you violate the terms of this offer, your Cardholder Agreement, or the Rewards Terms. Cardless reserves the right to terminate or modify this offer at any time. For promotional purposes only. \n\n\n\n2. For in person transactions, accountholder must present physical card to receive discount. For online transactions accountholder must use a voucher code provided by Manchester United. \n\n\n\n3. Includes bars and restaurants on days Manchester United plays an official match.  \n\n\n\n4. Includes Netflix, Hulu, Disney+, and similar digital streaming services. See our FAQ page for more details.\n\n\n\n5. Statement credit reimbursement of Peacock Premium charges up to $5.00 per month for acounts with at least $500 of spend in the preceeding statement period.\n\n\n\n6. All experiences subject to availability and attendee consent; items are limited.1. Offer is limited to new cardholders that apply for, are approved, and who open a Manchester United credit card account with First Electronic Bank, Member FDIC (FEB), powered by Cardless.  Cardholder will earn and receive points at the standard rate during the cardholder’s first twelve (12) monthly statement cycles. After an eligible cardholder completes at least one Qualifying Purchase in each of the first twelve (12) monthly statement cycles, Cardless will double the points earned by providing a bonus equal to the amount of points earned on Qualifying Purchases during the first twelve (12) monthly statement cycles, up to a maximum of 100,000 additional points.  “Qualifying Purchase” means an eligible purchase of goods and services made using your Manchester United credit card (less credits, returns, and adjustments). Qualifying Purchases do not include transactions that are returned, disputed, unauthorized, fraudulent, exceed your credit limit, are made while your account is in default, or any other transaction that FEB or Cardless may determine in their discretion is not eligible to earn points.  Allow up to 2 statement cycles after your first account anniversary for your reward points to appear on your rewards account. Returns, fees, and adjustments may reduce the amount of points you may earn.  You are not eligible for this offer if your account does not remain current and in good standing for the duration of this offer.  Offer is subject to the Cardless Card Rewards Program Terms and Conditions (Rewards Terms). This offer is not valid and you will forfeit your rewards if you violate the terms of this offer, your Cardholder Agreement, or the Rewards Terms. Cardless reserves the right to terminate or modify this offer at any time. For promotional purposes only. \n\n\n\n2. For in person transactions, accountholder must present physical card to receive discount. For online transactions accountholder must use a voucher code provided by Manchester United. \n\n\n\n3. Includes bars and restaurants on days Manchester United plays an official match.  \n\n\n\n4. Includes Netflix, Hulu, Disney+, and similar digital streaming services. See our FAQ page for more details.\n\n\n\n5. Statement credit reimbursement of Peacock Premium charges up to $5.00 per month for acounts with at least $500 of spend in the preceeding statement period.\n\n\n\n6. All experiences subject to availability and attendee consent; items are limited."
                  }
                </div>
              ),

              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "modal",
    "content",
    "contentHeader",
    "closeButton",
    "contentBody"
  ],
  modal: ["modal", "content", "contentHeader", "closeButton", "contentBody"],
  content: ["content", "contentHeader", "closeButton", "contentBody"],
  contentHeader: ["contentHeader", "closeButton"],
  closeButton: ["closeButton"],
  contentBody: ["contentBody"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  modal: "div";
  content: "div";
  contentHeader: "div";
  closeButton: "svg";
  contentBody: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOverlayModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOverlayModal__VariantsArgs;
    args?: PlasmicOverlayModal__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicOverlayModal__Fetches;
  } & Omit<PlasmicOverlayModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOverlayModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOverlayModal__ArgProps,
      internalVariantPropNames: PlasmicOverlayModal__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicOverlayModal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOverlayModal";
  } else {
    func.displayName = `PlasmicOverlayModal.${nodeName}`;
  }
  return func;
}

export const PlasmicOverlayModal = Object.assign(
  // Top-level PlasmicOverlayModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    modal: makeNodeComponent("modal"),
    content: makeNodeComponent("content"),
    contentHeader: makeNodeComponent("contentHeader"),
    closeButton: makeNodeComponent("closeButton"),
    contentBody: makeNodeComponent("contentBody"),

    // Metadata about props expected for PlasmicOverlayModal
    internalVariantProps: PlasmicOverlayModal__VariantProps,
    internalArgProps: PlasmicOverlayModal__ArgProps
  }
);

export default PlasmicOverlayModal;
/* prettier-ignore-end */
