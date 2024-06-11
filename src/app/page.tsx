import TextReveal from "@/components/ui/text-reveal";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
        <TextReveal text="I am Currently learning Machine Learning, AWS, Next.js, Sring Boot." />
      </div>
    </div>
  );
}
