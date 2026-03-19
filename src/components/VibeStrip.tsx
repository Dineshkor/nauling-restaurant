export default function VibeStrip() {
  return (
    <section className="w-full bg-dark-surface py-12 border-y border-dark-border relative overflow-hidden flex items-center">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
          <li className="font-serif italic text-2xl md:text-3xl text-text-secondary whitespace-nowrap">&ldquo;The best dal makhani in town&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-muted whitespace-nowrap">&ldquo;Feels just like home cooking&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-secondary whitespace-nowrap">&ldquo;Incredible flavors, warm hospitality&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-muted whitespace-nowrap">&ldquo;A true hidden gem&rdquo;</li>
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-secondary whitespace-nowrap">&ldquo;The best dal makhani in town&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-muted whitespace-nowrap">&ldquo;Feels just like home cooking&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-secondary whitespace-nowrap">&ldquo;Incredible flavors, warm hospitality&rdquo;</li>
          <li className="text-gold text-xl">✦</li>
          <li className="font-serif italic text-2xl md:text-3xl text-text-muted whitespace-nowrap">&ldquo;A true hidden gem&rdquo;</li>
        </ul>
      </div>
    </section>
  );
}
