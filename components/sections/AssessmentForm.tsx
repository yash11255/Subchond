'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PainMapSelector, PainZone } from '../anatomy/PainMapSelector';
import {
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { CLINIC_CONTACT } from '@/data/contact';
import { WhatsAppMark } from '@/components/ui/ContactActions';

export const AssessmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [painZones, setPainZones] = useState<PainZone[]>(['Inside']);
  const [duration, setDuration] = useState<string>('6–12 months');
  const [difficultActivities, setDifficultActivities] = useState<string[]>(['Climbing stairs', 'Walking long distances']);
  const [imagingStatus, setImagingStatus] = useState<string>('Both');
  const [treatmentsTried, setTreatmentsTried] = useState<string[]>(['Physiotherapy']);
  
  // Contact details & files
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
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
    const message = `*SUBCHOND Patient Assessment*
------------------------------------
*Patient Name:* ${name.trim() || 'Not specified'}
*Phone:* ${phone.trim() || 'Not specified'}
*Email:* ${email.trim() || 'Not specified'}
*City / Country:* ${city.trim() || 'Not specified'}

*Clinical Summary:*
• *Pain Zones:* ${painZones.join(', ') || 'None selected'}
• *Symptom Duration:* ${duration}
• *Impacted Activities:* ${difficultActivities.join(', ') || 'None selected'}
• *Imaging Available:* ${imagingStatus}
• *Prior Treatments:* ${treatmentsTried.join(', ') || 'None'}
• *Uploaded Documents:* ${uploadedFiles.length > 0 ? uploadedFiles.join(', ') : 'None attached (will share via WhatsApp)'}

------------------------------------
_Submitted via subchond.com Knee Assessment Portal_`;

    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    setWaLink(url);
    setSubmitted(true);

    // Open WhatsApp in a new tab or window
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const totalSteps = 6;

  return (
    <section
      id="assessment"
      className="py-16 md:py-20 lg:py-[clamp(4.5rem,8vh,6rem)] px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden border-t border-black/[0.08]"
    >
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Editorial Section Headline */}
        <div className="text-center space-y-4">
          <div className="reference-kicker justify-center">
            <span>Patient intake</span>
            <span className="reference-kicker-index">09</span>
          </div>

          <h2 className="text-section-headline text-[#111827] font-light tracking-tight">
            Let&apos;s understand <br />
            <span className="reference-title-muted">your knee.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085]">
            One question per step. Take two minutes to tell us about your joint.
          </p>
        </div>

        {/* Minimalist Apple Onboarding Frame */}
        <div className="rounded-[32px] border border-black/[0.08] bg-[#F7F8FA] p-8 sm:p-14 shadow-sm relative overflow-hidden">
          
          {submitted ? (
            /* Thank You Confirmation Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-4 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl font-light text-[#111827] tracking-tight">
                  Assessment Compiled. <br />
                  <span className="font-normal text-[#0071E3]">Connecting you on WhatsApp...</span>
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  Your clinical assessment has been formatted. We are opening WhatsApp to connect directly with Dr. Manu Bora&apos;s clinical team at <span className="font-mono font-semibold text-[#111827]">{CLINIC_CONTACT.whatsapp.display}</span>.
                </p>
              </div>

              {waLink && (
                <div className="pt-2 flex flex-col items-center gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all shadow-lg shadow-[#25D366]/20"
                  >
                    <WhatsAppMark className="h-5 w-5" />
                    <span>Open in WhatsApp ({CLINIC_CONTACT.whatsapp.display})</span>
                    <ArrowRight className="w-4 h-4" />
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
                className="text-xs font-semibold text-[#0071E3] hover:underline pt-4 block mx-auto"
              >
                ← Start a new assessment
              </button>
            </motion.div>
          ) : (
            /* Multi-step Flow */
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Progress Indicator: 01 — 06 */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
                <span className="font-mono text-xs text-[#667085] uppercase tracking-wider">
                  CLINICAL ONBOARDING
                </span>
                <span className="font-mono text-xs font-bold text-[#0071E3] tracking-widest">
                  {currentStep.toString().padStart(2, '0')} — {totalSteps.toString().padStart(2, '0')}
                </span>
              </div>

              {/* STEP 01: Where is your pain? */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    Where is your pain?
                  </h3>
                  <PainMapSelector selectedZones={painZones} onChange={setPainZones} />
                </div>
              )}

              {/* STEP 02: How long have you had it? */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    How long have you had symptoms?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['< 3 months', '3–6 months', '6–12 months', '> 1 year'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`p-5 rounded-2xl text-left border transition-all ${
                          duration === d
                            ? 'bg-white border-[#0071E3] shadow-md text-[#0071E3] font-semibold'
                            : 'bg-white/60 border-transparent text-[#111827] hover:bg-white'
                        }`}
                      >
                        <span className="text-base">{d}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 03: What activities are difficult? */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    What activities are difficult?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Walking long distances',
                      'Climbing stairs',
                      'Sitting down / standing up',
                      'Squatting or kneeling',
                      'Sports & recreational running',
                      'Sleeping (night pain / throbbing)',
                    ].map((act) => {
                      const isSelected = difficultActivities.includes(act);
                      return (
                        <button
                          key={act}
                          type="button"
                          onClick={() => toggleActivity(act)}
                          className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-white border-[#0071E3] text-[#0071E3] shadow-sm font-semibold'
                              : 'bg-white/60 border-transparent text-[#111827] hover:bg-white'
                          }`}
                        >
                          <span className="text-sm">{act}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected
                                ? 'bg-[#0071E3] border-[#0071E3] text-white font-bold'
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

              {/* STEP 04: Have you had an MRI or X-ray? */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    Have you had an MRI or X-ray?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className={`p-5 rounded-2xl text-left border transition-all ${
                          imagingStatus === img.id
                            ? 'bg-white border-[#0071E3] text-[#0071E3] shadow-md'
                            : 'bg-white/60 border-transparent text-[#111827] hover:bg-white'
                        }`}
                      >
                        <div className="text-base font-semibold">{img.id}</div>
                        <div className="text-xs text-[#667085] mt-1">{img.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 05: Have you tried treatment before? */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    Have you tried treatment before?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                          className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-white border-[#0071E3] text-[#0071E3] shadow-sm font-semibold'
                              : 'bg-white/60 border-transparent text-[#111827] hover:bg-white'
                          }`}
                        >
                          <span className="text-sm">{t}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                              isSelected
                                ? 'bg-[#0071E3] border-[#0071E3] text-white font-bold'
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

              {/* STEP 06: Upload imaging & contact */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-light text-[#111827] tracking-tight">
                    Upload imaging & contact details
                  </h3>

                  {/* Dropzone */}
                  <label className="w-full p-6 rounded-2xl border border-dashed border-[#D2D2D7] bg-white hover:border-[#0071E3] flex flex-col items-center justify-center cursor-pointer transition-colors">
                    <UploadCloud className="w-7 h-7 text-[#0071E3] mb-1.5" />
                    <span className="text-sm font-semibold text-[#111827]">Upload MRI, X-ray, or Clinical Reports</span>
                    <span className="text-xs text-[#667085] mt-0.5">DICOM, PDF, JPEG or PNG</span>
                    <input type="file" multiple onChange={handleFileUpload} className="hidden" />
                  </label>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-1">
                      {uploadedFiles.map((file, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#0071E3]">
                          <FileCheck className="w-3.5 h-3.5" />
                          <span>{file}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Contact inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-base sm:text-sm text-[#111827] focus:outline-none focus:border-[#0071E3]"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone / WhatsApp (+91...)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-base sm:text-sm text-[#111827] focus:outline-none focus:border-[#0071E3]"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-base sm:text-sm text-[#111827] focus:outline-none focus:border-[#0071E3]"
                    />
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City / Country"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-base sm:text-sm text-[#111827] focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-black/[0.08]">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-5 py-2.5 rounded-full border border-black/[0.1] text-xs font-semibold text-[#111827] hover:bg-white flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>BACK</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-7 py-3 rounded-full bg-[#111827] text-white text-xs font-semibold tracking-wider hover:bg-[#0071E3] flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>NEXT STEP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#0071E3] text-white text-xs font-semibold tracking-wider hover:bg-[#0055B3] flex items-center gap-2 transition-all shadow-md shadow-[#0071E3]/25"
                  >
                    <span>SUBMIT ASSESSMENT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
