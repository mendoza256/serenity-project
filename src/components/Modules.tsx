import Slider, { SliderType } from "./Slider";
import TextMedia, { TextMediaType } from "./TextMedia";
import Text, { TextType } from "./Text";

export type ModuleType = SliderType | TextMediaType | TextType;

interface ModulesProps {
  modules: ModuleType[];
}

const Modules = ({ modules }: ModulesProps) => {
  const moduleJSX = modules.map((module, i: number) => {
    switch (module.__typename) {
      case "Slider":
        return <Slider data={module} key={i} />;
      case "TextMediaModule":
        return <TextMedia data={module} key={i} />;
      case "TextModule":
        return <Text data={module} key={i} />;
      default:
        return null;
    }
  });

  return <>{moduleJSX}</>;
};

export default Modules;
