import Link from 'next/link';

export default function OrderBanner() {
  return (
    <section className="w-full bg-dark-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Order Options</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">How Would You Like It?</h2>
          <div className="gold-line-center"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🛵', title: 'Home Delivery', desc: 'Order from the comfort of your home' },
            { icon: '🛍️', title: 'Takeaway', desc: 'Pick it up fresh and hot' },
            { icon: '🍽️', title: 'Dine In', desc: 'Come enjoy with family' },
          ].map(item => (
            <div key={item.title} className="luxury-card p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer group">
              <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <span className="text-4xl group-hover:scale-110 transform transition-transform">{item.icon}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link href="/menu" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#20BE5A] hover:shadow-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/20">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.523 5.864L.057 23.884l6.17-1.617A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.29-1.544l-.38-.225-3.935 1.031 1.05-3.83-.248-.394A9.78 9.78 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
            Order on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
