import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      <nav className="border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xs font-extrabold">
              B
            </div>
            <span className="text-lg font-bold">Brikk</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: March 21, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">1. Who We Are</h2>
            <p>
              Brikk (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is an AI-powered triathlon coaching platform
              operated by Be Cause Partners Pte Ltd, a company registered in Singapore. This privacy policy
              explains how we collect, use, and protect your personal information when you use our platform
              at brikk.run.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <p>
              <strong className="text-white">Account Information:</strong> Email address, name, and authentication
              credentials when you create an account.
            </p>
            <p>
              <strong className="text-white">Garmin Data:</strong> When you connect your Garmin account, we access
              your training activities, health metrics (heart rate, HRV, sleep, stress, Body Battery),
              fitness data (VO2 Max, training status), and activity summaries. This data is accessed through
              the official Garmin Health API and Activity API with your explicit consent.
            </p>
            <p>
              <strong className="text-white">Chat Data:</strong> Messages you send to the Brikk coaching AI,
              and the responses generated for you.
            </p>
            <p>
              <strong className="text-white">Usage Data:</strong> How you interact with the platform, including
              pages visited, features used, and session duration.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">3. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <p>
              Provide personalized AI coaching based on your training data. Analyze your training load,
              recovery, and fitness trends. Generate race projections and training recommendations.
              Improve our platform and coaching algorithms. Communicate with you about your account
              and our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">4. AI Processing</h2>
            <p>
              Brikk uses Anthropic&apos;s Claude AI to process your coaching conversations. Your training data
              and chat messages are sent to Anthropic&apos;s API to generate coaching responses. Anthropic does
              not use your data to train their models. Each user&apos;s coaching instance is private and isolated
              — your data is never mixed with or accessible to other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">5. Data Sharing</h2>
            <p>We do not sell your personal data. We share information only with:</p>
            <p>
              <strong className="text-white">Garmin:</strong> OAuth tokens for data access (not your credentials).
              <strong className="text-white"> Anthropic:</strong> Chat messages and training context for AI processing.
              <strong className="text-white"> Supabase:</strong> Secure database hosting for your account and training data.
              <strong className="text-white"> Vercel:</strong> Platform hosting.
            </p>
            <p>We may also disclose information if required by law or to protect our legal rights.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">6. Data Security</h2>
            <p>
              We use industry-standard security measures including encrypted connections (HTTPS),
              secure authentication, and row-level security on our database. Your Garmin credentials
              are never stored — we only store OAuth tokens that can be revoked at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. You can request deletion
              of your account and all associated data at any time by contacting us. Upon deletion,
              your data will be permanently removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">8. Your Rights</h2>
            <p>
              You have the right to: access your personal data, correct inaccurate data, request
              deletion of your data, disconnect your Garmin account at any time, export your data,
              and withdraw consent for data processing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">9. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management. We do not use
              advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mt-8 mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your data, contact us at:{" "}
              <a href="mailto:coach@brikk.run" className="text-orange-400 hover:underline">
                coach@brikk.run
              </a>
            </p>
            <p className="mt-2">
              Be Cause Partners Pte Ltd<br />
              Singapore
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
