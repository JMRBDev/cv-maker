import { useStore } from "@nanostores/preact";
import SidebarSection from "../SidebarSection";
import { cvStore } from "../../store/cvStore";

const Sidebar = () => {
    const $cvStore = useStore(cvStore);

    return (
        <div class="flex flex-col gap-8 max-w-[20%]">
            <SidebarSection title="Sobre mí">
                <p>{$cvStore.about_me}</p>
            </SidebarSection>

            <SidebarSection
                title="Habilidades"
                content={$cvStore.skills}
            />

            <SidebarSection
                title="Idiomas"
                content={$cvStore.languages}
            />

            <SidebarSection
                title="Contacto"
                content={$cvStore.contact}
            />
        </div>
    );
}

export default Sidebar;