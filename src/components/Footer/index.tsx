import { useStore } from "@nanostores/preact";
import { cvStore } from "../../store/cvStore";
import Divider from "../Divider";

const Footer = () => {
    const $cvStore = useStore(cvStore);

    return (
        <div class="flex-col">
            {($cvStore.footer.leftContent || $cvStore.footer.rightContent) && (
                <>
                    <Divider />
                    <div class="flex justify-between text-slate-400 text-xs">
                        <p>{$cvStore.footer.leftContent}</p>
                        <p>{$cvStore.footer.rightContent}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Footer;