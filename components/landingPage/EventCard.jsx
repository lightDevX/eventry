import Image from "next/image";
import Link from "next/link";

const EventCard = () => {
    return (
        <div>
            <div class="overflow-hidden rounded-md bg-[#242526]">
                <Image src="/google-io-2023-1.png" alt="Event 1" class="w-full" width={500} height={500} />

                <div class="p-3">
                    <Link href="./details.html" class="font-bold text-lg">Google I/O Extended</Link>
                    <p class="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                    <div class="text-[#737373] text-sm mt-1">
                        <span>1k Interested</span>
                        <span> | </span>
                        <span>40K Going</span>
                    </div>


                    <div class="w-full flex gap-4 mt-4">

                        <button class="w-full bg-indigo-600 hover:bg-indigo-800">Interested</button>


                        <button class="w-full">Going</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;