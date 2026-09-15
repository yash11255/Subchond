import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://subchond.com"),
  title: "SUBCHOND | Understand Your Knee. Treat It With Clarity.",
  description:
    "SUBCHOND provides a whole-joint approach to understanding knee pain and osteoarthritis, including the role of cartilage, subchondral bone, imaging and treatment options.",
  keywords: [
    "subchondral bone",
    "knee osteoarthritis",
    "whole-joint assessment",
    "knee pain diagnosis",
    "articular cartilage",
    "bone marrow lesions",
    "Dr Manu Bora",
    "orthopedic assessment",
    "knee MRI evaluation",
    "joint preservation"
  ],
  authors: [{ name: "SUBCHOND Clinical Team" }],
  creator: "SUBCHOND",
  publisher: "SUBCHOND Joint Health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SUBCHOND | Understand Your Knee. Treat It With Clarity.",
    description:
      "A scientific whole-joint approach to understanding knee pain and osteoarthritis, focusing on cartilage, subchondral bone, imaging and individualized treatment options.",
    url: "https://subchond.com",
    siteName: "SUBCHOND",
    images: [
      {
        url: "/images/knee-anatomy.png",
        width: 1200,
        height: 1200,
        alt: "SUBCHOND Knee Anatomy & Subchondral Bone Visualization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUBCHOND | Understand Your Knee. Treat It With Clarity.",
    description:
      "A scientific whole-joint approach to understanding knee pain and osteoarthritis.",
    images: ["/images/knee-anatomy.png"],
    creator: "@subchond",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://subchond.com/#organization",
      name: "SUBCHOND",
      url: "https://subchond.com",
      logo: "https://subchond.com/images/knee-anatomy.png",
      description:
        "Specialized clinical platform providing whole-joint assessment and subchondral bone evaluation for knee osteoarthritis.",
      medicalSpecialty: ["Orthopedics", "SportsMedicine", "Rheumatology"],
      founder: {
        "@type": "Person",
        name: "Dr. Manu Bora",
        jobTitle: "Orthopedic Surgeon & Joint Preservation Specialist",
      },
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://subchond.com/#webpage",
      url: "https://subchond.com",
      name: "SUBCHOND | Understand Your Knee. Treat It With Clarity.",
      about: [
        {
          "@type": "MedicalCondition",
          name: "Knee Osteoarthritis",
          code: {
            "@type": "MedicalCode",
            code: "M17",
            codingSystem: "ICD-10",
          },
        },
        {
          "@type": "AnatomicalStructure",
          name: "Subchondral Bone",
        },
        {
          "@type": "AnatomicalStructure",
          name: "Articular Cartilage of Knee",
        },
      ],
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Patients with knee pain, osteoarthritis, or joint concerns",
      },
      lastReviewed: "2026-09-15",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#1d1d1f] antialiased selection:bg-[#0071e3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
