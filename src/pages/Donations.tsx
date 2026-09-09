import { FormEvent, useState } from "react";
import { Area, Field } from "../components/Field";
import { labels, org } from "../data/content";

const kinds = [
  { id: "permanent", label: labels.permanentFund },
  { id: "fee", label: labels.membershipFee },
  { id: "general", label: labels.generalGift },
] as const;

export function Donations() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [kind, setKind] = useState<(typeof kinds)[number]["id"]>("general");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = labels.required;
    if (!/^[6-9]\d{9}$/.test(phone.trim())) e.phone = labels.invalidPhone;
    if (!amount.trim()) e.amount = labels.required;
    setErrors(e);
    if (Object.keys(e).length) return;
    const record = { name, phone, amount, kind, note, createdAt: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("vapss-donations") || "[]") as unknown[];
    localStorage.setItem("vapss-donations", JSON.stringify([record, ...prev]));
    setDone(true);
    setName("");
    setPhone("");
    setAmount("");
    setNote("");
  }

  return (
    <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-12 md:px-6">
      <div className="md:col-span-5">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
          {labels.donate}
        </h1>
        <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
          {labels.donateHelp}
        </p>
        <div className="mt-8 rounded-xl bg-night px-6 py-7 text-[#f3efe6]">
          <p className="font-latin text-[13px] text-[#c9c2b4]">UPI / QR</p>
          <p className="mt-2 font-display text-2xl">{org.phoneDisplay}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#c9c2b4]">{labels.afterDonate}</p>
          <a href={`tel:${org.phone}`} className="mt-4 inline-block text-[#f0c9a8]">
            {labels.president}: {org.phoneDisplay}
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 md:col-span-7" noValidate>
        <div className="grid gap-2">
          <p className="text-[15px] font-medium text-ink dark:text-[#f3efe6]">{labels.generalGift}</p>
          <div className="flex flex-wrap gap-2">
            {kinds.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setKind(item.id)}
                className={`rounded-xl px-4 py-2 text-[15px] ${
                  kind === item.id
                    ? "bg-kumkum text-white"
                    : "border border-ink/15 text-ink dark:border-white/15 dark:text-[#f3efe6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <Field id="d-name" label={labels.name} value={name} error={errors.name} onChange={(e) => setName(e.target.value)} />
        <Field
          id="d-phone"
          label={labels.phone}
          value={phone}
          error={errors.phone}
          inputMode="numeric"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Field
          id="d-amount"
          label={labels.amount}
          value={amount}
          error={errors.amount}
          inputMode="numeric"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Area id="d-note" label={labels.txn} value={note} onChange={(e) => setNote(e.target.value)} />
        <button
          type="submit"
          className="h-12 rounded-xl bg-kumkum text-[16px] font-medium text-white hover:bg-kumkum-deep active:scale-[0.98]"
        >
          {labels.submit}
        </button>
        {done ? <p className="text-[15px] text-leaf">{labels.success}. {labels.afterDonate}</p> : null}
      </form>
    </div>
  );
}
