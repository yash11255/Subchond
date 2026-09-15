'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PainMapSelector, PainZone } from '../anatomy/PainMapSelector';
import {
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  CheckCircle2,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Users,
  FileText,
  Lock,
  Footprints,
  Dumbbell,
  Mountain,
  Heart,
} from 'lucide-react';
import { CLINIC_CONTACT } from '@/data/contact';
import { WhatsAppMark } from '@/components/ui/ContactActions';

const TRUST_BADGES = [
  { icon: ClipboardList, label: 'Quick & Easy' },
  { icon: ShieldCheck, label: 'Confidential & Secure' },
  { icon: Users, label: 'Reviewed by Our Clinical Team' },
  { icon: FileText, label: 'Personalised Guidance' },
];

const NEXT_STEPS = [
  'Submit your details and upload your reports (if available).',
  'Our team will review your information.',
  'We will get in touch with guidance on the next steps.',
  'If suitable, we will discuss treatment options and answer your questions.',
];

const STEP_LABELS = ['Basic Information', 'Symptoms', 'Medical History', 'Imaging Upload', 'Submit'];

const CLOSING_BADGES = [
  { icon: Footprints, label: 'Less Pain' },
  { icon: Dumbbell, label: 'Stay Active' },
  { icon: Mountain, label: 'Keep Exploring' },
  { icon: Heart, label: 'Better Tomorrows' },
];

