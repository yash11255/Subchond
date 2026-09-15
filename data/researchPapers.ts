export interface ResearchTopic {
  id: string;
  category: 'OSTEOARTHRITIS' | 'SUBCHONDRAL BONE' | 'BIOLOGICS' | 'IMAGING';
  title: string;
  summary: string;
}

/**
 * Deliberately has no citations (no DOI, no author names, no journal,
 * no PubMed link). An earlier version of this file fabricated all of
 * those: invented paper titles and author names attached to real DOIs
 * and PubMed IDs that actually belong to unrelated papers (verified
 * against NCBI eutils on 2026-09-15 — none were about osteoarthritis).
 * Do not add citations back here without verifying each one resolves
 * to a real paper that actually says what it's cited for.
 */
export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: 'topic-01',
    category: 'SUBCHONDRAL BONE',
    title: 'Subchondral bone remodeling in osteoarthritis',
    summary:
      'Changes in subchondral bone density and trabecular structure are increasingly studied as an early feature of knee osteoarthritis, not only a late consequence of cartilage loss.',
  },
  {
    id: 'topic-02',
    category: 'IMAGING',
    title: 'Bone marrow lesions and pain',
    summary:
      'MRI-detected bone marrow lesions in the subchondral bone have been associated with fluctuating knee pain in the osteoarthritis literature, distinct from what plain X-ray shows.',
  },
  {
    id: 'topic-03',
    category: 'OSTEOARTHRITIS',
    title: 'A whole-joint view of osteoarthritis',
    summary:
      'Contemporary rheumatology and orthopedics increasingly describe knee osteoarthritis as a disease of the whole joint, cartilage, subchondral bone, synovium, and meniscus together, rather than cartilage wear alone.',
  },
  {
    id: 'topic-04',
    category: 'BIOLOGICS',
    title: 'Orthobiologic therapies: what the evidence supports',
    summary:
      'Clinical evidence on cellular and biologic injections for knee osteoarthritis is still evolving and varies by patient selection. It does not currently substantiate claims of complete cartilage regeneration.',
  },
];
