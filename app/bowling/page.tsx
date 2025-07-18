import NeonSign from "@/components/NeonSign";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/sportBar-bg.webp')",
      }}
      className="min-h-screen w-full flex justify-center items-center py-12 px-4 pb-16
      bg-fixed bg-no-repeat bg-cover bg-center bg-gradient-to-br from-violet-600 to-pink-600"
    >
      <div className="relative max-w-[900px] w-full rounded-2xl backdrop-blur-lg bg-black/60 shadow-[0_0_30px_4px_rgba(219,39,119,0.7)] px-8 pt-0 pb-8 border border-pink-600">
        <About />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <NeonSign text="Bowling" />
      {/* <h3 className="text-4xl text-violet-600 text-center my-8 font-semibold">
        About Us
      </h3> */}
      <div className="w-full h-96 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/bowlingMain-3.webp"
          alt="about us banner"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col gap-6 text-gray-200 text-shadow-2xs mt-8">
        <p className="mb=4">
          About XLanes LA Nestled in the vibrant heart of Los Angeles, CA, lies
          a gem that redefines the essence of fun and entertainment – XLanes LA.
          Spread over an enormous 50,000 square feet, this multifaceted
          entertainment powerhouse isn’t just another place to bowl; it’s an
          experience in itself.
        </p>
        <p>
          From the pulsating energy of our bowling lanes to the intimate vibe of
          our private karaoke rooms, the thrill of arcade games, to the
          strategic nuances of billiards, every corner of XLanes LA promises
          excitement.
        </p>
        <h3 className="m-auto w-fit rounded-lg px-6 py-4 text-center text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-white">
          Our Diverse Service Offerings
        </h3>
        <h4 className="font-semibold text-xl text-pink-600">
          Bowling LA Experience
        </h4>
        <p>
          For both the bowling enthusiast and the occasional player, XLanes LA
          provides an unmatched Bowling Los Angeles Experience. With 30
          impeccably maintained lanes, our facility is an ode to the game’s rich
          history, yet with a contemporary twist. The Bowling alley LA live
          radiate a lively glow, creating an atmosphere that captures the
          effervescence of Los Angeles. Bowling at XLanes LA transcends the
          sport – it’s about the camaraderie among friends, the excitement of
          hitting that perfect strike, and the anticipation in every roll. The
          joy of bowling is universal, and here at LA bowling alley, every round
          feels like a celebration, etching memories that last a lifetime.
        </p>
        <h4 className="font-semibold text-xl text-pink-600">Karaoke Rooms</h4>
        <p>
          Unleash your inner pop star at XLanes LA’s deluxe Karaoke Rooms. For
          those who revel in the spotlight or simply love to belt out their
          favorite tunes, our karaoke spaces are a dream come true. Featuring
          four rooms, each uniquely themed, the setting is private and intimate.
          State-of-the-art sound systems ensure that your voice is crystal
          clear, and with a library boasting the latest hits and timeless
          classics, there’s a song for every mood. Whether you’re celebrating a
          special occasion or just having a fun night out, singing at XLanes LA
          feels both exhilarating and therapeutic. It’s time to grab the mic and
          let the music take over.
        </p>
        <h4 className="font-semibold text-xl text-pink-600">Arcade Mania</h4>
        <p>
          Revisit your childhood or introduce the younger generation to the
          charm of arcade games at XLanes LA’s Arcade Mania. Our collection is a
          beautiful juxtaposition of iconic classics and modern gaming wonders.
          The vibrant lights, the sound of coins, the adrenaline rush as you
          race to beat your high score or navigate through challenging terrains
          – it’s a euphoric experience. From racing simulations to action-packed
          adventures, every game promises to transport you to a world where
          reality fades and only fun matters. Whether you’re playing solo or
          challenging a friend, every moment at the arcade is a roller-coaster
          of emotions.
        </p>
        <h4 className="font-semibold text-xl text-pink-600">Billiards</h4>
        <p>
          There’s a timeless elegance to the game of billiards, and at XLanes
          LA, this game is celebrated in all its grandeur. With tables that meet
          the highest standards of quality, each game becomes a dance of
          strategy, skill, and precision. The serene ambiance is perfect for
          those intense matches where every move counts. Whether you’re a
          seasoned player, honing your craft, or just enjoying a casual game
          with friends, our billiards section promises an experience that’s both
          engaging and relaxing. With top-quality cues and an impeccable playing
          surface, it’s all about aiming for perfection.
        </p>
        <h4 className="font-semibold text-xl text-pink-600">
          XLanes Sports Bar
        </h4>
        <p>
          Beyond the lanes and games, XLanes LA offers a sanctuary for sports
          enthusiasts – our illustrious sports bar in Los Angeles CA. It’s more
          than just a place to grab a drink; it’s an experience. With
          cutting-edge projectors, every game comes alive, making you feel like
          you’re right in the middle of the action. Dynamic LED lights set the
          mood while our innovative sound systems capture every cheer, every
          goal, every moment. To complement this, our drink menu features a
          curated selection of beverages, from classics to innovative
          concoctions. When the game’s on, there’s no better place to be in Los
          Angeles.
        </p>
        <h4 className="font-semibold text-xl text-pink-600">Gourmet Dining</h4>
        <p>
          Good food is the soul of any entertainment venue, and at XLanes LA,
          our culinary offerings are nothing short of spectacular. Every dish on
          our menu, curated with passion, speaks of a gastronomic journey that
          promises to delight every taste bud. From comforting classics to
          dishes that showcase culinary innovation, our chefs ensure that every
          bite is a revelation. Fresh ingredients, authentic flavors, and a dash
          of LA’s vibrant spirit – that’s what our kitchen promises. Whether
          you’re refueling between games or sitting down for a meal at XLanes
          LA, dining is an experience to savor.
        </p>

        <h3 className="m-auto w-fit rounded-lg mb-4 px-6 py-4 text-center text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-white">
          Why XLanes LA Stands Out
        </h3>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/Bowling-Lanes-1.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">
              Bowling Downtown LA
            </span>
            <span>
              Nestled in the heart of vibrant downtown Los Angeles, XLanes LA
              boasts an enviable location. Our central positioning ensures that
              we’re never too far away, no matter where you are in the city.
              Whether you’re typing bowling near me in a search engine or
              scouting for the best “sports bar in Los Angeles, CA,” we pop up
              as the preferred choice, bringing world-class entertainment right
              to your neighborhood.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/Bowling-Lanes-2.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">VIP Experiences</span>
            <span>
              For those who seek a touch of exclusivity and luxury in their
              recreational activities, our VIP rooms are a game-changer. Not
              just limited to bowling, these private spaces exude
              sophistication, ensuring you enjoy your games in utmost privacy.
              Adorned with upscale amenities and personalized services, the VIP
              rooms redefine the bowling experience, offering a fusion of
              leisure and luxury.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/Bowling-Lanes-3.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">
              Events and Celebrations
            </span>
            <span>
              Life is a series of memorable moments, and at XLanes LA, we
              specialize in amplifying these moments. Be it a milestone
              birthday, a significant corporate event, or just a spontaneous
              celebration, we’ve got you covered. Our tailored event packages
              are designed to cater to varied needs, ensuring every guest feels
              special. From the grandeur of our VIP rooms to our gourmet food
              packages, every detail is meticulously planned, turning your
              occasions into grand celebrations.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/Bowling-Lanes-4.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">
              Ease of Reservation
            </span>
            <span className="mb-4">
              In today’s fast-paced world, convenience is key. Recognizing this,
              our streamlined online reservation system is designed to save you
              from unnecessary waits. A few clicks, and your bowling lane,
              karaoke room, or VIP space is reserved exclusively for you. At
              XLanes LA, we believe in making your entertainment experience
              seamless from start to finish.
            </span>
            <span>
              In essence, XLanes LA isn’t just another sports bar in Los
              Angeles, CA; it’s an experience, an emotion, a place where
              memories are made. Whether it’s the allure of our prime location,
              the dazzle of our technical setup, the warmth of our staff, or the
              diversity of experiences we offer, every aspect of XLanes LA is
              curated with you in mind. So, the next time you find yourself
              searching for a “sports bar near me,” remember there’s a place
              downtown that’s always waiting to exceed your expectations.
            </span>
          </p>
        </div>

        <a
          href="https://alleytrak.com/app/client/4425"
          target="_blank"
          className="text-lg bg-pink-600 hover:bg-pink-700 transition duration-200 
              text-white px-6 py-2 rounded-4xl w-fit m-auto mt-8"
        >
          Boook Your Party Now!
        </a>
      </div>
    </>
  );
};

export default page;
