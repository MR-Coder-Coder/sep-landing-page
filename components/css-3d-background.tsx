"use client"

export function CSS3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Geometric shapes with CSS transforms */}
      <div className="absolute inset-0 perspective-[1000px]">
        {/* Rotating cube 1 */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 animate-float-slow">
          <div className="relative w-full h-full preserve-3d animate-rotate-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rotate-x-0 rotate-y-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rotate-y-90 translate-z-32"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rotate-y-180"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rotate-y-270 translate-z-32"></div>
          </div>
        </div>

        {/* Rotating cube 2 */}
        <div className="absolute top-2/3 right-1/4 w-48 h-48 animate-float-medium">
          <div className="relative w-full h-full preserve-3d animate-rotate-3d-reverse">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20 rotate-y-90 translate-z-24"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20 rotate-y-180"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/20 rotate-y-270 translate-z-24"></div>
          </div>
        </div>

        {/* Rotating cube 3 */}
        <div className="absolute top-1/2 right-1/3 w-56 h-56 animate-float-fast">
          <div className="relative w-full h-full preserve-3d animate-rotate-3d-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20 rotate-y-90 translate-z-28"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20 rotate-y-180"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20 rotate-y-270 translate-z-28"></div>
          </div>
        </div>

        {/* Floating rings */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 animate-float-slow">
          <div className="relative w-full h-full preserve-3d animate-rotate-ring">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 rotate-x-60"></div>
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 rotate-x-30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-teal-500/20"></div>
          </div>
        </div>

        {/* Grid plane with perspective */}
        <div className="absolute bottom-0 left-0 right-0 h-96 rotate-x-60 origin-bottom">
          <div
            className="w-full h-full bg-gradient-to-t from-blue-500/5 to-transparent"
            style={{
              backgroundImage: `
                   linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                 `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  )
}
