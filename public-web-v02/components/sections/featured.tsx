import { ComponentProps } from "@/lib/types";
import { Button } from "../ui/button";
import { handleFeaturedTop } from "@/actions/editor.actions";

export default function Featured({ children, id }: ComponentProps) {
  return (
    <div style={{ background: "red", height: "50vh", width: "100vw" }}>
      {children}
      <form action={handleFeaturedTop}>
        <Button name="id" value={id}>
          Move Featured To Top - {id}
        </Button>
      </form>
    </div>
  );
}
