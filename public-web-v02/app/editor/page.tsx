import { getHomepageData, handleFeaturedTop } from "@/actions/editor.actions";
import Featured from "@/components/sections/featured";
import Hero from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "@/lib/types";

const componentsList: { [key: string]: React.FC<ComponentProps> } = {
  hero: Hero,
  featured: Featured,
};

export default async function EditorDashboard(here: any) {
  const { content, sections } = await getHomepageData();

  return (
    <div>
      {sections.map((i) => {
        const componentName = i.split("-")[0];
        const Component = componentsList[componentName];
        return (
          <Component key={i} id={i}>
            {content[i].text}
          </Component>
        );
      })}
    </div>
  );
}
