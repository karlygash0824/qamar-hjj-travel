import React from "react";
import Footer from "./components/Footer";

function App() {
  const tours = [
    {
      id: 1,
      title: "Хаж 2025",
      img: "https://th.bing.com/th/id/R.ab99ec868d12c79796909f8929d1e1ed?rik=yRxYGQ4po9LGJw&pid=ImgRaw&r=0",
      price: "1350$",
      duration: "10 күн",
      description: "Толық қызметпен, ыңғайлы қонақүй және гидпен бірге",
    },
    {
      id: 2,
      title: "Умра (Рамазан 2025)",
      img: "https://tse2.mm.bing.net/th/id/OIP.WqsVAbrTluiXyJ_Bs_F85gHaE3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "1350$",
      duration: "10 күн",
      description: "Рамазан айында ерекше рухани тәжірибе.",
    },
    {
      id: 3,
      title: "Умра (Жыл бойы)",
      img: "src/assets/QazretPoto.jpg",
      price: "1350$",
      duration: "10 күн",
      description: "Кез келген уақытта ыңғайлы сапар.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-green-900 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-yellow-400">
            Qamar Hajj Travel
          </h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-yellow-400">Басты бет</a>
            <a href="#tours" className="hover:text-yellow-400">Турлар</a>
            <a href="#contact" className="hover:text-yellow-400">Байланыс</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center flex-1 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('/kaaba.jpg')", // суретті public ішіне салып, атын kaaba.jpg деп қой
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Арманыңды орында — Қасиетті сапарға аттан!
          </h2>
          <p className="mb-6 text-lg">
            Бізбен бірге Хаж және Умраға сапар шегіңіз. Жоғары қызмет, ыңғайлы
            сапар және рухани тәжірибе.
          </p>
          <a
            href="#tours"
            className="bg-yellow-400 text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Турларды көру
          </a>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10 text-green-900">
            Біздің турлар
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-green-900 mb-2">
                    {tour.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-yellow-500 font-bold">{tour.price}</span>
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                  </div>
                  <a
                    href="#contact"
                    className="block bg-green-900 text-white text-center py-2 rounded-lg hover:bg-green-800 transition"
                  >
                    Толығырақ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Байланыс</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const message = e.target.message.value;
              const whatsappNumber = "77001234567"; // өз нөміріңді жаз
              const whatsappURL = `https://wa.me/${whatsappNumber}?text=Атым: ${name}%0AТелефон: ${phone}%0AХабарлама: ${message}`;
              window.open(whatsappURL, "_blank");
            }}
            className="max-w-lg mx-auto bg-white rounded-lg p-6 text-green-900 shadow-lg"
          >
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Атыңыз</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Телефон</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Хабарлама</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-green-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-500 transition"
            >
              WhatsApp арқылы жіберу
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

