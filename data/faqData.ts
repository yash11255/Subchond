export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What is subchondral bone?',
    answer: 'Subchondral bone is the specialized layer of bone situated directly beneath the articular cartilage. It consists of a dense cortical bone plate supported by a cancellous trabecular network. Unlike cartilage, which contains no nerves or blood vessels, subchondral bone is richly innervated with sensory nerve fibers and vascularized, making it an active participant in shock absorption and a primary pain generator in osteoarthritis.',
  },
  {
    id: 'faq-02',
    question: 'Is osteoarthritis only a cartilage problem?',
    answer: 'No. Clinical orthopedics and rheumatology now recognize osteoarthritis as a disease of the whole synovial joint organ. While cartilage thinning is a well-known feature, the condition actively involves changes in the subchondral bone (sclerosis, microfractures, bone marrow lesions), meniscus degeneration or extrusion, synovial inflammation (synovitis), and altered joint biomechanics.',
  },
  {
    id: 'faq-03',
    question: 'What does a knee assessment involve?',
    answer: 'A whole-joint assessment begins with an evaluation of your symptomatic history, functional limitations, and lifestyle goals. We then conduct a multi-planar review of your diagnostic imaging (standing radiographs and MRI scans), specifically analyzing the relationship between articular cartilage wear, subchondral bone remodeling, meniscal stability, and mechanical limb alignment before discussing therapeutic pathways.',
  },
  {
    id: 'faq-04',
    question: 'Do I need an MRI?',
    answer: 'While standing plain X-rays evaluate alignment and bony joint space narrowing, an MRI provides critical soft-tissue visibility. It visualizes subchondral bone marrow lesions (BMLs), meniscal root integrity, cartilage thickness, and synovial thickening. Whether an MRI is necessary depends on your clinical examination findings and diagnostic staging.',
  },
  {
    id: 'faq-05',
    question: 'Are injections appropriate for everyone?',
    answer: 'No. Intra-articular injections—whether viscosupplementation (hyaluronic acid), corticosteroids, or biologic preparations—are considered for selected patients based on diagnosis, alignment, and stage of disease. They are not appropriate for every knee phenotype and are never a universal solution.',
  },
  {
    id: 'faq-06',
    question: 'Can injections regenerate cartilage?',
    answer: 'No. Available scientific evidence does not support claims that injections can regrow or regenerate lost articular cartilage back to normal. Injections are evaluated for modulating symptoms, decreasing inflammation, or improving synovial fluid lubrication to facilitate physical rehabilitation.',
  },
  {
    id: 'faq-07',
    question: 'When is surgery considered?',
    answer: 'Surgery is considered for patients with advanced structural joint destruction, severe angular malalignment, or refractory bone-on-bone pain that has not responded adequately to comprehensive non-surgical management. For appropriate candidates, joint preservation osteotomy or knee replacement is a highly effective, proven solution.',
  },
  {
    id: 'faq-08',
    question: 'What happens after my assessment?',
    answer: 'Following your assessment, you receive an objective summary outlining the condition of your joint structures, the likely sources contributing to your symptoms, and a transparent discussion of which non-surgical, injection, or surgical pathways are appropriate for your individual condition.',
  },
];
