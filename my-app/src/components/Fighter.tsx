import React from 'react';

const FighterPairCard: React.FC<{ fighter1: { name: string, image: string, title?: string }, fighter2: { name: string, image: string, title?: string } }> = ({ fighter1, fighter2 }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 mb-8">
      {/* Fighter 1 */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-red-600"
            src={fighter1.image}
            alt={fighter1.name}
            style={{ objectPosition: 'center top' }} // Adjusted image position
          />
          <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{fighter1.name}</h3>
            {fighter1.title && <p className="text-gray-600">{fighter1.title}</p>}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-600">VS</p>
      </div>

      {/* Fighter 2 */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 border-red-600"
            src={fighter2.image}
            alt={fighter2.name}
            style={{ objectPosition: 'center top' }} // Adjusted image position
          />
          <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{fighter2.name}</h3>
            {fighter2.title && <p className="text-gray-600">{fighter2.title}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};


const FighterShowcase: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Main Event Matchups</h2>
        <FighterPairCard
          fighter1={{ name: 'Ilia Topuria', image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-02/TOPURIA_ILIA_L_BELT_02-17.png?itok=h1fu9Vu9', title: 'UFC Featherweight' }}
          fighter2={{ name: 'Max Holloway', image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=U9IB8OUQ', title: 'Former UFC Featherweight Champion' }}
        />
        <FighterPairCard
          fighter1={{ name: 'Khamzat Chimaev', image: 'https://dmxg5wxfqgb4u.cloudfront.net/2021-10/71660%252Fprofile-galery%252Fprofile-picture%252FCHIMAEV_KHAMZAT_10-30.png', title: 'UFC Middleweight Contender' }}
          fighter2={{ name: 'Robert Whittaker', image: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-07/WHITTAKER_ROBERT_L_06-22.png?itok=5F4FFhTb', title: 'Former UFC Middleweight Champion' }}
        />
      </div>
    </section>
  );
};

export default FighterShowcase;
