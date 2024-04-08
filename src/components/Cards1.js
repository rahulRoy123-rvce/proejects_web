import React from "react";
import India from "../Assets/india.png";
import Africa from "../Assets/africa.png";

const projects = [
  { id: 1, title: 'India - Odisha & Assam', description: 'Lorem ipsum dolor sit amet...', price: '€140.00', image: {India} },
  { id: 2, title: 'Africa - Ghana', description: 'Lorem ipsum dolor sit amet...', price: '€140.00', image: {Africa} },
  // ...add more projects
];

const Cards1 = () => {
   

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={projects.image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{projects.title}</div>
        <p className="text-gray-700 text-base">{projects.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{projects.price}</span>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Learn more!
        </button>
      </div>
    </div>
  );
};

export default Cards1;
