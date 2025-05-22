import { MapPin, Phone, Mail } from "lucide-react";

const addressList = [
  {
    title: "Murang'a Campus",
    detail: "P.O. BOX 625-10205 MARAGUA"
  },
  {
    title: "Thika Campus",
    detail: "P.O. Box 17-01015, Ithanga, Murang'a"
  },
  {
    title: "Nairobi Campus",
    detail: "P.O. BOX 33421, MURANG'A ROAD, OPPOSITE K.I.C.D, NAIROBI, KENYA."
  },
];

const phoneList = [
  { name: "Pioneer School", phone: "+25420 5038065" },
  { name: "St Paul Thomas", phone: "+254 20 5038097" },
  { name: "Pioneer Junior Academy", phone: "+254205038228" },
  { name: "Pioneer Girls High", phone: "+254205038079" },
  { name: "Pioneer Girls Junior", phone: "+25420 503 8234" },
  { name: "Pioneer International University", phone: "+25420 5038050" },
];

const emailList = [
  { name: "Pioneer School", email: "admissions@pioneerschools.ac.ke" },
  { name: "St Paul Thomas", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Junior Academy", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Girls High", email: "admissions@pioneerschools.ac.ke" },
  { name: "Pioneer Girls Junior", email: "admissions@pioneerschools.ac.ke" },
];

export default function ContactInfoSection() {
  return (
    <div className="w-full bg-white rounded-t-2xl shadow-md mt-8 px-6 py-10 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between animate-fade-in">
      {/* Addresses */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="text-blue-500" />
          <span className="font-bold text-lg text-[#223364]">Addresses</span>
        </div>
        <ul className="text-sm md:text-base text-gray-800 pl-2 list-disc space-y-1">
          {addressList.map((addr) => (
            <li key={addr.title}>
              <strong>{addr.title}</strong> - {addr.detail}
            </li>
          ))}
        </ul>
      </div>
      {/* Telephone */}
      <div className="flex-1 flex flex-col gap-3 border-y md:border-y-0 md:border-x border-gray-200 px-3 md:px-6">
        <div className="flex items-center gap-2 mb-2">
          <Phone className="text-red-500" />
          <span className="font-bold text-lg text-[#223364]">Telephone:</span>
        </div>
        <ul className="space-y-1">
          {phoneList.map(({ name, phone }) => (
            <li key={name} className="flex flex-col leading-tight">
              <span className="font-semibold text-[#223364]">{name}</span>
              <span className="ml-1 text-gray-700">{phone}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Email */}
      <div className="flex-1 flex flex-col gap-3 px-2">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="text-red-600" />
          <span className="font-bold text-lg text-[#223364]">Email Us</span>
        </div>
        <ul className="space-y-1">
          {emailList.map(({ name, email }) => (
            <li key={name} className="flex flex-col leading-tight">
              <span className="font-semibold text-[#223364]">{name}</span>
              <span className="ml-1 text-gray-700 break-all">{email}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Office Hours and Note */}
      <div className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 w-full px-4 md:px-8">
        <div className="mt-2 text-center">
          <div className="font-bold text-[#be7d12] text-base">Office hours:</div>
          <div>Mon - Fri: 8:00am - 5:00pm</div>
          <div>Sat &amp; Sun: 9:00am - 3:00pm</div>
        </div>
        <div className="mt-2 text-xs text-gray-600 text-center">
          Our Schools are boarding school for both Boys and Girls, only that the girls and Boys are in<br />
          different campuses: Boys are in Murang'a Campus while Girls in Thika campus.
        </div>
      </div>
    </div>
  );
}

