import { useStore } from '@nanostores/preact';
import { cvStore } from '../../store/cvStore';

const Header = () => {
    const $cvStore = useStore(cvStore);

    return (
        <div class="flex">
            {$cvStore.image && (
                <img width={100} height={100} src={$cvStore.image} alt="Profile picture" />
            )}

            <div class="flex flex-col justify-center ml-4">
                <h1 class="text-xl font-bold">{$cvStore.title}</h1>
                <h2 class="text-slate-400">{$cvStore.subtitle}</h2>
            </div>
        </div>
    );
}

export default Header;