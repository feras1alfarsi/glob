import React from "react";
import { ArrowRight, Globe2, Shield, Zap, BarChart3 } from "lucide-react";

// --- 1. The Globe Component (Refactored) ---
const Globe: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-[400px] h-[400px]">
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.2; transform: scale(1); } 50% { opacity:1; transform: scale(1.2); } }
        `}
      </style>

      {/* Background Stars (Moved outside the globe div so they aren't clipped) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[10%] top-[20%] w-1 h-1 bg-blue-200 rounded-full animate-[twinkling_3s_infinite]" />
        <div className="absolute right-[20%] top-[10%] w-1.5 h-1.5 bg-white rounded-full animate-[twinkling_4s_infinite]" />
        <div className="absolute left-[15%] bottom-[20%] w-1 h-1 bg-white rounded-full animate-[twinkling_5s_infinite]" />
        <div className="absolute right-[10%] bottom-[30%] w-1 h-1 bg-blue-100 rounded-full animate-[twinkling_2s_infinite]" />
        <div className="absolute left-[40%] top-[5%] w-0.5 h-0.5 bg-white rounded-full animate-[twinkling_3s_infinite]" />
      </div>

      {/* The Globe */}
      <div
        className="relative z-10 w-[250px] h-[250px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3),-5px_0_8px_#c3f4ff_inset,15px_2px_25px_#000_inset,-24px_-2px_34px_#c3f4ff99_inset,250px_0_44px_#00000066_inset,150px_0_38px_#000000aa_inset]"
        style={{
          backgroundImage:
            "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          animation: "earthRotate 30s linear infinite",
        }}
      >
      </div>
    </div>
  );
};

// --- 2. Main Landing Page Component ---
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400">
            <Globe2 className="w-6 h-6" />
            <span className="font-bold text-xl text-white tracking-tight">Orbital<span className="text-blue-500">.io</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Network</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Live Global Network
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Connect to the <br />
              <span className="text-blue-500">Future.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Deploy your applications to the edge with a single click. 
              Our global mesh network ensures your data travels at the speed of light.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                Start Deploying
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all">
                View Documentation
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-gray-500 text-sm">
              <p>Trusted by modern teams:</p>
              <div className="flex gap-4 grayscale opacity-50">
                {/* Simple Placeholders for logos */}
                <div className="font-bold">ACME</div>
                <div className="font-bold">Vercel</div>
                <div className="font-bold">Stripe</div>
              </div>
            </div>
          </div>

          {/* Right: The Globe */}
          <div className="relative flex justify-center md:justify-end">
             {/* Gradient Glow behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
            <Globe />
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Lightning Fast"
              description="Latency that feels instantaneous. Your users won't even have time to blink."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-blue-400" />}
              title="Bank-Grade Security"
              description="End-to-end encryption standard on all requests. Your data is safe with us."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6 text-purple-400" />}
              title="Real-time Analytics"
              description="Watch your traffic flow across the globe in real-time with our dashboard."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Component for Features
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
    <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-blue-500/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);