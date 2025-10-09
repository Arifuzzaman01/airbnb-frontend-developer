import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FooterSecondaryTab = () => {
    const [show,setShow] = useState(false)
  const cities = [
    // Row 1
    [
      { name: "Albuquerque", state: "New Mexico" },
      { name: "Arlington, TX", state: "Texas" },
      { name: "Atlanta Metro", state: "Georgia" },
      { name: "Augusta", state: "Georgia" },
      { name: "Austin Metro", state: "Texas" },
      { name: "Baton Rouge", state: "Louisiana" }
    ],
    // Row 2
    [
      { name: "Bentonville", state: "Arkansas" },
      { name: "Birmingham", state: "Alabama" },
      { name: "Boise", state: "Idaho" },
      { name: "Boston Metro", state: "Massachusetts" },
      { name: "Boulder", state: "Colorado" },
      { name: "Charlotte", state: "North Carolina" }
    ],
    // Row 3
    [
      { name: "Chicago Metro", state: "Illinois" },
      { name: "Cincinnati", state: "Ohio" },
      { name: "Columbus", state: "Ohio" },
      { name: "Crestview", state: "Florida" },
      { name: "Dallas", state: "Texas" },
    
    ],
    // Row 4
    [
      { name: "Detroit Metro", state: "Michigan" },
      { name: "Fayetteville", state: "North Carolina" },
      { name: "Fort Myers", state: "Florida" },
      { name: "Fort Worth", state: "Texas" },
      { name: "Frankfurt", state: "Kentucky" },
      { name: "Fresno", state: "California" }
    ],
    // Row 5
    [
      { name: "Greeley", state: "Colorado" },
      { name: "Greenville-Greer", state: "South Carolina" },
      { name: "Hartford", state: "Connecticut" },
      { name: "Hoboken", state: "New Jersey" },
      { name: "Houston Metro", state: "Texas" },
      { name: "Indianapolis", state: "Indiana" }
    ],
    // Row 6
    [
      { name: "Jacksonville", state: "Florida" },
      { name: "Kansas City, MO", state: "Missouri" },
      { name: "Lacey", state: "Washington" },
      { name: "Lexington Park", state: "Maryland" },
      { name: "Los Angeles", state: "California" },
      { name: "Loveland", state: "Colorado" }
    ],
    // Row 7
    [
      { name: "Madison", state: "Alabama" },
      { name: "Memphis", state: "Tennessee" },
      { name: "Miami", state: "Florida" },
      { name: "Midland", state: "Texas" },
      { name: "Minneapolis", state: "Minnesota" },
      { name: "Myrtle Beach", state: "South Carolina" }
    ]
  ];

  return (
 
      <div className=" py-8">
        {/* Cities Grid */}
        <div className="mb-8 relative">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Popular Locations
          </h3>
          <div className="space-y-6">
            {show ? cities.map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              >
                {row.map((city, cityIndex) => (
                  <div 
                    key={`${rowIndex}-${cityIndex}`}
                    className="text-sm hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-gray-900 hover:text-rose-500">
                      {city.name}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {city.state}
                    </div>
                  </div>
                ))}
                
              </div>
            )):cities.slice(0,3).map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              >
                {row.map((city, cityIndex) => (
                  <div 
                    key={`${rowIndex}-${cityIndex}`}
                    className="text-sm hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <div className="font-medium text-gray-900 hover:text-rose-500">
                      {city.name}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {city.state}
                    </div>
                  </div>
                ))}
                
              </div>
            ))}
            <button onClick={()=> setShow(!show)} className='absolute bottom-0 right-24 font-bold'>
              {show ? "" : <p className='flex items-end'> Show more <IoIosArrowDown/></p>}
            </button>
          </div>
        </div>

        
      </div>
    
  );
};

export default FooterSecondaryTab;