import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      <nav className="max-w-4xl mx-auto px-6 py-6">
        <Link href="/" className="flex items-center gap-3 w-fit">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-extrabold">
            IC
          </div>
          <span className="text-xl font-bold tracking-tight">Coach IronClaw</span>
        </Link>
      </nav>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: March 19, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Coach IronClaw (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is operated by Be Cause Partners Pte Ltd. 
              This Privacy Policy explains how we collect, use, store, and protect your personal information 
              when you use the Coach IronClaw platform at coach-ironclaw.vercel.app and any associated services.
            </p>
            <p>
              By using Coach IronClaw, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p><strong className="text-white">Account Information:</strong> When you create an account, we collect your name, email address, and authentication credentials.</p>
            <p><strong className="text-white">Garmin Data:</strong> When you connect your Garmin account via OAuth, we access and store your fitness and health data including: activities (runs, rides, swims) with detailed metrics such as heart rate, pace, distance, cadence, and elevation; health metrics including Heart Rate Variability (HRV), Body Battery, sleep data, stress levels, and resting heart rate; and training readiness and recovery indicators.</p>
            <p><strong className="text-white">Usage Data:</strong> We collect information about how you interact with our platform, including pages visited, features used, and coaching conversations.</p>
            <p><strong className="text-white">Waitlist Information:</strong> If you join our waitlist, we collect your email address.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use your information to: provide personalized triathlon coaching and training analysis; generate training plans, race projections, and recovery recommendations; power AI coaching conversations with context from your training data; improve and optimize our platform and coaching algorithms; and communicate with you about your account, updates, and new features.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using industry-standard encryption at rest and in transit. 
              We use Supabase for our database infrastructure and Vercel for hosting, both of which 
              maintain SOC 2 compliance and use encrypted connections.
            </p>
            <p>
              Your Garmin OAuth tokens are encrypted and stored securely. We never store your Garmin password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal data or health information with third parties 
              for marketing purposes. We may share data with: service providers who assist in operating 
              our platform (hosting, database, authentication); AI model providers to power coaching 
              conversations (your data is sent securely and not used to train models); and law enforcement 
              if required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Garmin Data Specifically</h2>
            <p>
              We access your Garmin data solely through the official Garmin Health API using OAuth 2.0 
              authorization. You can revoke our access to your Garmin data at any time through your 
              Garmin Connect account settings or by disconnecting your Garmin account from Coach IronClaw. 
              Upon disconnection, we will delete your synced Garmin data within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p>
              You have the right to: access, update, or delete your personal information; disconnect 
              your Garmin account and have synced data deleted; export your data in a portable format; 
              opt out of non-essential communications; and request a copy of all data we hold about you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management. We do not use 
              advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by email or through a notice on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact</h2>
            <p>
              For questions about this Privacy Policy or your data, contact us at:{" "}
              <a href="mailto:hawkins@hawkinspham.com" className="text-blue-400 hover:text-blue-300">
                hawkins@hawkinspham.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}