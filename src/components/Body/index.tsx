import { useStore } from '@nanostores/preact';
import { cvStore } from '../../store/cvStore';
import BodySection from '../BodySection';

const Body = () => {
    const $cvStore = useStore(cvStore);

    return (
        <div class="flex flex-col gap-8 flex-1">
            <BodySection
                title="Educación"
                content={$cvStore.education}
            />

            <BodySection
                title="Experiencia"
                content={$cvStore.experience}
            />

            <BodySection
                title="Certificaciones y Premios"
                content={$cvStore.certs_and_awards}
            />
        </div>
    );
}

export default Body;