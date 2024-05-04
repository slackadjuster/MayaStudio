import { Link } from "react-router-dom";
import { Shortcut } from "~/Shortcut";
import { Theme } from "~/Theme";

export const Right = () => {
  const { setIsOpen } = Shortcut.Palette.use();
  const isMobileDevice = Theme.useIsMobileDevice();
  return (
    <div className="flex grow basis-0 items-center justify-end gap-2">
      <>
        {}
      </>
    </div>
  );
};
