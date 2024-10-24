import React from 'react';

const crops = [
  { name: 'Wheat', description: 'Wheat is mainly cultivated in Punjab, Haryana, Uttar Pradesh, and Madhya Pradesh. It grows well in cool weather with moderate rainfall and prefers well-drained loamy soil. Ideal temperatures range from 15°C to 25°C during different growth stages.  ', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Vehn%C3%A4pelto_6.jpg' },
  { name: 'Rice', description: 'Rice is predominantly grown in West Bengal, Uttar Pradesh, Andhra Pradesh, and Tamil Nadu. It thrives in hot and humid conditions with heavy rainfall and requires clayey soil that retains water. The ideal temperature range is between 21°C and 32°C.', image: 'https://www.shutterstock.com/image-photo/white-rice-paddy-plant-background-260nw-2270511133.jpg' },
  { name: 'Sugarcane', description: 'Sugarcane is majorly cultivated in Uttar Pradesh, Maharashtra, Karnataka, and Tamil Nadu. It requires a tropical climate with abundant water and warm temperatures between 20°C and 35°C. Deep, fertile, and well-drained loamy soils are most suitable.', image: 'https://i.ytimg.com/vi/fNzq5YasHX8/maxresdefault.jpg' },
  { name: 'Cotton', description: 'Cotton is largely grown in Gujarat, Maharashtra, Andhra Pradesh, and Madhya Pradesh. It prefers warm climates with temperatures between 21°C and 30°C and light rainfall. Black cotton soil and well-drained alluvial soil provide the best conditions.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTb2X8Ap7chAn03U2e5IUCK-barOiouXpmA&s' },
  { name: 'Jute', description: 'Jute is mainly cultivated in West Bengal, Bihar, and Assam. It grows well in hot and humid weather with heavy rainfall and prefers well-drained loamy or clayey soil. The ideal temperature range is 24°C to 37°C.', image: 'https://gojuteinternational.com/wp-content/uploads/2023/12/Jute-Growing-in-India-jpg.webp' },
  { name: 'Maize', description: 'Maize is widely grown in Karnataka, Andhra Pradesh, Uttar Pradesh, and Bihar. It thrives in moderate temperatures between 21°C and 27°C and requires well-drained, fertile soil, such as sandy loam, with moderate rainfall.', image: 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Green_Revolution_in_Maize_5062753f0c.webp' },
];

const FarmPage = () => {
  return (
    <div className='w-full h-screen'>
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-400 p-6 pt-10">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4">Crops in India</h1>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Discover the diverse variety of crops cultivated across India's rich agricultural landscape.
          </p>
        </header>
        <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {crops.map((crop, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={crop.image}
                alt={crop.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">{crop.name}</h2>
                <p className="text-gray-700 leading-relaxed">{crop.description}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
    </div>
  );
};

export default FarmPage;