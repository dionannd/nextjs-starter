import Footer from '@/components/portal/Footer';
import InfiniteSlider from '@/components/portal/InfiniteSlider';

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between">
      <p>Portal Pages</p>
      <div className="flex items-center justify-center rounded-xl border border-slate-600/50 bg-white  px-4 py-12">
        <InfiniteSlider />
      </div>
    </main>
  );
}
