import React from "react";

const FooterActiveTab = () => {
  const topSection = [
    { title: "Family travel hub", description: "Tips and inspiration" },
    { title: "Family budget travel", description: "Get there for less" },
    {
      title: "Vacation ideas for any budget",
      description: "Make it special without making",
    },
    {
      title: "Travel Europe on a budget",
      description: "How to take the kids to Europe",
    },
    {
      title: "Outdoor adventure",
      description: "Explore nature with the family",
    },
    {
      title: "Bucket list national parks",
      description: "Must-see parks for family travel",
    },
    {
      title: "Kid-friendly state parks",
      description: "Check out these family-friendly",
    },
  ];

  const footerSections = [
    {
      title: "Support",
      links: [
        "Help Center",
        "Get help with a safety issue",
        "AirCover",
        "Anti-discrimination",
        "Disability support",
        "Cancellation options",
        "Report neighborhood concern",
      ],
    },
    {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "Airbnb your experience",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
        "Hosting responsibly",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "2025 Summer Release",
        "Newsroom",
        "Careers",
        "Investors",
        "Gift cards",
        "Airbnb.org emergency stays",
      ],
    },
  ];

  return (
    <footer className=" border-t border-gray-200">
      <div className="   py-10">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  mb-14">{
            topSection.map(top=> <div>
                <h4 className="font-semibold">{top.title}</h4>
                <p className="text-gray-500 text-sm">{top.description}</p>
            </div>)}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Section Header */}
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="text-gray-600 text-sm">{section.subtitle}</p>
                )}
              </div>

              {/* Links */}
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    {typeof link === "string" ? (
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors block hover:underline"
                      >
                        {link}
                      </a>
                    ) : (
                      <div className="space-y-1">
                        <a
                          href="#"
                          className="text-gray-900 hover:text-gray-700 font-medium text-sm transition-colors block hover:underline"
                        >
                          {link.title}
                        </a>
                        {link.description && (
                          <p className="text-gray-500 text-xs">
                            {link.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterActiveTab;
