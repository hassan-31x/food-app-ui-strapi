import { type Button } from "@/types/custom-types";
import { getRgba } from "@/utils/convertColor";

type Props = {
  buttonProps: Button;
};

const Button = ({ buttonProps }: Props) => {
  const { text, variant, hasGlow = false, color } = buttonProps;
  if (variant === "TRANSPARENT") {
    return (
      <button className="bg-transparent text-white border-white border-[1px] rounded-3xl px-1 md:py-2 py-1 md:px-[0.4rem] lg:px-2 lg:py-2 lg:text-xxs md:text-xxs xl:text-xs text-xxss shadow-lg font-bold uppercase">
        {text}
      </button>
    );
  }

  if (hasGlow) {
    const rgba = getRgba(color)
    const boxShadowColor = `0 -24px 48px 0 ${rgba},0.2), 0 24px 48px 0 ${rgba},0.2), 0 -48px 48px 0 ${rgba},0.4), 0 48px 48px 0 ${rgba},0.4)`;
    return (
      <button
        className="text-white font-bold text-xs mt-[10%] px-4 py-2 lg:py-3 rounded-3xl drop-shadow-2xl"
        style={{ background: color, boxShadow: boxShadowColor }}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      className=" text-white rounded-3xl px-1 py-1 md:py-2 md:px-1 lg:px-2 lg:py-2 lg:text-xxs xl:text-xs md:text-xxs text-[0.28rem] drop-shadow-2xl custom-shadow font-bold uppercase"
      style={{ background: color }}
    >
      {text}
    </button>
  );
};

export default Button;
