export const metadata = {
  title: "Contact Us | Nauling Family Restaurant",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark pb-24 w-full">
      <div className="w-full bg-dark pt-16 pb-12 px-6 text-center border-b border-dark-border">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Get In Touch</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">Find Us</h1>
        <p className="max-w-xl mx-auto text-base text-text-secondary mt-4 font-light">
          We&apos;re always here to welcome you. Reach out or drop by for a meal.
        </p>
        <div className="gold-line-center mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gold mb-6">Contact Information</h2>
              <div className="space-y-4 text-base text-text-secondary">
                <p><strong className="text-text-primary">📍 Address:</strong><br/>12 MG Road, Pune [TODO]</p>
                <p><strong className="text-text-primary">📞 Phone / WhatsApp:</strong><br/><a href="tel:+919970451515" className="hover:text-gold transition">+91 99704 51515</a></p>
                <p><strong className="text-text-primary">✉️ Email:</strong><br/>hello@naulingrestaurant.com</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gold mb-6">Opening Hours</h2>
              <div className="luxury-card p-6 rounded-2xl">
                <table className="w-full text-left">
                  <tbody className="divide-y divide-dark-border">
                    {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day => (
                      <tr key={day} className="flex justify-between">
                        <td className={`py-3 font-medium ${['Saturday','Sunday'].includes(day) ? 'text-gold' : 'text-text-primary'}`}>{day}</td>
                        <td className={`py-3 ${['Saturday','Sunday'].includes(day) ? 'text-gold' : 'text-text-muted'}`}>
                          {['Friday','Saturday','Sunday'].includes(day) ? '11:00 AM - 11:30 PM' : '11:00 AM - 11:00 PM'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gold mb-6">Send us a Message</h2>
              <form className="luxury-card p-8 rounded-2xl space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">Name</label>
                  <input type="text" className="w-full bg-dark-surface border border-dark-border rounded-xl p-4 text-text-primary focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none transition placeholder:text-text-muted" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">Phone</label>
                  <input type="tel" className="w-full bg-dark-surface border border-dark-border rounded-xl p-4 text-text-primary focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none transition placeholder:text-text-muted" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-secondary">Message</label>
                  <textarea rows={4} className="w-full bg-dark-surface border border-dark-border rounded-xl p-4 text-text-primary focus:ring-2 focus:ring-gold focus:border-gold focus:outline-none transition placeholder:text-text-muted" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full bg-gold text-dark py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition transform hover:-translate-y-0.5 shadow-lg shadow-gold/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
