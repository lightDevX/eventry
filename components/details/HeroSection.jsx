import Image from "next/image";
import ActionsButton from "../ActionsButton";

const HeroSection = () => {
    return (
        <section className="container">
            <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
                <Image src="/google-io-2023-1.png" alt="Event 1" className="h-[450px] mx-auto" height={500} width={500} />
            </div>

            <div className="flex items-end">
                <div className="flex-auto py-4">
                    <h1 className="font-bold text-2xl">Google I/O Extended</h1>
                    <p className="text-[#9C9C9C] text-base mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                    <div className="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span> | </span>
                        <span>40K Going</span>
                    </div>
                </div>

                <ActionsButton fromDetails={true} />
            </div>
        </section>
    );
};

export default HeroSection;