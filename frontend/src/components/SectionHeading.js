import React from "react";
import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, description, align = "left", testid }) => {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <div data-testid={testid}>
        {eyebrow ? (
          <span className="inline-flex items-center rounded-full bg-[var(--brand-100)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-800)]">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
};
