import { ArrowUpRight, BookOpen, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
export function Publications() {
  return <section id="publications" className="section publications-section"><div className="section-shell"><SectionHeading number="06" label="PUBLICATIONS & IP" title="Ideas that travel further.">Research connecting algorithms, graph theory, and education.</SectionHeading>
    <div className="publication-list">
      <article className="publication liquid-glass reveal"><ShieldCheck size={25} className="accent-text" /><div><p className="eyebrow">REGISTERED COPYRIGHT · 2025</p><h3>Aplikasi Perhitungan Indeks Hyper-Wiener dan Indeks Padmakar Ivan dari Graf Koprima Grup Dihedral Menggunakan Python</h3><p><strong>Syawaludin, M. K.</strong> & Wardhana, I. G. A. W.</p><p>Directorate General of Intellectual Property, Ministry of Law and Human Rights of the Republic of Indonesia.</p><span className="publication-meta mono">Registration No. 000903055</span></div><span className="certified"><ShieldCheck size={15} />Certified</span></article>
      <article className="publication liquid-glass reveal"><BookOpen size={25} className="accent-text" /><div><p className="eyebrow">JOURNAL PUBLICATION · 2025</p><h3>Pengenalan Algoritma Dengan Menggunakan Aplikasi Scratch Jr Di SMAN 1 Pemenang Lombok Utara</h3><p>Abdullah, U., <strong>Syawaludin, M. K.</strong>, Hisan, K., et al.</p><p>SINONIM · Vol. 2, No. 1 · Jurnal Pengabdian Masyarakat FMIPA UNRAM</p></div><a className="publication-link" href="https://doi.org/10.29303/sinonim.v2i1.7808" target="_blank" rel="noopener noreferrer">Read DOI<ArrowUpRight size={18} /></a></article>
    </div>
  </div></section>;
}
