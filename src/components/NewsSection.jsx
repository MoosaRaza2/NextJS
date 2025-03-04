import React from "react";
import PropTypes from "prop-types";
import { SectionWrapper } from "../hoc";

const NewsSection = ({ 
  newsData = [], 
  layoutOrder = ["side-one", "main", "side-two"] 
}) => {
  const categorizedNews = (newsData || []).reduce((acc, item) => {
    const position = item?.newsPosition?.toLowerCase() || 'main';
    switch(position) {
      case 'side-one': acc.sideOne.push(item); break;
      case 'side-two': acc.sideTwo.push(item); break;
      default: acc.main.push(item);
    }
    return acc;
  }, { main: [], sideOne: [], sideTwo: [] });

  const NewsItem = ({ item }) => {
    if (!item) return null;
    
    return (
      <div className="mb-6 last:mb-0 rounded-lg shadow-md overflow-hidden">
        {item.thambnailImage && (
          <img 
            src={item.thambnailImage} 
            alt={item.title || "News image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="p-2">
          {item.link ? (
            <a 
              href={item.link} 
              className="text-[16px] font-semibold"
            >
              {item.title || "Untitled News"}
            </a>
          ) : (
            <span className="text-[20px] uppercase font-bold">
              {item.title || "Untitled News"}
            </span>
          )}
          {item.childs && (
            <ul className="mt-3 space-y-5">
              {item.childs.map((child, index) => (
                <li key={index} className="text-[14px] font-semibold">
                  {child.link ? (
                    <a href={child.link}>{child.title || "Untitled"}</a>
                  ) : (
                    <span>{child.title || "Untitled"}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const NewsContainer = ({ position, items }) => {
    if (!items || !items.length) return null;

    const positionMap = {
      'side-one': 'sideOne',
      'side-two': 'sideTwo',
      'main': 'main'
    };

    return (
      <div className={`flex flex-col ${position === 'main' ? 'flex-1' : 'flex-[0.4]'} `}>
        <div className="space-y-6">
          {items.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 px-4 py-8">
      {layoutOrder.map((position) => {
        const containerKey = position.replace('-', '').toLowerCase();
        const items = categorizedNews[{
          'sideone': 'sideOne',
          'sidetwo': 'sideTwo',
          'main': 'main'
        }[containerKey]] || [];

        return items.length > 0 ? (
          <NewsContainer 
            key={position}
            position={position}
            items={items}
          />
        ) : null;
      })}
    </div>
  );
};

NewsSection.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      thambnailImage: PropTypes.any, 
      newsPosition: PropTypes.oneOf(['side-one', 'main', 'side-two']),
      childs: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          link: PropTypes.string
        })
      )
    })
  ),
  layoutOrder: PropTypes.arrayOf(
    PropTypes.oneOf(['side-one', 'main', 'side-two'])
  )
};

export default SectionWrapper(NewsSection, 'news-section');