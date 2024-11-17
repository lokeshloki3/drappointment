const ImageSection = ({ src, alt, className }) => {
    return (
      <div className={`flex justify-center mb-8 md:mb-20 ${className}`}>
        <img
          className="w-full h-auto p-3 md:p-4 rounded-3xl"
          style={{ backgroundColor: '#F1FEC4' }}
          src={src}
          alt={alt}
        />
      </div>
    );
  };
  
  export default ImageSection;
  