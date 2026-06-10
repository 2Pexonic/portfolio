import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './types';

// Layout & Components
import { Layout } from './components/layout';

// Pages
import { WorksPage, AboutPage, CaseStudyPage } from './pages';

// Hooks
import { useNavigation } from './hooks/useNavigation';

export const projects: Project[] = [
  {
    id: "printhub",
    title: "PrintHub: Mobile Printing Solution",
    timeline: "May 2024 - Present",
    category: "Mobile Application",
    role: "UI/UX Designer",
    overview: "PrintHub is a mobile-first printing platform redesigned from the ground up to simplify the end-to-end printing journey for customers across India. By applying design thinking and rigorous usability testing, the app went from a friction-heavy experience to an intuitive, conversion-optimised product — accelerating the launch by 30% and lifting customer retention by 25%.",
    problem: "PrintHub's existing app suffered from complex user flows, an inconsistent visual identity, and high drop-off rates. Users abandoned orders mid-flow, leading to lost revenue and poor customer satisfaction scores.",
    solution: "A fully redesigned mobile application built on a scalable Figma component library and design system. Every screen was informed by user journey mapping, heuristic evaluation, and A/B testing of key interactions to ensure measurable usability improvements.",
    impact: "Increased customer retention by 25%, accelerated product launch by 30% through cross-functional collaboration with engineering, and established a consistent, accessible design system across all mobile touchpoints.",
    bullets: [
      "Increased customer retention by 25% — measured by monthly active user data — by redesigning the onboarding flow using design thinking and iterative usability testing across 3 user cohorts.",
      "Accelerated product launch by 30% faster than estimated — measured by sprint velocity — by building a scalable component library in Figma that streamlined cross-functional collaboration between design and engineering.",
      "Improved end-to-end task completion by mapping user journeys, identifying 6 critical drop-off points, and redesigning navigation paths for faster, more accessible interactions."
    ],
    link: "#",
    figmaLink: "https://www.figma.com/community/file/1439181928064589138/redesign-printhub",
    thumbnailImage: "/src/assets/Printhub/Printhub.jpg",
    heroImage: "/src/assets/Printhub/Printhub-Casestudy.png"
  },
  {
    id: "teamara",
    title: "Teamera.net: Collaborative Ecosystem",
    timeline: "2025 - 2026",
    category: "Full-Stack Application",
    role: "Full-Stack Designer & Developer",
    overview: "Teamera.net is a full-stack web application that bridges the gap between innovative ideas and skilled collaborators. Designed and architected end-to-end — from user research and information architecture through to production deployment — it enables founders, students, and professionals to form startup teams, manage projects, and collaborate in real time.",
    problem: "Founders and innovators consistently struggle to find the right teammates. Existing platforms focus on hiring or passive networking, but offer no dedicated tools for startup team formation, role-based applications, or real-time project collaboration.",
    solution: "A dedicated platform where users discover startup projects, apply for roles, build portfolios, and collaborate through shared workspaces — all backed by secure JWT authentication and real-time Socket.io communication on a scalable 3-tier architecture.",
    impact: "Delivered a complete startup team-building ecosystem with real-time collaboration, secure authentication, and a scalable architecture — reducing team formation friction and enabling project-based networking at scale.",
    bullets: [
      "Architected a scalable 3-tier system using React, Node.js, and MongoDB Atlas — enabling real-time team collaboration via Socket.io for a growing community of founders and professionals.",
      "Reduced onboarding friction by designing end-to-end user journeys — from registration to workspace collaboration — validated through usability testing and stakeholder feedback sessions.",
      "Improved platform security and session reliability by implementing JWT-based authentication, protected routes, and server-sent events — measured by zero reported auth failures post-launch."
    ],
    link: "https://teamera.vercel.app/",
    thumbnailImage: "/src/assets/Teamera/Teamera.png",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    targetUsers: [
      { title: "Founders", points: ["Post project ideas and recruit team members.", "Manage applications and build startup teams.", "Track project milestones in a shared workspace."] },
      { title: "Students", points: ["Gain real industry experience on live projects.", "Build a strong, portfolio-worthy track record.", "Collaborate with professionals across disciplines."] },
      { title: "Professionals", points: ["Discover meaningful side projects.", "Contribute specialised skills to early-stage startups.", "Network with ambitious, talented collaborators."] },
      { title: "Community", points: ["Share knowledge and engage in discussions.", "Build professional connections.", "Participate in a growing startup ecosystem."] }
    ],
    coreFeatures: [
      { title: "Secure Authentication", points: ["JWT-based registration and login.", "Protected routes and session management.", "Role-based access control."] },
      { title: "User Profiles", points: ["Professional profile with skill management.", "Portfolio showcase and resume support.", "Work history and contribution tracking."] },
      { title: "Project Management", points: ["Create, publish, and discover projects.", "Advanced filtering by role, skill, and stage.", "Milestone and task tracking."] },
      { title: "Application System", points: ["Apply for specific project roles.", "Track application status in real time.", "Accept, reject, or invite candidates."] },
      { title: "Team Workspace", points: ["Real-time collaboration via Socket.io.", "Task management and file sharing.", "Team communication and notifications."] },
      { title: "Community Platform", points: ["Discussion posts and peer interactions.", "Cross-functional networking opportunities.", "Startup knowledge sharing hub."] }
    ],
    workflow: ["Registration & Profile Setup", "Browse Projects & Community", "Apply for Roles", "Founder Review & Selection", "Team Formation", "Collaborative Workspace"],
    techStack: [
      { category: "Frontend", details: "React.js, Vite, Responsive SPA, Tailwind CSS" },
      { category: "Backend", details: "Node.js, Express.js, REST API" },
      { category: "Database", details: "MongoDB Atlas, Mongoose ODM" },
      { category: "Real-Time", details: "Socket.io, SSE (Server-Sent Events)" },
      { category: "Auth", details: "JWT Authentication, Protected Routes" }
    ],
    architecture: [
      { layer: "Presentation", details: "React + Vite — Responsive, Accessible Frontend" },
      { layer: "Business Logic", details: "Node.js + Express, REST APIs, JWT Auth" },
      { layer: "Data Layer", details: "MongoDB Atlas, Mongoose Schemas" }
    ],
    achievements: [
      "Delivered a complete end-to-end startup team-building ecosystem.",
      "Implemented secure JWT authentication and role-based access control.",
      "Built real-time collaboration with Socket.io and Server-Sent Events.",
      "Architected a scalable 3-tier full-stack system.",
      "Designed full user lifecycles validated through usability testing.",
      "Enabled project-based networking and cross-functional team formation."
    ]
  },
  {
    id: "walkeels",
    title: "Walkeels: Business Ecosystem",
    timeline: "2023",
    category: "Web Design & Development",
    role: "UI/UX Designer & Frontend Developer",
    overview: "Walkeels is a modern, responsive business website designed to establish a strong digital presence through clear information architecture, mobile-first responsive design, and a conversion-focused user experience. The project spanned from stakeholder brief to live deployment.",
    problem: "The client needed a professional online presence to improve brand visibility, communicate services clearly, and generate leads — all optimised for a seamless multi-device browsing experience.",
    solution: "A responsive one-page website built with mobile-first principles, strategic content hierarchy, WCAG-informed accessibility, and a consistent visual design system — communicating the brand's services and values with clarity and impact.",
    impact: "Delivered a stronger, more professional digital presence, improved cross-device user engagement, and a conversion-focused layout aligned with the client's business goals.",
    bullets: [
      "Improved brand digital presence and cross-device user engagement by designing and developing a mobile-first, WCAG-informed responsive website with strategic information architecture and conversion-focused layout.",
      "Reduced perceived page complexity by 40% — validated through stakeholder review — by applying a clean visual system with consistent typography, spacing, and reusable component patterns.",
      "Delivered the full project — from stakeholder brief and wireframing through to live deployment — within a 3-week timeline through efficient end-to-end design and development workflow."
    ],
    thumbnailImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=2000",
    link: "https://lnkd.in/d6wAhsFa",
    figmaLink: "https://lnkd.in/dzhKS6d5"
  }
];

function AppContent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine current page based on pathname
  let currentPage: 'works' | 'about' | 'casestudy' = 'works';
  if (location.pathname === '/about') currentPage = 'about';
  else if (location.pathname.startsWith('/project/')) currentPage = 'casestudy';

  const {
    scrolled,
    isWorksSectionVisible,
    handleWorksClick,
    handleLogoClick
  } = useNavigation(currentPage, setIsMenuOpen);

  return (
    <Layout
      scrolled={scrolled}
      currentPage={currentPage}
      isWorksSectionVisible={isWorksSectionVisible}
      onWorksClick={handleWorksClick}
      onLogoClick={handleLogoClick}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <WorksPage projects={projects} />
              </motion.div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <AboutPage />
              </motion.div>
            } 
          />
          <Route 
            path="/project/:id" 
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <CaseStudyPage />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

