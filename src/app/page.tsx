import { Hero } from "@/components/clinic/Hero";
import { Contact } from "@/components/clinic/Contact";
import { PatientGallery } from "@/components/clinic/PatientGallery";
import { ScrollMotion } from "@/components/clinic/MotionScene";
import { EditorialServices, EditorialTeam, EditorialFaq, LaparoscopyFeature } from "@/components/clinic/EditorialHome";
export default function Home() {
  return <><ScrollMotion /><Hero /><LaparoscopyFeature /><EditorialServices /><EditorialTeam /><PatientGallery /><EditorialFaq /><Contact compact /></>;
}
