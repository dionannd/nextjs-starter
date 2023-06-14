import {
  RxFigmaLogo,
  RxFramerLogo,
  RxSketchLogo,
  RxTwitterLogo,
  RxGithubLogo,
  RxVercelLogo,
  RxNotionLogo,
  RxDiscordLogo,
  RxInstagramLogo,
  RxLinkedinLogo
} from 'react-icons/rx';

const LOGOS = [
  <RxFigmaLogo key="1" size={24} className="text-slate-800" />,
  <RxFramerLogo key="2" size={24} className="text-slate-800" />,
  <RxSketchLogo key="3" size={24} className=" text-slate-800" />,
  <RxTwitterLogo key="4" size={24} className="text-slate-800" />,
  <RxGithubLogo key="5" size={24} className="text-slate-800" />,
  <RxVercelLogo key="6" size={24} className="text-slate-800" />,
  <RxNotionLogo key="7" size={24} className="text-slate-800" />,
  <RxDiscordLogo key="8" size={24} className="text-slate-800" />,
  <RxInstagramLogo key="9" size={24} className="text-slate-800" />,
  <RxLinkedinLogo key="10" size={24} className="text-slate-800" />
];

export default function InfiniteSlider() {
  return (
    <div className="after:scale-x-100after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[line-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:content-['']">
      <div className="flex w-[calc(250px*10)] animate-infinite-slider">
        {LOGOS.map((logo, index) => (
          <div key={index} className="slide flex w-[125px] items-center justify-center">
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div key={index} className="slide flex w-[125px] items-center justify-center">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
