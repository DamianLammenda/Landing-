/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, About } from './components/SectionBlock1';
import { Steps, Devices, Libraries } from './components/SectionBlock2';
import { AudioDual, Advantages, Download } from './components/SectionBlock3';
import { FAQSection, Contact, Footer } from './components/SectionBlock4';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#e5a00d] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Steps />
        <Devices />
        <Libraries />
        <AudioDual />
        <Advantages />
        <Download />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
