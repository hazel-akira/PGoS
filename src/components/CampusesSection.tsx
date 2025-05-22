import { Phone } from "lucide-react";

const campuses = [
  {
    name: "Murang'a Campus",
    desc: "Pioneer school & St Paul Thomas Academy",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80",
    phone: "+254 20 5038097",
  },
  {
    name: "Thika Campus",
    desc: "Pioneer Girls High School & Pioneer Girls Junior High School",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    phone: "+254 20 5038097",
  },
  {
    name: "Nairobi Campus",
    desc: "Pioneer International University",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    phone: "+254 20 5038097",
  }
];

export default function CampusesSection() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between bg-white rounded-b-2xl shadow-md pb-10 pt-8 px-6 md:px-12 gap-8 md:gap-0 animate-fade-in">
      {campuses.map((campus, idx) => (
        <div key={campus.name} className={`flex-1 flex flex-col items-center pb-4 ${idx < campuses.length - 1 ? "md:border-r border-gray-300" : ""}`}>
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gray-200 mb-4 shadow-lg flex items-center justify-center bg-gray-100">
            <img src={campus.img} alt={campus.name} className="object-cover w-full h-full" />
          </div>
          <div className="text-center font-semibold text-base md:text-lg text-[#223364]">{campus.name}</div>
          <div className="text-center text-gray-700 text-sm mb-5">{campus.desc}</div>
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1 text-sm shadow cursor-pointer border hover:bg-gray-100 transition hover-scale">
            <Phone className="w-5 h-5 text-[#223364]" />
            <span className="underline font-medium">{campus.phone}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
