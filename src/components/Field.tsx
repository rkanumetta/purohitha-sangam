import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Field({ id, label, error, hint, className = "", ...props }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[15px] font-medium text-ink dark:text-[#f3efe6]">
        {label}
      </label>
      <input
        id={id}
        className={`h-12 rounded-xl border bg-white px-3 text-[16px] text-ink outline-none ring-kumkum/40 focus:ring-2 dark:bg-night-3 dark:text-[#f3efe6] ${
          error ? "border-kumkum" : "border-ink/15 dark:border-white/12"
        } ${className}`}
        {...props}
      />
      {hint && !error ? <p className="text-[13px] text-ink-soft dark:text-[#b8b0a2]">{hint}</p> : null}
      {error ? <p className="text-[13px] text-kumkum-deep dark:text-[#f0c9a8]">{error}</p> : null}
    </div>
  );
}

type AreaProps = {
  id: string;
  label: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Area({ id, label, error, ...props }: AreaProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[15px] font-medium text-ink dark:text-[#f3efe6]">
        {label}
      </label>
      <textarea
        id={id}
        className={`min-h-28 rounded-xl border bg-white px-3 py-3 text-[16px] text-ink outline-none ring-kumkum/40 focus:ring-2 dark:bg-night-3 dark:text-[#f3efe6] ${
          error ? "border-kumkum" : "border-ink/15 dark:border-white/12"
        }`}
        {...props}
      />
      {error ? <p className="text-[13px] text-kumkum-deep dark:text-[#f0c9a8]">{error}</p> : null}
    </div>
  );
}
