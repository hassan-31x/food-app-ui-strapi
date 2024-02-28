import { type Button } from "@/types/custom-types";
import { getRgba } from "@/utils/convertColor";

type Props = {
  buttonProps: Button;
};

const Button = ({ buttonProps }: Props) => {
  const { text, variant, hasGlow = false, color } = buttonProps;
  if (variant === "TRANSPARENT") {
    return (
      <button className="bg-transparent text-white border-white border-[1px] rounded-3xl lg:text-sm md:text-xxs text-xxss px-3 py-1 md:px-4 md:py-2 shadow-lg font-bold uppercase">
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
      className=" text-white rounded-3xl lg:text-sm md:text-xxs text-xxss px-3 py-1 md:px-4 md:py-2 drop-shadow-2xl custom-shadow font-bold uppercase"
      style={{ background: color }}
    >
      {text}
    </button>
  );
};

export default Button;
