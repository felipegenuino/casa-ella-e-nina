import React from "react";

// Card capa (navy, sem foto). Variantes: title | intro | tags | nav.
export default function CardSlide({
  variant,
  title,
  intro = [],
  tags = [],
  links = [],
  onNavigate,
}) {
  const pill =
    "rounded bg-[#1e345d]/30 px-3.5 py-2 text-[15px] leading-none text-[#a5b4fc]";
  return (
    <div
      role="img"
      aria-label={title}
      className="relative h-full w-full overflow-hidden rounded-lg bg-[#254174]"
    >
      <div className="absolute inset-0 bg-indigo-600/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />

      <div className="relative z-10 flex h-full flex-col gap-8 px-8 py-14 md:px-10 md:py-16">
        <div className="heading text-4xl md:text-5xl text-[#f0fdf4]">{title}</div>

        {variant === "intro" && intro.length > 0 && (
          <div className="space-y-4 text-white/80">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {variant === "tags" && tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.map((t, i) => (
              <span key={i} className={pill}>
                {t}
              </span>
            ))}
          </div>
        )}

        {variant === "nav" && links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {links.map((l, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate?.(l.target);
                }}
                className={`${pill} cursor-pointer transition-colors hover:bg-[#1e345d]/70 hover:text-white`}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
