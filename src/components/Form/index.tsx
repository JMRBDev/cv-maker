import { useStore } from '@nanostores/preact';
import { cvStore, setProperty } from '../../store/cvStore';
import toBase64 from '../../util/toBase64';
import FormSection from '../FormSection';

const Form = () => {
  const $cvStore = useStore(cvStore);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const avatar = await toBase64(file);

    setProperty('image', avatar);
  }

  return (
    <div id="non-printable" class="flex flex-col flex-1 p-8 items-stretch max-h-[100vh] overflow-y-auto gap-8 text-sm">

      <FormSection
        title="Imagen"
        type="image"
        onInput={handleFileChange}
      />

      <FormSection
        title="Título"
        placeholder="Nombre Apellido"
        onInput={(e) => setProperty('title', e.target.value)}
        value={$cvStore.title}
      />

      <FormSection
        title="Subtítulo"
        placeholder="Profesión"
        onInput={(e) => setProperty('subtitle', e.target.value)}
        value={$cvStore.subtitle}
      />

      <FormSection
        title="Sobre mí"
        type="textarea"
        placeholder="Sobre mí"
        onInput={(e) => setProperty('about_me', e.target.value)}
        value={$cvStore.about_me}
      />

      <FormSection
        title="Habilidades"
        isList
        listValues={$cvStore.skills}
        listName="skills"
      />

      <FormSection
        title="Idiomas"
        isList
        listValues={$cvStore.languages}
        listName="languages"
      />

      <FormSection
        title="Contacto"
        isList
        listValues={$cvStore.contact}
        listName="contact"
      />

      <FormSection
        title="Educación"
        isList
        listValues={$cvStore.education}
        listName="education"
        isComplex
      />

      <FormSection
        title="Experiencia"
        isList
        listValues={$cvStore.experience}
        listName="experience"
        isComplex
      />

      <FormSection
        title="Certificaciones y premios"
        isList
        listValues={$cvStore.certs_and_awards}
        listName="certs_and_awards"
        isComplex
      />

      <label class="block">
        <span class="text-gray-700">Footer</span>
        <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Izquierda" onInput={(e) => setProperty('footer', { ...$cvStore.footer, leftContent: e.target.value })} value={$cvStore.footer.leftContent} />
        <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Derecha" onInput={(e) => setProperty('footer', { ...$cvStore.footer, rightContent: e.target.value })} value={$cvStore.footer.rightContent} />
      </label>

      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => window.print()}>Imprimir o descargar</button>
    </div>
  );
};

export default Form;