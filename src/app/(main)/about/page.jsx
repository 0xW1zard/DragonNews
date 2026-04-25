import React from 'react';

export const metadata = {
    title: 'Dragon News - About',
    description: 'Get The Latest News on Dragon News - Your Trusted Source for Breaking News, In-Depth Analysis, and Exclusive Stories. Stay Informed with Dragon News Today!',
}


const about = () => {
    return (
        <div className="container mx-auto px-4 my-12">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Empowering the World with Truth</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Since 2022, Dragon News has been at the forefront of digital journalism.
                    We deliver breaking news, in-depth analysis, and diverse perspectives
                    to millions of readers worldwide.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                    { label: "Daily Readers", value: "2M+" },
                    { label: "Global Reporters", value: "150+" },
                    { label: "Awards Won", value: "25" }
                ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-10 text-center border-b-4 border-[#D72050]">
                        <h2 className="text-4xl font-bold text-[#D72050] mb-2">{stat.value}</h2>
                        <p className="text-gray-600 font-medium uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Editorial Integrity</h2>
                    <p className="text-gray-600 mb-4">
                        We believe that journalism is a public service. Our reporters follow a
                        strict code of ethics to ensure every story is verified, balanced, and
                        free from outside influence.
                    </p>
                    <ul className="space-y-3">
                        {['Unbiased Reporting', 'Fact-Checked Accuracy', 'Global Perspectives'].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-gray-700 font-semibold">
                                <span className="text-[#D72050]">✔</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400 italic">[Team Office Image]</p>
                </div>
            </div>
        </div>
    );
};

export default about;