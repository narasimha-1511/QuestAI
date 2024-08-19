import React from 'react'
  
const PodcastCard = ({ title , description , icon , onClick}) => {
    return (
        <div className="flex justify-around items-center py-6 px-4 bg-white border rounded-lg hover:shadow-lg cursor-pointer" onClick={onClick}>
        <div className="flex flex-col text-left">
            <h2 className="text-lg font-semibold mb-1">{title}</h2>
            <p className="text-gray-500 max-w-44">{description}</p>
        </div>
        <div className="mb-2">
            <img src={icon} alt="icon" />
        </div>
        </div>
    )
}

export default PodcastCard;