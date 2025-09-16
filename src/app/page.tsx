  import Link from "next/link";

  export default function Page() {
    return (
      <div className="min-h-screen relative flex flex-col justify-center items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.tapchicongsan.org.vn/image/journal/article?img_id=278632340&t=1684580043801")',
            filter: "brightness(0.7)",
          }}
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-8 p-8">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 drop-shadow-2xl">
            Welcome
          </h1>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link href={"/topic"}>
              <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white font-semibold text-lg tracking-wide">
                  Topic
                </span>
              </div>
            </Link>

            <Link href={"/interactive-ai"}>
              <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-white font-semibold text-lg tracking-wide">
                  AI Interaction
                </span>
              </div>
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      </div>
    );
  }
