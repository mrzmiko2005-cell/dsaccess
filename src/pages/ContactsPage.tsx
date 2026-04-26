import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactsPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div>
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a38]/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-3">{t("contacts.header.eyebrow")}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">{t("contacts.header.title")}</h1>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("contacts.info.title")}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{t("contacts.info.description")}</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(27,58,107,0.1)] transition-all duration-200">
                  <div className="w-10 h-10 bg-[#EEF3FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={17} className="text-[#1B3A6B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t("contacts.info.phone")}</div>
                    <a href="tel:+77272000000" className="text-sm font-semibold text-gray-900 hover:text-[#1B3A6B] transition-colors block">
                      +7 (727) 200-00-00
                    </a>
                    <a href="tel:+77001234567" className="text-sm text-gray-500 hover:text-[#1B3A6B] transition-colors block mt-0.5">
                      +7 (700) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(27,58,107,0.1)] transition-all duration-200">
                  <div className="w-10 h-10 bg-[#EEF3FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={17} className="text-[#1B3A6B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t("contacts.info.email")}</div>
                    <a href="mailto:info@dsaccess.kz" className="text-sm font-semibold text-gray-900 hover:text-[#1B3A6B] transition-colors block">
                      info@dsaccess.kz
                    </a>
                    <a href="mailto:sales@dsaccess.kz" className="text-sm text-gray-500 hover:text-[#1B3A6B] transition-colors block mt-0.5">
                      sales@dsaccess.kz
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(27,58,107,0.1)] transition-all duration-200">
                  <div className="w-10 h-10 bg-[#EEF3FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-[#1B3A6B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t("contacts.info.address")}</div>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {t("contacts.info.addressValue")}
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(27,58,107,0.1)] transition-all duration-200">
                  <div className="w-10 h-10 bg-[#EEF3FB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={17} className="text-[#1B3A6B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{t("contacts.info.hours")}</div>
                    <p className="text-sm text-gray-700">{t("contacts.info.weekdayHours")}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{t("contacts.info.saturdayHours")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 p-8 lg:p-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t("contacts.form.title")}</h3>
                <p className="text-sm text-gray-500 mb-8">{t("contacts.form.description")}</p>

                {submitted ? (
                  <div className="bg-[#EEF3FB] border border-[#1B3A6B]/20 p-8 text-center">
                    <div className="w-14 h-14 bg-[#1B3A6B] flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{t("contacts.form.successTitle")}</h4>
                    <p className="text-sm text-gray-500">{t("contacts.form.successDescription")}</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-[#1B3A6B] underline"
                    >
                      {t("contacts.form.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                          {t("contacts.form.fullName")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t("contacts.form.placeholderName")}
                          className="w-full px-4 py-3 text-sm border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1B3A6B] transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                          {t("contacts.form.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t("contacts.form.placeholderEmail")}
                          className="w-full px-4 py-3 text-sm border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1B3A6B] transition-colors bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {t("contacts.form.phone")}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t("contacts.form.placeholderPhone")}
                        className="w-full px-4 py-3 text-sm border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1B3A6B] transition-colors bg-gray-50 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                        {t("contacts.form.message")} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("contacts.form.placeholderMessage")}
                        className="w-full px-4 py-3 text-sm border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#1B3A6B] transition-colors bg-gray-50 focus:bg-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" size="lg" fullWidth>
                        {loading ? t("contacts.form.sending") : t("contacts.form.submit")}
                      </Button>
                      <p className="text-xs text-gray-400 text-center mt-4">{t("contacts.form.consent")}</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 bg-[#d1d5db]">
          <iframe
            title={t("contacts.map.iframeTitle")}
            className="w-full h-full border-0 grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92886.72503453!2d76.84887!3d43.22233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ea0e2dc26f9%3A0x73fb7b3d2e40b8f0!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1680000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="absolute bottom-6 left-6 bg-white border-l-4 border-[#1B3A6B] shadow-lg px-5 py-4">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={14} className="text-[#1B3A6B]" />
            <span className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest">{t("contacts.map.title")}</span>
          </div>
          <p className="text-xs text-gray-600">{t("contacts.map.shortAddress")}</p>
        </div>
      </section>
    </div>
  );
}
