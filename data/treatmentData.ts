export interface TreatmentOption {
  id: string;
  category: string;
  tagline: string;
  description: string;
  clinicalContext: string;
  anatomicalTarget: string;
  considerations: string[];
  evidenceNote: string;
}

export const TREATMENT_OPTIONS: TreatmentOption[] = [
  {
    id: 'lifestyle-load',
    category: 'Lifestyle & Load Management',
    tagline: 'Joint mechanics & biomechanical offloading',
    description: 'Targeted body weight management, activity pacing, and biomechanical offloading strategies to decrease peak joint contact forces.',
    clinicalContext: 'First-line foundational strategy for virtually all knee osteoarthritis phenotypes.',
    anatomicalTarget: 'Overall tibiofemoral and patellofemoral contact load zones',
    considerations: [
      'Every kilogram of weight reduction lowers knee joint contact force by approximately four kilograms during walking',
      'Non-impact aerobic conditioning preserves joint range without repetitive peak shock',
      'Footwear adjustments and orthotic wedges can selectively offload medial or lateral compartments'
    ],
    evidenceNote: 'Strong consensus guideline recommendation across OARSI, AAOS, and EULAR.'
  },
  {
    id: 'physiotherapy-rehab',
    category: 'Physiotherapy & Rehabilitation',
    tagline: 'Neuromuscular stabilization & kinetic chain balance',
    description: 'Supervised strengthening of quadriceps, hamstrings, gluteals, and core stabilizers, alongside proprioceptive retraining.',
    clinicalContext: 'Essential for improving dynamic joint stability and shock absorption capacity.',
    anatomicalTarget: 'Periarticular musculature, extensor mechanism, joint capsule',
    considerations: [
      'Strong quadriceps act as natural biological shock absorbers for the subchondral bone',
      'Targeted gait re-training reduces aberrant shear stresses across the articular cartilage',
      'Restores active range of motion and joint effusion drainage'
    ],
    evidenceNote: 'Level 1 evidence demonstrating pain reduction and functional improvement equivalent or superior to standard pharmacotherapy.'
  },
  {
    id: 'medication-symptom',
    category: 'Medication & Symptom Management',
    tagline: 'Systemic & topical anti-inflammatory control',
    description: 'Judicious use of topical and oral NSAIDs, analgesics, or adjuvant agents to control flares and facilitate physical rehabilitation.',
    clinicalContext: 'Used on an individualized, intermittent basis to manage acute symptom exacerbations.',
    anatomicalTarget: 'Synovial membrane inflammation and nociceptive pain pathways',
    considerations: [
      'Topical NSAIDs offer localized anti-inflammatory relief with minimal systemic exposure',
      'Oral agents require careful cardiovascular, renal, and gastrointestinal risk stratification',
      'Intended to support mobility and physical therapy rather than serve as a permanent standalone measure'
    ],
    evidenceNote: 'Guidelines recommend topical formulations prior to systemic oral NSAIDs where clinically appropriate.'
  },
  {
    id: 'injection-based',
    category: 'Injection-Based Treatments',
    tagline: 'Intra-articular targeted therapies for selected patients',
    description: 'Image-guided delivery of viscosupplementation (hyaluronic acid) or corticosteroids into the synovial space to reduce friction or modulate acute flares.',
    clinicalContext: 'May be considered for selected patients with persistent symptoms not responding adequately to conservative measures.',
    anatomicalTarget: 'Synovial fluid visco-elasticity and intra-articular inflammation',
    considerations: [
      'Hyaluronic acid aims to replenish synovial fluid lubricating properties in mild-to-moderate disease',
      'Corticosteroids provide short-term flare control but repeated high-frequency use is approached cautiously',
      'Ultrasound guidance ensures precise intra-articular placement and avoids periarticular tissue trauma'
    ],
    evidenceNote: 'Suitability and duration of benefit vary significantly between individuals based on structural stage.'
  },
  {
    id: 'biologic-regenerative',
    category: 'Biologic & Regenerative Approaches',
    tagline: 'Cellular & autologous signalling under clinical evaluation',
    description: 'Autologous platelet-rich plasma (PRP) or cellular signalling preparations evaluated in specialized clinical protocols.',
    clinicalContext: 'Discussed for selected patients seeking biological symptom modulation; requires strict diagnostic qualification.',
    anatomicalTarget: 'Synovial cytokine milieu, osteochondral junction, subchondral micro-environment',
    considerations: [
      'Evidence and clinical suitability vary substantially across preparation methods and individual disease stages',
      'These modalities are evaluated for symptom modulation and cytokine balancing, NOT guaranteed cartilage regrowth',
      'Must be thoroughly discussed with a qualified specialist with realistic expectations regarding outcomes'
    ],
    evidenceNote: 'Active area of ongoing clinical research; requires careful patient selection and transparent counselling.'
  },
  {
    id: 'surgical-options',
    category: 'Surgical Options',
    tagline: 'Joint preservation osteotomy to partial/total arthroplasty',
    description: 'Corrective osteotomy for joint realignment, unicompartmental knee replacement, or total knee arthroplasty for end-stage joint disease.',
    clinicalContext: 'For patients with advanced structural changes, refractory symptoms, and marked functional impairment.',
    anatomicalTarget: 'Mechanical limb alignment, severely worn articular surfaces, collapsed subchondral plate',
    considerations: [
      'Joint-preserving osteotomy can redistribute load to healthier compartments in active, younger patients',
      'Partial (unicompartmental) replacement preserves natural cruciate ligaments when disease is isolated to one compartment',
      'Total joint arthroplasty remains a highly successful, reliable intervention when non-surgical pathways are exhausted'
    ],
    evidenceNote: 'High lifetime survivorship and proven functional restoration for validated surgical candidates.'
  }
];
