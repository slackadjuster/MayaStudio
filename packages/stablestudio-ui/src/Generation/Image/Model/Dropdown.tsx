import { Generation } from "~/Generation";
import { Theme } from "~/Theme";

export function Dropdown({ id, className }: Styleable & { id: ID }) {
  const { setInput, input } = Generation.Image.Input.use(id);
  const { data: models, isLoading } = Generation.Image.Models.use();

  const onClick = useCallback(
    (value: string) => {
      setInput((input) => {
        console.log("model", value);
        input.model = value;
      });
    },
    [setInput]
  );

  const options = useMemo(
    () => [
      ...(models ?? []).map(({ id, name }) => ({
        value: id,
        name:
          id === "stable-diffusion-xl-v2-2" ? (
            <>
              SDXL&nbsp;
              <Theme.New>Preview</Theme.New>
            </>
          ) : id === "stable-diffusion-xl-beta-v2-2-2" ? (
            <>
              SDXL Beta&nbsp;
              <Theme.New>Preview</Theme.New>
            </>
          ) : id === "stable-diffusion-xl-tiling-v2-2" ? (
            <>
              SDXL Tiling&nbsp;
              <Theme.New>Preview</Theme.New>
            </>
          ) : (
            name
          ),
      })),
    ],
    [models]
  );

  if (true) return null;
