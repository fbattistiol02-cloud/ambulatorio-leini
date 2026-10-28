"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PatientPhoto } from "@/content/site";

export function PatientLightbox({ photos }: { photos: PatientPhoto[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const photo = selected === null ? null : photos[selected];
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  function move(direction: number) {
    setSelected(index => index === null ? null : (index + direction + photos.length) % photos.length);
  }
  return <>
    <div className="patient-grid">{photos.map((item, index) => <figure key={item.src}>
      <button type="button" className="patient-thumbnail" aria-label={`Ingrandisci: ${item.alt}`} onClick={event => { trigger.current = event.currentTarget; setSelected(index); }}>
        <Image src={item.src} alt={item.alt} width={600} height={480} sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw" />
      </button>{item.name && <figcaption>{item.name}</figcaption>}
    </figure>)}</div>
    <dialog ref={dialog} className="patient-lightbox" aria-label="Fotografia ingrandita" onClose={() => { setSelected(null); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    }}>
      <div className="lightbox-content">
        <button type="button" autoFocus className="lightbox-close" onClick={() => dialog.current?.close()}>Chiudi ×</button>
        {photo && <><div className="lightbox-image"><Image src={photo.src} alt={photo.alt} fill sizes="90vw" /></div>{photo.name && <p>{photo.name}</p>}</>}
        {photos.length > 1 && <div className="lightbox-controls"><button type="button" onClick={() => move(-1)}>← Precedente</button><span>{(selected ?? 0) + 1} / {photos.length}</span><button type="button" onClick={() => move(1)}>Successiva →</button></div>}
      </div>
    </dialog>
  </>;
}
