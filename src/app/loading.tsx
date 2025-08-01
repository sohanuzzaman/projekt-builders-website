export default function Loading() {
  return (
    <div className="min-h-screen bg-coastal-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="text-4xl font-light text-coastal-text tracking-[0.3em] uppercase animate-pulse">
            PROJEKT
          </div>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-coastal-lightgrey rounded-full"></div>
          <div className="absolute inset-0 border-4 border-coastal-gold rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-coastal-text/60 font-light text-sm uppercase tracking-[0.2em]">
          Loading...
        </p>
      </div>
    </div>
  );
}
