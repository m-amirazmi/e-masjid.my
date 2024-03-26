import { ComponentProps } from "@/lib/types";
import { Button } from "../ui/button";
import { handleFeaturedTop } from "@/actions/editor.actions";

export default function Hero({ children, id }: ComponentProps) {
  return (
    <div style={{ background: "blue", height: "100vh", width: "100vw" }}>
      {children}
      <form action={handleFeaturedTop}>
        <Button name="id" value={id}>
          Move Hero To Top - {id}
        </Button>
      </form>
    </div>
  );
}
