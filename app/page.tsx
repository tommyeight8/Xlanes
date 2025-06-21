// pages/index.tsx
import NeonSign from "@/components/NeonSign";

export default function Home() {
  return (
    <>
    <div className="min-h-screen">
    Home
    </div>
      <NeonSign text="BOWLING" delayMs={200} />
<NeonSign text="Arcade" delayMs={200} />
<NeonSign text="BILLIARDS" delayMs={200} />
<NeonSign text="PARTY" delayMs={200} />

    </>
  );
}
