import { JsonData } from "@/lib/types";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";

const homepageJsonPath = process.cwd() + "/data/homepage.json";

export const handleFeaturedTop = async (formData: FormData) => {
  "use server";
  const id = formData.get("id") as string;
  const file = await fs.readFile(homepageJsonPath, "utf8");
  const content: JsonData = JSON.parse(file);

  const copyContent = { ...content };
  const sectionIndex = copyContent.sections.indexOf(id);
  const sectionCopy = [...copyContent.sections];
  sectionCopy.splice(sectionIndex, 1);
  sectionCopy.unshift(id);

  copyContent.sections = sectionCopy;
  const updatedData = JSON.stringify(copyContent);
  await fs.writeFile(homepageJsonPath, updatedData);
  revalidatePath("/editor");
};

export const getHomepageData = async () => {
  const file = await fs.readFile(homepageJsonPath, "utf8");
  const content: JsonData = JSON.parse(file);

  return content;
};
