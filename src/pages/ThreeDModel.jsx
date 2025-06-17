import Spline from '@splinetool/react-spline';

export default function New() {
  return (
    // <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
         <div className="w-full max-w-[100vw] md:h-screen h-[70vh] relative -mt-9 md:-mt-[220px] lg:-mt-[290px]">
      <div className="md:hidden relative top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Use 2 Fingers</h2>
        <p className="text-gray-300">to make 3-D model move</p>
      </div>
      <Spline 
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        scene="https://prod.spline.design/uvJNYiVcfYMz0k0r/scene.splinecode" 
      />
    </div>
  );
}
