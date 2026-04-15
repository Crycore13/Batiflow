"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
  pendingLabel?: string;
  className?: string;
};

export function SubmitButton({
  label,
  pendingLabel = "Enregistrement...",
  className = "",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`touch-target inline-flex w-full items-center justify-center rounded-[1.4rem] px-4 py-3 text-base font-semibold text-white shadow-[0_16px_30px_rgba(213,91,45,0.28)] disabled:cursor-wait disabled:opacity-70 ${className}`}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}
