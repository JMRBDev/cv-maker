import { useEffect } from 'preact/hooks';
import Body from "../Body";
import Divider from "../Divider";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Preview = () => {
    useEffect(() => {
        const adjustZoom = () => {
            const documentWidth = window.innerWidth;
            const documentHeight = window.innerHeight;
            const zoomWidth = documentWidth / (23 * 37.795276);
            const zoomHeight = documentHeight / (31.7 * 37.795276);
            const zoomLevel = Math.min(zoomWidth, zoomHeight);

            if (zoomLevel >= 1) return;

            document.querySelector<HTMLElement>("#printable").style.transform = `scale(${zoomLevel})`;
        }

        adjustZoom();

        const mQuery = window.matchMedia('print');
        mQuery.addEventListener('change', (mq) => {
            if (mq.matches) {
                document.querySelector<HTMLElement>('#printable').style.transform = `scale(1)`;
            }
        });

        window.addEventListener("resize", adjustZoom);
    }, []);

    return (
        <div id="content" class="p-4 h-full flex items-center">
            <div id="printable" class="origin-top relative w-[21cm] h-[29.7cm] shadow-lg px-14 py-10 bg-white flex flex-col text-sm">
                <Header />
                <Divider />
                <div class="flex flex-1">
                    <Sidebar />
                    <Divider isVertical />
                    <Body />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Preview;