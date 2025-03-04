import React from "react";

const Dropdown = ({ isOpen, content }) => {
 
  const chunkSize = 6;
  const contentChunks = [];
  for (let i = 0; i < content.length; i += chunkSize) {
    contentChunks.push(content.slice(i, i + chunkSize));
  }

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-16 left-0 w-full bg-[#212428] z-10 `}
    >
      <div className="container mx-auto px-28 py-6">
        <div className="flex flex-wrap gap-6">
          {contentChunks.map((chunk, chunkIndex) => (
            <div
              key={chunkIndex}
              className="flex flex-col gap-1"
            >
              {chunk.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                  )}
                  <span className="text-white text-sm uppercase font-bold">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;