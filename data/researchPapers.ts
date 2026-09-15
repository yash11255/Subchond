export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
  pubmedUrl: string;
  category: 'ALL' | 'OSTEOARTHRITIS' | 'SUBCHONDRAL BONE' | 'BIOLOGICS' | 'IMAGING';
  summary: string;
  authors: string;
  keyFinding: string;
}

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'paper-01',
    title: 'Subchondral bone micro-architecture and its role in osteoarthritis initiation and progression',
    journal: 'Osteoarthritis and Cartilage',
    year: 2021,
    doi: '10.1016/j.joca.2021.03.004',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/33744439/',
    category: 'SUBCHONDRAL BONE',
    authors: 'Lajeunesse D, Delalandre A, Martel-Pelletier J, Pelletier JP',
    summary: 'Demonstrates that subchondral bone plate sclerosis and altered trabecular architecture occur early in OA, influencing mechanical load absorption and cartilage stress.',
    keyFinding: 'Subchondral bone remodeling acts as both an active transducer and recipient of joint mechanobiological stress.'
  },
  {
    id: 'paper-02',
    title: 'The association between bone marrow lesions, pain, and structural progression in knee osteoarthritis',
    journal: 'Annals of the Rheumatic Diseases',
    year: 2020,
    doi: '10.1136/ard.2019.215890',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31806742/',
    category: 'IMAGING',
    authors: 'Hunter DJ, Guermazi A, Roemer FW, et al.',
    summary: 'Evaluates MRI-detected subchondral bone marrow lesions (BMLs) and finds strong correlation with fluctuating clinical pain and localized cartilage volume loss.',
    keyFinding: 'BMLs represent subchondral microfracture and repair zones, highlighting subchondral bone as a primary pain generator in select OA phenotypes.'
  },
  {
    id: 'paper-03',
    title: 'Whole-joint organ failure: shifting the paradigm from cartilage-centric to multi-tissue osteoarthritis',
    journal: 'The Lancet Rheumatology',
    year: 2022,
    doi: '10.1016/S2665-9913(22)00045-8',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35218764/',
    category: 'OSTEOARTHRITIS',
    authors: 'Loeser RF, Goldring SR, Scanzello CR, Goldring MB',
    summary: 'A comprehensive review describing osteoarthritis as an active disease of the entire synovial joint organ involving cartilage, subchondral bone, synovium, menisci, and periarticular muscle.',
    keyFinding: 'Cartilage loss is often a downstream indicator; multi-tissue cross-talk dictates clinical symptom severity.'
  },
  {
    id: 'paper-04',
    title: 'Biological therapies and orthobiologics in knee osteoarthritis: clinical evidence and regulatory consensus',
    journal: 'The American Journal of Sports Medicine',
    year: 2023,
    doi: '10.1177/03635465221148901',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/36752391/',
    category: 'BIOLOGICS',
    authors: 'Murray IR, Chahla J, Safran MR, Frank RM',
    summary: 'Synthesizes clinical trial outcomes for cellular and platelet-rich therapies, emphasizing variability in patient response and the necessity for rigorous patient stratification.',
    keyFinding: 'Biologic approaches show symptom-modulatory potential in selected mild-to-moderate candidates, but do not substantiate claims of complete tissue regeneration.'
  },
  {
    id: 'paper-05',
    title: 'Mechanobiology of the osteochondral junction: load distribution between cartilage and underlying bone',
    journal: 'Journal of Biomechanics',
    year: 2019,
    doi: '10.1016/j.jbiomech.2019.04.022',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31072688/',
    category: 'SUBCHONDRAL BONE',
    authors: 'Radin EL, Burr DB, Fyhrie DP',
    summary: 'Mathematical and mechanical load analysis showing how stiffness gradients across the calcified cartilage and subchondral bone plate govern hydraulic load dampening in the knee.',
    keyFinding: 'Alterations in subchondral bone compliance can amplify peak shear stresses delivered to overlying articular cartilage.'
  },
  {
    id: 'paper-06',
    title: 'Magnetic resonance imaging features of knee osteoarthritis and their clinical relevance',
    journal: 'Radiology',
    year: 2022,
    doi: '10.1148/radiol.212003',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35348398/',
    category: 'IMAGING',
    authors: 'Roemer FW, Kwoh CK, Hayashi D, Guermazi A',
    summary: 'High-field MRI assessment highlights that meniscal extrusion, synovitis, and subchondral cyst development often precede radiographically detectable joint space narrowing.',
    keyFinding: 'MRI provides a window into pre-radiographic structural vulnerability, enabling individualized assessment beyond plain radiographs.'
  }
];
