import Slider, { SliderType } from "./Slider";
import TextMedia, { TextMediaType } from "./TextMedia";
import Text, { TextType } from "./Text";

interface ModulesProps {
  modules: [SliderType | TextMediaType | TextType];
}

const Modules = ({ modules }: ModulesProps) => {
  const moduleJSX = modules.map((module: any) => {
    switch (module.__typename) {
      case "Slider":
        return <Slider data={module} />;
      case "TextMediaModule":
        return <TextMedia data={module} />;
      case "TextModule":
        return <Text data={module} />;
      default:
        return null;
    }
  });

  return <div>{moduleJSX}</div>;
};

export default Modules;
