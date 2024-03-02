import { type Button } from "@/types/custom-types";
import { getRgba } from "@/utils/convertColor";

type Props = {
  buttonProps: Button;
  customClass?: string;
};

const Button = ({ buttonProps, customClass }: Props) => {
  const { text, variant, hasGlow = false, color } = buttonProps;
  if (variant === "TRANSPARENT") {
    return (
      <button className="bg-transparent border-[1px] rounded-3xl lg:text-sm md:text-xxs text-xxss px-3 md:px-4 py-1 md:py-2 lg:py-3 shadow-lg font-bold uppercase z-[100]" style={{ color: buttonProps?.color || '#fff', borderColor: buttonProps?.color || '#fff' }}>
        {text}
      </button>
    );
  }

  if (hasGlow) {
    const rgba = getRgba(color)
    // const boxShadowColor = `0 -24px 48px 0 ${rgba},0.2), 0 24px 48px 0 ${rgba},0.2), 0 -48px 48px 0 ${rgba},0.4), 0 48px 48px 0 ${rgba},0.4)`;
    const boxShadowColor = `0 0 90px 2px ${rgba},1)`;
    return (
      <button
        className={`text-white font-bold lg:text-sm md:text-xxs text-xxss px-3 py-1 md:px-4 md:py-2 lg:py-3 rounded-3xl z-[100] ${customClass}`}
        style={{ background: color, boxShadow: boxShadowColor }}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      className=" text-white rounded-3xl lg:text-sm md:text-xxs text-xxss px-3 py-1 md:px-4 md:py-2 lg:py-3 drop-shadow-2xl custom-shadow font-bold uppercase z-[100]"
      style={{ background: color }}
    >
      {text}
    </button>
  );
};

export default Button;
