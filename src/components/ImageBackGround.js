import React from "react";


const ImageBackGround = () => {
    const backgroundImg = "https://static.vecteezy.com/system/resources/previews/001/254/680/non_2x/cinema-background-concept-vector.jpg"
    return (
        <div className="absolute inset-0 -z-10 bg-cover bg-center" 
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${backgroundImg})`,
            }}
        ></div>
    );
};

export default ImageBackGround;
