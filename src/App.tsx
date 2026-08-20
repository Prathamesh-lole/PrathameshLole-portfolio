/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Project } from './types/portfolio';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Header } from './components/layout/Header';
import { EditorialMenu } from './components/layout/EditorialMenu';
import { Footer } from './components/layout/Footer';
import { HeroDesk } from './components/sections/HeroDesk';
import { AboutEditorial } from './components/sections/AboutEditorial';
import { ProjectsEditorial } from './components/sections/ProjectsEditorial';
import { TechToolbox } from './components/sections/TechToolbox';
import { JourneyTimeline } from './components/sections/JourneyTimeline';
import { CertificationsArchive } from './components/sections/CertificationsArchive';
import { TactileResume } from './components/sections/TactileResume';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { CommandPalette } from './components/modals/CommandPalette';
import { playTactileClick } from './utils/audioSynthesizer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  const handleNavigate = (sectionId: string) => {
    playTactileClick(soundEnabled);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playTactileClick(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5F3EE] text-[#1A1A1A] selection:bg-orange-600 selection:text-white font-sans antialiased">
      {/* Short initial loading animation */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Dynamic Contextual Custom Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Scroll Progress Indicator & Vertical Navigation Jump Dots */}
      <ScrollProgressBar />

      {/* Floating Minimal Header */}
      <Header
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => {
          playTactileClick(soundEnabled);
          setIsMenuOpen(!isMenuOpen);
        }}
        onOpenCommandPalette={() => {
          playTactileClick(soundEnabled);
          setIsCommandPaletteOpen(true);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Hidden button for command palette keyboard shortcut trigger */}
      <button
        data-action="open-palette"
        onClick={() => setIsCommandPaletteOpen(true)}
        className="sr-only"
        aria-hidden="true"
      >
        Open Command Palette
      </button>

      {/* Full-Screen Editorial Menu Overlay */}
      <EditorialMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Command Palette / Developer Console */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 01. Workspace Desk & Scrapbook Hero */}
        <HeroDesk
          soundEnabled={soundEnabled}
          onExploreProjects={() => handleNavigate('projects')}
        />

        {/* 02. "WHO IS PRATHAMESH?" About & Story */}
        <AboutEditorial />

        {/* 03. Selected Featured Projects */}
        <ProjectsEditorial
          onSelectProject={(project) => setSelectedProject(project)}
          soundEnabled={soundEnabled}
        />

        {/* 04. Technical Toolbox & Ecosystem */}
        <TechToolbox soundEnabled={soundEnabled} />

        {/* 05. The Journey So Far (2023-2026) */}
        <JourneyTimeline />

        {/* 06. Certifications & Credentials Archive */}
        <CertificationsArchive />

        {/* 07. Tactile Resume & Formal Dossier */}
        <TactileResume soundEnabled={soundEnabled} />
      </main>

      {/* 08. Editorial Magazine Back-Cover & Contact */}
      <Footer soundEnabled={soundEnabled} />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        soundEnabled={soundEnabled}
      />
    </div>
  );
}
