import { FormEvent, useMemo, useState } from "react";
import { Field } from "../components/Field";
import { labels, org } from "../data/content";

type FormState = {
  name: string;
  father: string;
  village: string;
  mandal: string;
  district: string;
  pincode: string;
  profession: string;
  phone: string;
  aadhaar: string;
};

const empty: FormState = {
  name: "",
  father: "",
  village: "",
  mandal: "",
  district: "",
  pincode: "",
  profession: "",
  phone: "",
  aadhaar: "",
};

function makeId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `VAPSS-${new Date().getFullYear()}-${n}`;
}

export function Membership() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [saving, setSaving] = useState(false);
  const [memberId, setMemberId] = useState("");

  const fields = useMemo(
    () =>
      [
        ["name", labels.name],
        ["father", labels.father],
        ["village", labels.village],
        ["mandal", labels.mandal],
        ["district", labels.district],
        ["pincode", labels.pincode],
        ["profession", labels.profession],
        ["phone", labels.phone],
        ["aadhaar", labels.aadhaar],
      ] as const,
    [],
  );

  function validate(next: FormState) {
    const e: Partial<FormState> = {};
    (Object.keys(empty) as (keyof FormState)[]).forEach((key) => {
      if (!next[key].trim()) e[key] = labels.required;
    });
    if (next.phone && !/^[6-9]\d{9}$/.test(next.phone.trim())) e.phone = labels.invalidPhone;
    return e;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSaving(true);
    const id = makeId();
    const record = { ...form, memberId: id, createdAt: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("vapss-members") || "[]") as unknown[];
    localStorage.setItem("vapss-members", JSON.stringify([record, ...prev]));
    window.setTimeout(() => {
      setMemberId(id);
      setSaving(false);
      setForm(empty);
    }, 400);
  }

  return (
    <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-12 md:px-6">
      <div className="md:col-span-5">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
          {labels.join}
        </h1>
        <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
          {"\u0c38\u0c2d\u0c4d\u0c2f\u0c41\u0c32\u0c41 \u0c28\u0c2e\u0c4b\u0c26\u0c41 \u0c1a\u0c47\u0c38\u0c41\u0c15\u0c4b\u0c28\u0c47\u0c02\u0c26\u0c41\u0c15\u0c41"}
        </p>
        <p className="mt-6 text-[15px] text-ink-soft dark:text-[#c9c2b4]">
          {org.nameTe}, {org.placeTe}
        </p>
        {memberId ? (
          <div className="mt-8 rounded-xl bg-leaf px-5 py-6 text-[#f3efe6]">
            <p className="text-[15px]">{labels.success}</p>
            <p className="mt-2 font-display text-2xl">
              {labels.memberId}: {memberId}
            </p>
          </div>
        ) : null}
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 md:col-span-7" noValidate>
        {fields.map(([key, label]) => (
          <Field
            key={key}
            id={key}
            label={label}
            value={form[key]}
            error={errors[key]}
            inputMode={key === "phone" || key === "pincode" || key === "aadhaar" ? "numeric" : undefined}
            onChange={(ev) => setForm((f) => ({ ...f, [key]: ev.target.value }))}
          />
        ))}
        <button
          type="submit"
          disabled={saving}
          className="mt-2 h-12 rounded-xl bg-kumkum text-[16px] font-medium text-white hover:bg-kumkum-deep active:scale-[0.98] disabled:opacity-70"
        >
          {saving ? labels.sending : labels.submit}
        </button>
      </form>
    </div>
  );
}
