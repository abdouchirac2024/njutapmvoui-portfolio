import type { ComponentProps } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-10 text-lg font-semibold text-foreground" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-8 text-base font-semibold text-foreground" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a
      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-4 text-[15px] leading-relaxed text-muted" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="rounded bg-foreground/[0.06] px-1.5 py-0.5 text-[13px] text-foreground" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="mt-4 border-l-2 border-border pl-4 text-[15px] italic leading-relaxed text-muted" {...props} />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
