import React from 'react';

export function FloatingSpheres() {
  return (
    <>
      {/* Floating 3D Translucent Spheres with Neon Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Blue Sphere - Top Left */}
        <div
          className="absolute w-64 h-64 rounded-full animate-pulse-slow"
          style={{
            top: '5%',
            left: '10%',
            background: 'radial-gradient(circle at 30% 30%, rgba(122, 224, 255, 0.3), rgba(122, 224, 255, 0.05))',
            filter: 'blur(40px)',
            boxShadow: '0 0 80px rgba(122, 224, 255, 0.6), 0 0 120px rgba(122, 224, 255, 0.3)',
            animation: 'float-1 8s ease-in-out infinite'
          }}
        />

        {/* Pink Sphere - Top Right */}
        <div
          className="absolute w-80 h-80 rounded-full"
          style={{
            top: '10%',
            right: '5%',
            background: 'radial-gradient(circle at 35% 35%, rgba(248, 184, 244, 0.4), rgba(248, 184, 244, 0.05))',
            filter: 'blur(50px)',
            boxShadow: '0 0 100px rgba(248, 184, 244, 0.7), 0 0 140px rgba(248, 184, 244, 0.4)',
            animation: 'float-2 10s ease-in-out infinite'
          }}
        />

        {/* Violet Sphere - Middle Left */}
        <div
          className="absolute w-72 h-72 rounded-full"
          style={{
            top: '40%',
            left: '5%',
            background: 'radial-gradient(circle at 40% 40%, rgba(180, 122, 255, 0.35), rgba(180, 122, 255, 0.05))',
            filter: 'blur(45px)',
            boxShadow: '0 0 90px rgba(180, 122, 255, 0.65), 0 0 130px rgba(180, 122, 255, 0.35)',
            animation: 'float-3 9s ease-in-out infinite'
          }}
        />

        {/* Pink Sphere - Bottom Right */}
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            bottom: '5%',
            right: '8%',
            background: 'radial-gradient(circle at 30% 30%, rgba(248, 184, 244, 0.3), rgba(248, 184, 244, 0.05))',
            filter: 'blur(55px)',
            boxShadow: '0 0 110px rgba(248, 184, 244, 0.6), 0 0 150px rgba(248, 184, 244, 0.3)',
            animation: 'float-4 11s ease-in-out infinite'
          }}
        />

        {/* Blue Sphere - Bottom Left */}
        <div
          className="absolute w-56 h-56 rounded-full"
          style={{
            bottom: '15%',
            left: '15%',
            background: 'radial-gradient(circle at 35% 35%, rgba(122, 224, 255, 0.25), rgba(122, 224, 255, 0.05))',
            filter: 'blur(35px)',
            boxShadow: '0 0 70px rgba(122, 224, 255, 0.5), 0 0 100px rgba(122, 224, 255, 0.25)',
            animation: 'float-5 7s ease-in-out infinite'
          }}
        />

        {/* Violet Sphere - Center Right */}
        <div
          className="absolute w-64 h-64 rounded-full"
          style={{
            top: '50%',
            right: '20%',
            background: 'radial-gradient(circle at 40% 40%, rgba(180, 122, 255, 0.3), rgba(180, 122, 255, 0.05))',
            filter: 'blur(40px)',
            boxShadow: '0 0 85px rgba(180, 122, 255, 0.55), 0 0 120px rgba(180, 122, 255, 0.3)',
            animation: 'float-6 9.5s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Animations */}
      <style>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 25px) scale(0.95);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          40% {
            transform: translate(-25px, 30px) scale(1.08);
          }
          70% {
            transform: translate(15px, -20px) scale(0.92);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          35% {
            transform: translate(30px, 25px) scale(0.97);
          }
          65% {
            transform: translate(-20px, -30px) scale(1.03);
          }
        }

        @keyframes float-4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          45% {
            transform: translate(-30px, -25px) scale(1.06);
          }
          75% {
            transform: translate(20px, 20px) scale(0.94);
          }
        }

        @keyframes float-5 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          30% {
            transform: translate(25px, -20px) scale(1.04);
          }
          60% {
            transform: translate(-18px, 28px) scale(0.96);
          }
        }

        @keyframes float-6 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          38% {
            transform: translate(-22px, 35px) scale(0.98);
          }
          68% {
            transform: translate(28px, -25px) scale(1.02);
          }
        }
      `}</style>
    </>
  );
}