export const AssessmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Step 1: Basic Information
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');

  // Step 2: Symptoms
  const [painZones, setPainZones] = useState<PainZone[]>(['Inside']);
  const [duration, setDuration] = useState<string>('6–12 months');
  const [difficultActivities, setDifficultActivities] = useState<string[]>(['Climbing stairs', 'Walking long distances']);

  // Step 3: Medical History
  const [treatmentsTried, setTreatmentsTried] = useState<string[]>(['Physiotherapy']);

  // Step 4: Imaging Upload
  const [imagingStatus, setImagingStatus] = useState<string>('Both');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const [waLink, setWaLink] = useState<string>('');

  const toggleActivity = (act: string) => {
    if (difficultActivities.includes(act)) {
      setDifficultActivities(difficultActivities.filter((a) => a !== act));
    } else {
      setDifficultActivities([...difficultActivities, act]);
    }
  };

  const toggleTreatment = (t: string) => {
    if (t === 'None') {
      setTreatmentsTried(['None']);
      return;
    }
    const filtered = treatmentsTried.filter((item) => item !== 'None');
    if (filtered.includes(t)) {
      setTreatmentsTried(filtered.filter((item) => item !== t));
    } else {
      setTreatmentsTried([...filtered, t]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles([...uploadedFiles, ...names]);
    }
  };

  const generateWhatsAppUrl = () => {
    const targetNumber = CLINIC_CONTACT.whatsapp.number;
    const message = `*SUBCHOND Joint Assessment*
------------------------------------
*Patient Name:* ${name.trim() || 'Not specified'}
*Age:* ${age.trim() || 'Not specified'}
*Gender:* ${gender || 'Not specified'}
*Phone:* ${phone.trim() || 'Not specified'}
*Email:* ${email.trim() || 'Not specified'}
*City:* ${city.trim() || 'Not specified'}

*Clinical Summary:*
• *Pain Zones:* ${painZones.join(', ') || 'None selected'}
• *Symptom Duration:* ${duration}
• *Impacted Activities:* ${difficultActivities.join(', ') || 'None selected'}
• *Prior Treatments:* ${treatmentsTried.join(', ') || 'None'}
• *Imaging Available:* ${imagingStatus}
• *Uploaded Documents:* ${uploadedFiles.length > 0 ? uploadedFiles.join(', ') : 'None attached (will share via WhatsApp)'}

------------------------------------
_Submitted via subchond.com Joint Assessment Form_`;

    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    setWaLink(url);
    setSubmitted(true);
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const totalSteps = STEP_LABELS.length;

  return (
    <section
      id="assessment"
      className="relative overflow-hidden border-t border-black/[0.08] bg-white"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-[clamp(4.5rem,8vh,6rem)]">
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <div className="reference-kicker">
            <span>Patient intake</span>
            <span className="reference-kicker-index">06</span>
          </div>

          <h2 className="text-section-headline font-light tracking-tight text-[#111827]">
            Joint Assessment <span className="reference-title-muted">Form</span>
          </h2>

          <p className="text-editorial-body text-[#4B5563]">
            Take the first step towards a personalised plan.
          </p>

          <p className="text-sm leading-relaxed text-[#667085] sm:text-base">
            Share a few details about your knee. Our team will review your information, including
            imaging if available, and guide you on whether subchondral treatment may be suitable
            for you.
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F7F8FA] text-[#0071E3]">
                <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </span>
              <span className="text-sm font-medium leading-snug text-[#111827]">{label}</span>
            </div>
          ))}
        </div>

        {/* Hero strip */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-[#071A2B]">
          {/*
            Placeholder pending the real "knee pain with anatomical glow overlay"
            photo the user is providing. Swap the src below for
            /images/assessment-hero.jpg once that file lands.
          */}
          <Image
            src="/images/knee-anatomy.png"
            alt="Person holding their knee in pain, with an anatomical overlay highlighting the joint"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/70 via-transparent to-transparent" />
          <p className="absolute bottom-6 right-7 max-w-[14rem] text-right font-editorial text-lg italic text-white/90 sm:text-xl">
            Your knee story matters.
          </p>
        </div>

        {/* Form + sidebar */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Form card */}
          <div className="relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-[#F7F8FA] p-8 shadow-sm sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 px-2 py-10 text-center"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#0071E3]/10 text-[#0071E3]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-light tracking-tight text-[#111827] sm:text-4xl">
                    Assessment submitted. <br />
                    <span className="font-normal text-[#0071E3]">Connecting you on WhatsApp...</span>
                  </h3>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-[#4B5563] sm:text-base">
                    Your assessment has been formatted. We are opening WhatsApp to connect directly
                    with Dr. Manu Bora&apos;s clinical team at{' '}
                    <span className="font-mono font-semibold text-[#111827]">
                      {CLINIC_CONTACT.whatsapp.display}
                    </span>
                    .
                  </p>
                </div>

                {waLink && (
                  <div className="flex flex-col items-center gap-3 pt-2">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#20bd5a]"
                    >
                      <WhatsAppMark className="h-5 w-5" />
                      <span>Open in WhatsApp ({CLINIC_CONTACT.whatsapp.display})</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <span className="text-xs text-[#667085]">
                      Click above if WhatsApp didn&apos;t open automatically.
                    </span>
                  </div>
                )}

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="mx-auto block pt-4 text-xs font-semibold text-[#0071E3] hover:underline"
                >
                  Start a new assessment
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Step rail */}
                <ol className="flex items-center justify-between gap-1 border-b border-black/[0.08] pb-5">
                  {STEP_LABELS.map((label, i) => {
                    const step = i + 1;
                    const isActive = step === currentStep;
                    const isDone = step < currentStep;
                    return (
                      <li key={label} className="flex flex-1 flex-col items-center gap-2 text-center">
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-full font-mono text-[0.7rem] font-semibold transition-colors ${
                            isActive
                              ? 'bg-[#111827] text-white'
                              : isDone
                                ? 'bg-[#0071E3] text-white'
                                : 'bg-white text-[#9CA3AF] ring-1 ring-inset ring-black/10'
                          }`}
                        >
                          {step}
                        </span>
                        <span
                          className={`hidden text-[0.65rem] font-medium leading-tight sm:block ${
                            isActive ? 'text-[#111827]' : 'text-[#9CA3AF]'
                          }`}
                        >
                          {label}
                        </span>
                      </li>
                    );
                  })}
                </ol>

                {/* STEP 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#111827] sm:text-3xl">
                        1. Basic Information
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">Tell us about yourself.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-base text-[#111827] focus:border-[#0071E3] focus:outline-none sm:text-sm"
                      />
                      <input
                        type="number"
                        min={1}
                        max={120}
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-base text-[#111827] focus:border-[#0071E3] focus:outline-none sm:text-sm"
                      />
                      <div className="flex items-center gap-4 rounded-xl border border-black/[0.08] bg-white px-4 py-3 sm:col-span-2">
                        <span className="text-sm text-[#667085]">Gender</span>
                        <div className="flex flex-1 items-center justify-end gap-4">
                          {['Male', 'Female', 'Other'].map((g) => (
                            <label key={g} className="flex items-center gap-1.5 text-sm text-[#111827]">
                              <input
                                type="radio"
                                name="gender"
                                required
                                checked={gender === g}
                                onChange={() => setGender(g)}
                                className="accent-[#0071E3]"
                              />
                              {g}
                            </label>
                          ))}
                        </div>
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-base text-[#111827] focus:border-[#0071E3] focus:outline-none sm:text-sm"
                      />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number (+91...)"
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-base text-[#111827] focus:border-[#0071E3] focus:outline-none sm:text-sm"
                      />
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-base text-[#111827] focus:border-[#0071E3] focus:outline-none sm:text-sm sm:col-span-2"
                      />
                    </div>

                    <div className="flex items-start gap-3 rounded-2xl bg-white p-4 text-xs text-[#667085]">
                      <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#0071E3]" strokeWidth={1.8} />
                      <p>
                        <span className="font-semibold text-[#111827]">Your information is safe with us.</span>{' '}
                        We follow strict privacy and data protection guidelines.
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 2: Symptoms */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#111827] sm:text-3xl">
                        2. Symptoms
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">Tell us where it hurts, and how it affects you.</p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-[#111827]">Where is your pain?</p>
                      <PainMapSelector selectedZones={painZones} onChange={setPainZones} />
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-[#111827]">How long have you had symptoms?</p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {['< 3 months', '3–6 months', '6–12 months', '> 1 year'].map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setDuration(d)}
                            className={`rounded-2xl border p-4 text-left transition-all ${
                              duration === d
                                ? 'border-[#0071E3] bg-white font-semibold text-[#0071E3] shadow-sm'
                                : 'border-transparent bg-white/60 text-[#111827] hover:bg-white'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-[#111827]">What activities are difficult?</p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {[
                          'Walking long distances',
                          'Climbing stairs',
                          'Sitting down / standing up',
                          'Squatting or kneeling',
                          'Sports & recreational running',
                          'Sleeping (night pain)',
                        ].map((act) => {
                          const isSelected = difficultActivities.includes(act);
                          return (
                            <button
                              key={act}
                              type="button"
                              onClick={() => toggleActivity(act)}
                              className={`flex items-center justify-between rounded-2xl border p-4 text-left text-sm transition-all ${
                                isSelected
                                  ? 'border-[#0071E3] bg-white font-semibold text-[#0071E3] shadow-sm'
                                  : 'border-transparent bg-white/60 text-[#111827] hover:bg-white'
                              }`}
                            >
                              <span>{act}</span>
                              <span
                                className={`grid size-4 place-items-center rounded-full border text-[10px] ${
                                  isSelected
                                    ? 'border-[#0071E3] bg-[#0071E3] font-bold text-white'
                                    : 'border-[#C7C7CC] bg-white'
                                }`}
                              >
                                {isSelected ? '✓' : ''}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Medical History */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#111827] sm:text-3xl">
                        3. Medical History
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">Have you tried treatment before?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        'Physiotherapy & Exercise',
                        'Oral / Topical Medications',
                        'Intra-articular Injections',
                        'Weight / Load Management',
                        'Prior Knee Surgery',
                        'None',
                      ].map((t) => {
                        const isSelected = treatmentsTried.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTreatment(t)}
                            className={`flex items-center justify-between rounded-2xl border p-4 text-left text-sm transition-all ${
                              isSelected
                                ? 'border-[#0071E3] bg-white font-semibold text-[#0071E3] shadow-sm'
                                : 'border-transparent bg-white/60 text-[#111827] hover:bg-white'
                            }`}
                          >
                            <span>{t}</span>
                            <span
                              className={`grid size-4 place-items-center rounded-full border text-[10px] ${
                                isSelected
                                  ? 'border-[#0071E3] bg-[#0071E3] font-bold text-white'
                                  : 'border-[#C7C7CC] bg-white'
                              }`}
                            >
                              {isSelected ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 4: Imaging Upload */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#111827] sm:text-3xl">
                        4. Imaging Upload
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">Have you had an MRI or X-ray?</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        { id: 'X-ray', desc: 'Standing weight-bearing plain radiograph' },
                        { id: 'MRI', desc: 'High-field magnetic resonance scan' },
                        { id: 'Both', desc: 'Both X-rays and MRI scans available' },
                        { id: 'Neither', desc: 'No diagnostic imaging completed yet' },
                      ].map((img) => (
                        <button
                          key={img.id}
                          type="button"
                          onClick={() => setImagingStatus(img.id)}
                          className={`rounded-2xl border p-4 text-left transition-all ${
                            imagingStatus === img.id
                              ? 'border-[#0071E3] bg-white text-[#0071E3] shadow-sm'
                              : 'border-transparent bg-white/60 text-[#111827] hover:bg-white'
                          }`}
                        >
                          <div className="text-base font-semibold">{img.id}</div>
                          <div className="mt-1 text-xs text-[#667085]">{img.desc}</div>
                        </button>
                      ))}
                    </div>

                    <label className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#D2D2D7] bg-white p-6 transition-colors hover:border-[#0071E3]">
                      <UploadCloud className="mb-1.5 h-7 w-7 text-[#0071E3]" />
                      <span className="text-sm font-semibold text-[#111827]">
                        Upload MRI, X-ray, or clinical reports
                      </span>
                      <span className="mt-0.5 text-xs text-[#667085]">PDF, JPEG or PNG</span>
                      <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                    </label>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-1">
                        {uploadedFiles.map((file, i) => (
                          <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#0071E3]">
                            <FileCheck className="h-3.5 w-3.5" />
                            <span>{file}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 5: Submit */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-[#111827] sm:text-3xl">
                        5. Review & Submit
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">
                        Check your details, then send your assessment to our clinical team.
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 gap-x-6 gap-y-3 rounded-2xl bg-white p-5 text-sm sm:grid-cols-2">
                      {[
                        ['Name', name || 'Not specified'],
                        ['Age / Gender', `${age || '?'} / ${gender || 'Not specified'}`],
                        ['Contact', `${phone || 'Not specified'} · ${email || 'Not specified'}`],
                        ['City', city || 'Not specified'],
                        ['Pain zones', painZones.join(', ') || 'None selected'],
                        ['Duration', duration],
                        ['Activities affected', difficultActivities.join(', ') || 'None selected'],
                        ['Prior treatments', treatmentsTried.join(', ') || 'None'],
                        ['Imaging available', imagingStatus],
                        ['Files attached', uploadedFiles.length > 0 ? uploadedFiles.join(', ') : 'None'],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-xs uppercase tracking-wide text-[#9CA3AF]">{label}</dt>
                          <dd className="text-[#111827]">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between border-t border-black/[0.08] pt-6">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex items-center gap-1.5 rounded-full border border-black/[0.1] px-5 py-2.5 text-xs font-semibold text-[#111827] transition-colors hover:bg-white"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>BACK</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex items-center gap-1.5 rounded-full bg-[#111827] px-7 py-3 text-xs font-semibold tracking-wider text-white shadow-sm transition-all hover:bg-[#0071E3]"
                    >
                      <span>NEXT: {STEP_LABELS[currentStep].toUpperCase()}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-full bg-[#0071E3] px-8 py-3.5 text-xs font-semibold tracking-wider text-white shadow-md shadow-[#0071E3]/25 transition-all hover:bg-[#0055B3]"
                    >
                      <span>SUBMIT ASSESSMENT</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#F7F8FA] p-6">
              <h3 className="text-base font-semibold text-[#111827]">What Happens Next?</h3>
              <ol className="mt-4 space-y-4">
                {NEXT_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-[#4B5563]">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-[#0071E3]/30 text-xs font-semibold text-[#0071E3]">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-[#F7F8FA] p-6">
              <Users className="h-6 w-6 text-[#0071E3]" strokeWidth={1.8} />
              <p className="mt-3 text-sm font-semibold text-[#111827]">
                Not sure if you&apos;re a candidate?
              </p>
              <p className="mt-1 text-sm text-[#667085]">
                That&apos;s okay. Fill the form and let our experts guide you.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Closing band, our own dark theme, not a stock lifestyle photo */}
      <div className="relative overflow-hidden border-t border-white/10 bg-[#071A2B] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#0071E3]/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
          <p className="max-w-xl font-editorial text-2xl italic text-white/90 sm:text-3xl">
            Knowledge today. More movement tomorrow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {CLOSING_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="h-5 w-5 text-[#60a5fa]" strokeWidth={1.7} />
                <span className="text-xs font-medium uppercase tracking-wide text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
