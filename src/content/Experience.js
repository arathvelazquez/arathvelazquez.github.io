import React, { useState } from 'react';
import { experience } from '../data/experience';

const Experience = () => {

  const [search, setSearch] = useState(0);

  const jobs = experience.filter(data => {
    if (search === 0) {
      return data;
    } else {
      return data.category.includes(search);
    }
    
  }).map((data, key) => {
    return (
      <div key={key} className="m-auto w-10/12 mb-12 text-center md:grid md:grid-flow-col md:grid-cols-3 md:gap-4">
        <div>
          <div className="m-auto md:m-0 w-7/12 md:w-9/12 text-white text-xl bg-primary block p-2 uppercase font-extrabold">
            {data.companyName}
          </div>
          <div className="m-auto md:m-0 w-9/12 md:w-10/12 text-primary text-xs bg-secondary block p-2">
            {data.role}
          </div>
          <div className="md:text-left mt-1 text-xs">
            {data.period}
          </div>
        </div>
        <div className="md:row-start-1 md:col-start-2 md:col-span-2">
          <p className="text-sm text-justify" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="w-full flex justify-between text-center mb-16">
      <ul className="m-auto text-sm font-12 text-black uppercase">
        <li className={search === 'professional' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 hover:shadow-link focus:outline-none'}><a href="#" className="cursor-pointer" onClick={(e)=> {setSearch('professional'); e.preventDefault();}}>Professional</a></li>
        <li className={search === 'freelance' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 hover:shadow-link focus:outline-none'}><a href="#" className="cursor-pointer" onClick={(e)=> {setSearch('freelance'); e.preventDefault();}}>Freelance</a></li>
        <li className={search === 'entrepreneur' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 hover:shadow-link focus:outline-none'}><a href="#" className="cursor-pointer" onClick={(e)=> {setSearch('entrepreneur'); e.preventDefault();}}>Entrepreneur</a></li>
        <li className={search === 'just_for_fun' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 hover:shadow-link focus:outline-none'}><a href="#" className="cursor-pointer" onClick={(e)=> {setSearch('just_for_fun'); e.preventDefault();}}>Just for Fun</a></li>
        <li className={search === 'concepts' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 hover:shadow-link focus:outline-none'}><a href="#" className="cursor-pointer" onClick={(e)=> {setSearch('concepts'); e.preventDefault();}}>Concepts</a></li>
      </ul>
    </div>
      {jobs}
    </div>
  )
}

export default Experience;
