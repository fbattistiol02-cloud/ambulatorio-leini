/** Illustrazioni editoriali originali. Non rappresentano strumenti specifici della struttura. */
export function MedicalDrawing({ kind = "optics" }: { kind?: "optics" | "visit" | "lab" | "care" }) {
  if (kind !== "optics") return (
    <svg viewBox="0 0 240 180" fill="none" aria-hidden="true" className="medical-drawing">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {kind === "visit" ? <>
          <path d="M76 28v44c0 50 74 50 74 0V28M68 29h16M142 29h16M113 110v15c0 39 65 39 65 0v-12" />
          <path d="M82 33v39c0 39 62 39 62 0V33" opacity=".4" />
          <circle cx="178" cy="99" r="17" /><circle cx="178" cy="99" r="10" />
          <path d="M44 138h43M54 148h26" opacity=".3" />
        </> : kind === "lab" ? <>
          <path d="M67 35h28v86a14 14 0 0 1-28 0ZM63 35h36M117 35h28v86a14 14 0 0 1-28 0ZM113 35h36M75 72h12M125 83h12M57 95v49h98V95M49 144h114" />
          <path d="M68 83h26v38a13 13 0 0 1-26 0ZM118 97h26v24a13 13 0 0 1-26 0Z" fill="currentColor" fillOpacity=".08" />
          <circle cx="182" cy="62" r="22" opacity=".3" /><path d="M175 62h14m-7-7v14" />
        </> : <>
          <path d="M55 63h130v78H55ZM97 63V43h46v20M48 141h144M55 84h130" />
          <path d="M113 97h14v12h12v14h-12v12h-14v-12h-12v-14h12Z" fill="currentColor" fillOpacity=".08" />
          <path d="M72 51v-8m-12 9-5-6m120 5v-8m12 9 5-6" opacity=".4" />
        </>}
      </g>
    </svg>
  );
  return (
    <svg viewBox="0 0 680 510" fill="none" aria-hidden="true" className="optics-drawing">
      <defs>
        <linearGradient id="optic-metal" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f8fbfd" /><stop offset=".46" stopColor="#a5bbc8" /><stop offset=".6" stopColor="#e5edf2" /><stop offset="1" stopColor="#66869e" />
        </linearGradient>
        <radialGradient id="optic-glass"><stop stopColor="#bce2f0" /><stop offset=".55" stopColor="#366f8e" /><stop offset="1" stopColor="#183e56" /></radialGradient>
      </defs>
      <g stroke="#64849a" strokeWidth=".8" opacity=".4">
        <circle cx="340" cy="250" r="190" /><circle cx="340" cy="250" r="153" strokeDasharray="2 8" />
        <path d="M105 250h470M340 30v440M135 444h411M135 438v12m411-12v12" />
        <path d="M181 105l318 290M175 395l330-290" strokeDasharray="3 9" />
      </g>
      <g transform="rotate(-32 340 250)" stroke="#365d77" strokeLinejoin="round">
        <path d="M102 241h298v17H102l-5-3v-11Z" fill="url(#optic-metal)" strokeWidth="1.4" />
        <path d="M110 247h283" stroke="white" strokeWidth="2" opacity=".7" />
        <path d="M400 228h74l13 12v20l-13 12h-74Z" fill="url(#optic-metal)" strokeWidth="1.5" />
        <path d="M408 231v38m7-38v38m7-38v38m7-38v38" opacity=".4" />
        <path d="M440 228v-30h18v30" fill="#bed0dc" /><path d="M435 198h28v-12h-28Z" fill="#416c86" />
        <path d="M477 238h34v24h-34" fill="#547991" />
        <path d="M511 219h22l13 13v36l-13 13h-22Z" fill="url(#optic-metal)" strokeWidth="2" />
        <ellipse cx="534" cy="250" rx="15" ry="29" fill="#244d68" /><ellipse cx="537" cy="250" rx="10" ry="22" fill="url(#optic-glass)" />
        <path d="M441 185c-5-65 86-86 116-37s13 123 69 137" stroke="#567f98" strokeWidth="5" />
        <path d="M441 185c-5-65 86-86 116-37s13 123 69 137" stroke="#b9cfdb" strokeWidth="2" />
      </g>
      <g stroke="#446f89" strokeWidth="1.1">
        <path d="M159 351v45h-53M450 157V90h104" /><circle cx="159" cy="351" r="4" fill="#ecf3f6" /><circle cx="450" cy="157" r="4" fill="#ecf3f6" />
      </g>
      <g fill="#315c77" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic">
        <text x="78" y="421">il dettaglio</text><text x="495" y="75">uno sguardo da vicino</text>
      </g>
    </svg>
  );
}
