import lamp from "../assets/lamp.jpg"
import mobil from "../assets/mobil.jpg"
import power from "../assets/power bank.avif"
import bin from "../assets/smartbin.avif"
import panel from "../assets/solar.jpg"
import thermostats from "../assets/thermostats.jpg"
import loop from "../assets/eneloop.jpg"
import irigasi from "../assets/farm.jpg"

const products = [
    {
      id: 1,
      name: "EcoLamp",
      description: "Lampu hemat energi berbasis LED yang tahan lama dan ramah lingkungan. Cocok untuk digunakan di rumah, kantor, atau ruang publik untuk menghemat energi listrik hingga 80%.",
      price: 120000,
      image: lamp,
      category: ["Lighting", "Energy", "Sustainability"],
    },
    {
      id: 2,
      name: "Mobil Listrik",
      description: "Mobil listrik modern dengan teknologi canggih dan baterai yang tahan lama. Dapat menempuh jarak hingga 400 km dengan satu kali pengisian daya, menjadikannya pilihan ideal untuk perjalanan ramah lingkungan.",
      price: 450000000,
      image: mobil,
      category: ["Vehicles", "Energy", "Sustainability", "Smart Technology"],
    },
    {
      id: 3,
      name: "Power Bank Tenaga Surya",
      description: "Power bank inovatif dengan panel surya bawaan. Dapat mengisi daya perangkat elektronik Anda di mana saja menggunakan energi matahari, ideal untuk aktivitas outdoor.",
      price: 300000,
      image: power,
      category: ["Energy", "Outdoor", "Accessories", "Sustainability"],
    },
    {
      id: 4,
      name: "SmartBin",
      description: "Tempat sampah pintar yang dilengkapi dengan sensor otomatis untuk membuka dan menutup tutup. Mampu memisahkan sampah organik dan anorganik secara otomatis untuk mendukung daur ulang.",
      price: 800000,
      image: bin,
      category: ["Smart Home", "Sustainability", "Technology", "Environment"],
    },
    {
      id: 5,
      name: "Solar Panel",
      description: "Panel surya berkualitas tinggi untuk kebutuhan rumah tangga dan komersial. Menghasilkan energi listrik dari sinar matahari dengan efisiensi tinggi, cocok untuk mengurangi tagihan listrik.",
      price: 2500000,
      image: panel,
      category: ["Energy", "Smart Home", "Sustainability", "Green Tech"],
    },
    {
      id: 6,
      name: "Thermostats",
      description: "Termostat pintar yang dapat diatur melalui aplikasi smartphone. Membantu mengontrol suhu ruangan secara efisien untuk kenyamanan maksimal dan penghematan energi.",
      price: 1200000,
      image: thermostats,
      category: ["Smart Home", "Energy", "Technology", "Sustainability"],
    },
    {
      id: 7,
      name: "Baterai Eneloop",
      description: "Baterai isi ulang berkualitas tinggi dengan umur panjang. Dapat digunakan hingga 2100 kali pengisian ulang, menjadikannya solusi hemat dan ramah lingkungan untuk perangkat elektronik Anda.",
      price: 150000,
      image: loop,
      category: ["Accessories", "Energy", "Sustainability", "Tech Gadgets"],
    },
    {
      id: 8,
      name: "Irigasi Pertanian",
      description: "Sistem irigasi pintar yang dirancang untuk meningkatkan efisiensi penggunaan air di sektor pertanian. Dilengkapi dengan sensor tanah untuk mengatur kebutuhan air tanaman secara otomatis.",
      price: 3500000,
      image: irigasi,
      category: ["Agriculture", "Technology", "Sustainability", "Smart Farming"],
    },
  ];
  
  export default products;