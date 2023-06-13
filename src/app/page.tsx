import InfiniteSlider from '@/components/portal/InfiniteSlider';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="rounded-xl py-12">
        <InfiniteSlider />
      </div>
    </main>
  );
}
