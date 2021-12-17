// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 20"}
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 1.567v1.566h1.712v16.17h3.827v-6.569h2.166c1.376 0 2.165-.037 2.165-.1 0-.056.159-.102.353-.102.194 0 .352-.04.352-.087 0-.048.12-.064.267-.036.184.035.245.015.196-.064-.047-.076.018-.116.186-.116.142 0 .258-.044.258-.098 0-.054.068-.072.15-.04.084.032.152.012.152-.045 0-.058.13-.133.288-.168a.709.709 0 00.42-.311c.072-.136.206-.248.297-.248.232 0 .793-.562.937-.94.036-.094.113-.171.17-.171.057 0 .104-.07.104-.155 0-.085.065-.18.145-.21.08-.032.174-.19.21-.351.035-.163.11-.295.167-.295.06 0 .078-.105.043-.244-.035-.138-.014-.26.047-.281.06-.02.133-.32.165-.665.031-.346.096-.63.143-.63.048 0 .087-.5.087-1.111s-.04-1.112-.088-1.112c-.048 0-.118-.273-.156-.606-.037-.334-.103-.606-.146-.606-.044 0-.06-.148-.039-.329.031-.252.016-.293-.066-.177-.092.131-.106.127-.108-.025 0-.098-.051-.177-.113-.177-.061 0-.085-.068-.053-.152.032-.083.019-.151-.029-.151s-.116-.116-.15-.257c-.036-.141-.109-.23-.163-.196-.054.033-.097-.015-.097-.108 0-.206-1.077-1.29-1.204-1.21-.05.03-.121-.039-.158-.154-.036-.115-.114-.192-.173-.173-.06.02-.207-.063-.328-.184-.139-.14-.412-.248-.74-.293-.286-.04-.499-.107-.473-.15C10.822.05 9.418 0 4.77 0H0v1.567zm9.065 1.656c0 .05.158.12.352.156.194.037.353.11.353.163 0 .053.05.096.112.096.147 0 .895.751.895.898 0 .062.041.113.091.113.05 0 .068.091.039.202-.03.113-.003.202.06.202.061 0 .112.091.112.202 0 .111.045.202.1.202.056 0 .101.069.101.152 0 .083-.034.152-.075.152-.042 0-.079.39-.082.867-.004.502-.052.895-.115.934-.06.038-.164.257-.233.488-.075.254-.219.47-.364.547-.131.07-.238.166-.238.213 0 .046-.07.084-.155.084a.242.242 0 00-.209.144c-.03.08-.233.174-.45.21-.217.038-.395.11-.395.16 0 .052-.748.092-1.712.092H5.539V3.133h1.763c.97 0 1.763.04 1.763.09zm13.242 1.834c-.041.067-.284.08-.66.038-.38-.043-.597-.03-.597.035 0 .056-.25.133-.555.172-.305.038-.53.11-.499.16.031.051-.124.122-.345.157-.22.035-.424.123-.451.195-.027.071-.18.158-.337.193-.159.035-.4.198-.535.363-.136.165-.306.3-.379.3-.166 0-.625.49-.625.668 0 .074-.091.182-.202.242-.11.06-.201.192-.201.296 0 .103-.068.214-.151.246a.249.249 0 00-.151.213c0 .085-.048.154-.107.154s-.08.045-.045.1c.033.055-.032.2-.146.323-.124.133-.184.297-.15.406.032.1.015.182-.038.182s-.128.216-.167.48c-.04.264-.119.51-.176.545-.14.086-.146 3.316-.007 3.406.056.037.134.283.173.546.039.265.118.48.176.48.058 0 .08.069.047.152-.031.084-.02.152.027.152.046 0 .113.179.148.397.043.27.126.418.26.46.118.038.174.12.14.21-.031.08-.005.146.058.146s.145.077.181.172c.156.407 1.367 1.625 1.699 1.709.142.035.281.122.308.192.027.07.184.155.35.188.166.033.37.13.454.213a.641.641 0 00.397.153c.135 0 .245.051.245.113 0 .066.105.093.254.064.14-.027.279-.009.308.039.03.048.21.088.4.088.191 0 .347.045.347.1 0 .063.523.102 1.366.102.885 0 1.344-.036 1.303-.102-.037-.06.1-.1.347-.1.259 0 .41-.047.41-.127.001-.095.022-.093.086.008.07.108.114.104.24-.023.086-.086.342-.186.57-.222.226-.037.412-.103.412-.147s.136-.11.303-.147c.167-.036.277-.108.246-.16-.032-.05.038-.092.153-.092.116 0 .238-.07.271-.158.033-.086.122-.133.198-.104.076.03.138.01.138-.044s.052-.098.115-.098c.133 0 .792-.679.792-.816 0-.052-.045-.094-.1-.094-.056 0-.102-.07-.102-.155a.243.243 0 00-.145-.21c-.08-.031-.174-.192-.21-.358-.037-.166-.128-.325-.202-.353-.074-.03-.163-.181-.198-.339-.034-.157-.128-.311-.208-.342a.234.234 0 01-.145-.199c0-.265-.499-.267-.672-.002-.086.132-.243.24-.35.24-.106 0-.219.068-.25.151-.032.084-.122.152-.199.152-.077 0-.14.057-.142.127 0 .085-.031.078-.095-.023-.08-.128-.103-.124-.16.025a.296.296 0 01-.257.174c-.105 0-.191.044-.191.098 0 .054-.072.07-.161.036a.212.212 0 00-.248.079c-.105.17-2.574.205-2.693.039-.087-.122-.878-.555-1.014-.555-.154 0-.93-.81-.87-.908.03-.049-.041-.118-.157-.155-.126-.04-.188-.123-.155-.21.03-.078.01-.142-.043-.142-.054 0-.098-.068-.098-.151 0-.084-.037-.152-.083-.152-.046 0-.063-.136-.039-.303.026-.182 0-.303-.068-.303-.061 0-.112-.114-.112-.253v-.253H28.7l.067-.267c.092-.368-.028-2.882-.142-2.957-.05-.033-.122-.285-.158-.56-.037-.275-.107-.525-.155-.556-.05-.03-.147-.249-.217-.484-.075-.252-.204-.452-.314-.487-.104-.033-.162-.102-.13-.153.054-.09-.078-.234-.736-.804a2.159 2.159 0 01-.415-.48c-.066-.124-.202-.225-.302-.225-.1 0-.287-.091-.415-.202-.128-.111-.316-.202-.418-.202-.103 0-.186-.04-.186-.09 0-.05-.204-.12-.453-.158-.25-.037-.454-.117-.454-.177 0-.072-.189-.09-.552-.052-.304.032-.579.015-.61-.036-.08-.128-.724-.119-.804.011zm14.556-.001c0 .067-.28.08-.806.035-.522-.043-.805-.03-.805.036 0 .056-.272.133-.605.17-.332.038-.604.112-.604.164 0 .051-.113.122-.252.157-.138.035-.252.104-.252.154s-.052.09-.115.09c-.064 0-.262.148-.44.328a3.56 3.56 0 01-.511.439c-.163.096-.19.28-.226 1.49l-.04 1.381h3.347v-.498c0-.503.173-.816.452-.816a.2.2 0 00.177-.126c.03-.09.35-.126 1.133-.126.784 0 1.104.035 1.133.126.023.07.095.127.16.128.064.001.224.115.355.253.13.138.282.25.338.25.055 0 .075.069.043.152-.032.083-.014.152.04.152.053 0 .097.132.097.295 0 .162.056.317.126.345.077.031.082.054.013.06-.076.005-.088.139-.038.411l.073.405H38.38c-.882 0-1.316.039-1.409.126-.084.08-.147.088-.172.023-.02-.057-.219-.087-.44-.066-.22.022-.38.073-.354.116.026.042-.208.102-.52.135-.312.032-.594.102-.627.156-.033.054-.24.131-.46.173-.22.041-.461.136-.536.211a.476.476 0 01-.28.136c-.079 0-.143.049-.143.108 0 .06-.084.082-.186.05-.128-.042-.219.01-.295.17-.06.125-.113.175-.117.11-.01-.166-1.215 1.062-1.215 1.238 0 .08-.048.144-.107.144s-.08.042-.049.094c.032.051.012.122-.044.157-.056.035-.102.152-.102.26 0 .108-.05.196-.112.196-.074 0-.09.122-.046.354.041.22.027.353-.04.353-.057 0-.105.182-.105.405 0 .225.05.404.11.404.074 0 .089.16.045.48-.053.39-.03.518.124.684.104.113.171.26.149.329-.023.068.003.124.057.124s.128.12.164.266c.072.285.965 1.25 1.157 1.25.063 0 .14.066.17.146.03.08.188.174.35.21.16.035.293.112.293.17 0 .057.114.082.252.056.138-.027.252-.01.252.038s.138.088.308.088c.18 0 .282.042.246.1-.04.066.351.102 1.102.102.709 0 1.164-.04 1.164-.102 0-.055.136-.1.302-.1.174 0 .303-.054.304-.127 0-.085.032-.078.095.023.08.127.104.123.16-.026a.298.298 0 01.26-.174c.108 0 .22-.068.252-.151.032-.084.123-.152.203-.152.184 0 1.256-1.111 1.185-1.227-.03-.048-.006-.087.053-.087.06 0 .107.202.107.455 0 .25.045.455.1.455.056 0 .101.055.101.123 0 .196.513.584.771.584.13 0 .236.046.236.101 0 .064.689.101 1.863.101h1.864v-3.15l-.656.034c-.555.029-.665.006-.712-.143-.03-.097-.094-.177-.14-.177-.047 0-.1-1.58-.12-3.512-.02-2.015-.075-3.576-.13-3.663-.054-.084-.086-.288-.072-.455.018-.206-.003-.26-.065-.17-.064.096-.107.031-.149-.224-.057-.354-.157-.524-.5-.848-.096-.092-.175-.202-.175-.245 0-.13-.34-.484-.465-.484-.065 0-.144-.068-.176-.152-.032-.083-.151-.151-.266-.151-.114 0-.233-.067-.265-.149-.031-.082-.21-.178-.4-.213-.188-.036-.342-.102-.342-.148 0-.045-.249-.113-.553-.151-.345-.044-.528-.11-.488-.175.045-.073-.18-.085-.706-.04-.484.04-.771.028-.771-.035 0-.055-.181-.1-.403-.1-.222 0-.403.047-.403.104zm18.533.098c0 .056-.246.101-.547.101-.344 0-.601.055-.693.147a1.04 1.04 0 01-.41.213c-.145.037-.264.102-.264.146 0 .043-.112.107-.249.142a.65.65 0 00-.365.28c-.135.254-.699.79-.83.79-.048 0-.063.066-.032.147.034.09-.023.171-.145.21-.142.045-.183.12-.14.258.035.109.015.194-.045.194s-.108.077-.108.172c0 .106-.035.135-.092.076-.05-.053-.107-.51-.125-1.016-.038-1.008-.27-1.45-.765-1.454-.125 0-.226-.047-.226-.103 0-.063-.739-.1-2.015-.1h-2.014V8.51l.753-.038c.954-.048.858-.665.858 5.533v5.297h3.609l.034-3.743c.024-2.695.066-3.763.15-3.815.064-.04.149-.243.188-.451.039-.209.116-.38.17-.38.056 0 .076-.065.045-.145-.034-.09.023-.172.146-.211.11-.036.184-.117.163-.18-.053-.161.892-1.066 1.192-1.141.135-.034.246-.102.246-.15 0-.05.181-.119.403-.155.221-.035.403-.104.403-.152 0-.049.385-.088.855-.088h.857V5.255h-.252c-.139 0-.252-.045-.252-.1 0-.056-.113-.102-.252-.102-.138 0-.251.046-.251.101zM23.553 8.057c.036.056.167.134.292.173.125.039.227.112.227.162s.062.067.139.038c.089-.035.178.057.247.255.058.17.154.31.212.31.057 0 .133.182.169.404.035.222.099.404.14.404.043 0 .095.125.118.278l.04.278-2.77-.028c-2.86-.03-3.134-.073-2.726-.427.103-.09.22-.292.259-.449.068-.273.696-.966.875-.966.047 0 .058-.045.024-.1-.035-.056.008-.102.094-.102.087 0 .157-.044.157-.098 0-.053.068-.071.151-.04.084.033.151.011.151-.047 0-.215 2.065-.257 2.201-.045zm16.045 5.435c.02.306.001.556-.04.556-.042 0-.076.091-.076.202 0 .111-.05.202-.113.202-.065 0-.088.09-.056.216.03.118.002.276-.064.35-.325.365-.43.505-.525.694-.057.113-.239.27-.403.35a1.952 1.952 0 00-.432.277.463.463 0 01-.27.135c-.074 0-.151.049-.17.108-.048.142-1.628.138-1.676-.004-.019-.057-.08-.104-.135-.104-.248 0-.84-.772-.807-1.053.021-.183-.005-.259-.075-.216-.064.04-.108-.018-.108-.14 0-.115.04-.208.089-.208.05 0 .12-.162.157-.36.036-.197.13-.383.208-.413.078-.03.169-.14.201-.242.036-.112.119-.165.206-.132.08.031.145.01.145-.047 0-.058.148-.136.328-.175.18-.04.352-.111.383-.16.031-.048.405-.117.831-.153.426-.037.775-.105.775-.152 0-.048.359-.087.796-.087h.797l.034.556z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */