import { FormEvent, useState } from "react";
import { Area, Field } from "../components/Field";
import { affiliatedOffice, labels, org } from "../data/content";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = labels.required;
    if (!/^[6-9]\d{9}$/.test(phone.trim())) e.phone = labels.invalidPhone;
    if (!message.trim()) e.message = labels.required;
    setErrors(e);
    if (Object.keys(e).length) return;
    const prev = JSON.parse(localStorage.getItem("vapss-messages") || "[]") as unknown[];
    localStorage.setItem(
      "vapss-messages",
      JSON.stringify([{ name, phone, message, createdAt: new Date().toISOString() }, ...prev]),
    );
    setDone(true);
    setName("");
    setPhone("");
    setMessage("");
  }

  return (
    <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-12 md:px-6">
      <div className="md:col-span-5">
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl dark:text-[#f3efe6]">
          {labels.contact}
        </h1>
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-[15px] font-semibold text-ink dark:text-[#f3efe6]">{labels.office}</p>
            <p className="mt-2 leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
              {org.nameTe}
              <br />
              {org.placeTe}
            </p>
            <p className="mt-3 text-ink-soft dark:text-[#c9c2b4]">
              {labels.registration}: {org.registration}
            </p>
            <a href={`tel:${org.phone}`} className="mt-2 block text-kumkum-deep dark:text-[#f0c9a8]">
              {labels.phone}: {org.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-[15px] font-semibold text-ink dark:text-[#f3efe6]">{labels.relatedOffice}</p>
            <p className="mt-2 leading-relaxed text-ink-soft dark:text-[#c9c2b4]">
              {affiliatedOffice.name}, {affiliatedOffice.place}
              <br />
              {affiliatedOffice.address}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 md:col-span-7" noValidate>
        <Field id="c-name" label={labels.name} value={name} error={errors.name} onChange={(e) => setName(e.target.value)} />
        <Field
          id="c-phone"
          label={labels.phone}
          value={phone}
          error={errors.phone}
          inputMode="numeric"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Area
          id="c-message"
          label={labels.message}
          value={message}
          error={errors.message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="h-12 rounded-xl bg-kumkum text-[16px] font-medium text-white hover:bg-kumkum-deep active:scale-[0.98]"
        >
          {labels.submit}
        </button>
        {done ? <p className="text-[15px] text-leaf">{labels.success}</p> : null}
      </form>
    </div>
  );
}
