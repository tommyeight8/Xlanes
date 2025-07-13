import React from "react";

const VIP = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {/* Westwood Room */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Westwood Room</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-2">
            <strong>4 private lanes</strong> – standing capacity of 25
          </p>
          <p className="text-gray-600 text-sm mb-4">
            This room must be rented for at least two hours. On top of the room
            rental fee, there is also a required{" "}
            <strong>$325 food and drink minimum</strong> before a 20% service
            charge and tax every two hours the room is rented. Food & Beverage
            minimums are applied to Friday & Saturday reservations.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Shoe rentals are included</li>
            <li>1 tab split into 4 payments/cards</li>
            <li>No additional seating inside the room</li>
          </ul>
        </div>
        <div className="px-6 pb-6">
          <span className="text-xl font-semibold text-pink-600">$275/hr</span>
        </div>
      </div>

      {/* Brentwood Room */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Brentwood Room</h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-2">
            <strong>4 private lanes</strong> – standing capacity of 30
          </p>
          <p className="text-gray-600 text-sm mb-4">
            This room must be rented for at least two hours. On top of the room
            rental fee, there is also a required{" "}
            <strong>$350 food and drink minimum</strong> before a 20% service
            charge and tax every two hours the room is rented. Food & Beverage
            minimums are applied to Friday & Saturday reservations.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Shoe rentals are included</li>
            <li>1 tab split into 4 payments/cards</li>
            <li>No additional seating inside the room</li>
          </ul>
        </div>
        <div className="px-6 pb-6">
          <span className="text-xl font-semibold text-pink-600">$350/hr</span>
        </div>
      </div>

      {/* Mulholland Room */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Mulholland Room
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-2">
            <strong>6 private lanes</strong> – standing capacity of 45
          </p>
          <p className="text-gray-600 text-sm mb-4">
            This room must be rented for at least two hours. On top of the room
            rental fee, there is also a required{" "}
            <strong>$550 food and drink minimum</strong> before a 20% service
            charge and tax every two hours the room is rented. Food & Beverage
            minimums are applied to Friday & Saturday reservations.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
            <li>Shoe rentals are included</li>
            <li>1 tab split into 4 payments/cards</li>
            <li>No additional seating inside the room</li>
          </ul>
        </div>
        <div className="px-6 pb-6">
          <span className="text-xl font-semibold text-pink-600">$425/hr</span>
        </div>
      </div>
    </div>
  );
};

export default VIP;
