import { ExternalCollaborations } from "@/components/clinic/ExternalCollaborations";
import { Hero } from "@/components/clinic/Hero";
import { Contact } from "@/components/clinic/Contact";
import { PatientGallery } from "@/components/clinic/PatientGallery";
import { ScrollMotion } from "@/components/clinic/MotionScene";
import { EditorialServices, EditorialTeam, EditorialFaq, LaparoscopyFeature } from "@/components/clinic/EditorialHome";
export default function Home() {
  return <><ScrollMotion /><Hero /><EditorialServices /><LaparoscopyFeature /><EditorialTeam /><div className="container"><ExternalCollaborations /></div><PatientGallery /><EditorialFaq /><Contact compact /></>;
}
