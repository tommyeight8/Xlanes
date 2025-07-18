import NeonSign from "@/components/NeonSign";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bar-bg.webp')",
      }}
      className="min-h-screen w-full flex justify-center items-center py-12 px-4 pb-16
  bg-fixed bg-no-repeat bg-cover bg-center bg-gradient-to-br from-violet-600 to-pink-600"
    >
      <div className="max-w-[900px] w-full backdrop-blur-lg rounded-2xl bg-black/60 shadow-[0_0_30px_4px_rgba(20,184,166,0.7)] px-8 pt-0 pb-8 border-2 border-teal-400">
        <About />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <NeonSign text="Sports Bar" />
      {/* <h3 className="text-4xl text-violet-600 text-center my-8 font-semibold">
        About Us
      </h3> */}
      <div className="w-full h-96 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/barMain-2.webp"
          alt="about us banner"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-6 text-gray-200 text-shadow-2xs mt-8">
        <h3 className="m-auto w-fit rounded-lg px-6 py-4 text-center text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-white">
          The Premier Sports Bar in Los Angeles, CA
        </h3>

        <p>
          Dive into the heart of Downtown LA Sports bar culture, where passion
          meets entertainment. At XLanes LA, we seamlessly blend the excitement
          of games with the allure of a bustling restaurant and the vibrant
          energy of a top-tier bar. Our spacious sports bar arena promises an
          experience like no other in Los Angeles, CA. Featuring advanced audio
          technology, dynamic LED lights, and expansive projector screens,
          immerse yourself in every play and cheer with every score.
        </p>
        <h3 className="m-auto w-fit rounded-lg px-6 py-4 text-center text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-white">
          Services We Offer
        </h3>
        <h4 className="font-semibold text-xl text-pink-600">
          Exceptional Sports Viewing:
        </h4>
        <p>
          Experience the Game Like Never Before. Dive deep into the pulsating
          heart of sports at XLanes LA. Whether you’re an avid fan cheering for
          your favorite team or someone who simply enjoys the exhilarating
          atmosphere of a live match, we’ve got you covered. Our sports bar in
          Los Angeles, CA, is designed to give you an unmatched viewing
          experience.
        </p>
        <ul className="list-disc pl-5">
          <li>
            State-of-the-Art Setup: Our Downtown LA Sports bar arena is
            furnished with high-definition large-screen projectors, advanced
            audio systems, and dynamic LED illumination. Every pass, goal, and
            tackle is amplified for an immersive experience.
          </li>
          <li>
            Dedicated Sports Arena: Keeping our guests in mind, we’ve ensured
            that the sports bar downtown LA section is separate from the
            restaurant. This thoughtful design ensures that your sports viewing
            is undisturbed and every game feels like a grand event.
          </li>
          <li>
            Varied Sports Coverage: From basketball to soccer, from rugby to
            tennis, we showcase a broad spectrum of sports. No matter what your
            preference, we promise you won’t miss out on any action.
          </li>
        </ul>
        <h4 className="font-semibold text-xl text-pink-600">
          Bowling Extravaganza:
        </h4>
        <p>
          Redefining Bowling in Los Angeles Bowling is not just a game; it’s an
          experience. And at XLanes LA, we take this experience to an entirely
          new level.
        </p>
        <ul className="list-disc pl-5">
          <li>
            State-of-the-Art Lanes: Our lanes boast the latest technology,
            ensuring accuracy and a smooth bowling experience. The vibrant
            ambiance and electric atmosphere make every roll a thrilling
            adventure.
          </li>
          <li>
            Celebrate Your Wins: Every strike, every spare deserves to be
            celebrated. Our interactive scoring system and dazzling light
            effects add to the excitement. Let the pins echo your achievements.
          </li>
          <li>
            For Everyone: Whether you’re a pro bowler or just looking for a
            fun-filled evening with friends and family, our Bowling Los Angeles
            facility is perfect for all. Expert or beginner, the lanes await
            you.
          </li>
        </ul>
        <h4 className="font-semibold text-xl text-pink-600">
          Delightful Dining:
        </h4>
        <ul className="list-disc pl-5">
          <li>
            Diverse Menu: From local favorites to international delicacies, our
            menu is a melange of flavors. Every dish is crafted with care,
            ensuring you get a taste of authenticity with every bite.
          </li>
          <li>
            Refreshing Beverages: Pair your meal with our extensive range of
            drinks. Whether it’s a cocktail to lift your spirits or a mocktail
            to cool down, our bar has something for everyone.
          </li>
          <li>
            Relaxed Ambiance: After an exciting game or a bowling match, what’s
            better than relaxing with some delicious food? Our dining section,
            distinct from the sports bar, offers a serene environment to enjoy
            your meal. Whether you’re on a date, with family, or hanging out
            with friends, the ambiance sets the perfect mood for a memorable
            meal.
          </li>
        </ul>
        {/* <span className="m-auto  rounded-4xl text-center max-w-[60%] px-6 py-2 border border-pink-600">
          Join us at XLanes LA, where every visit promises a unique blend of
          entertainment, thrill, and culinary delights.
        </span> */}
        <h3 className="m-auto w-fit rounded-lg px-6 py-4 text-center text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 text-white">
          Why Choose Xlanes LA?
        </h3>
        <p>
          When you’re in the bustling city of Los Angeles, CA, seeking an
          exhilarating sports bar experience, you might wonder, “Which sports
          bar near me provides an exceptional mix of gaming, dining, and
          entertainment?” Here’s why XLanes LA stands out:
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/sports-0.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">Prime Location</span>
            <span>
              Downtown LA’s Sports Bar Gem: Situated perfectly in the pulse of
              downtown, XLanes LA is more than just a sports bar; it’s a
              landmark. Being in such a central location, it becomes an ideal
              rendezvous for locals looking for that ‘go-to’ spot and for
              visitors seeking a taste of LA’s vibrant nightlife. Accessibility
              is a luxury in a city as sprawling as Los Angeles, and our prime
              location ensures you spend more time enjoying and less time
              commuting.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/sports-3.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">
              Cutting-Edge Setup
            </span>
            <span>
              An Audio-Visual Extravaganza: The essence of a good game night
              lies in its details. At XLanes LA, we’ve fine-tuned those details
              to perfection. Our state-of-the-art audio systems ensure you catch
              every cheer, every commentary, and every crucial game moment in
              crystal clear sound. Paired with our radiant LED lights and
              expansive projector displays, you’re not just watching a game;
              you’re living it. The ambiance sets the mood, making every
              touchdown, goal, or basket feel like a personal victory.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/sports-2.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">Expert Team</span>
            <span>
              At Your Service, Always: A place is only as good as its people,
              and XLanes LA prides itself on its professional yet personable
              staff. Every member of our team, from the bartenders to the
              bowling alley attendants, has been meticulously trained not just
              in their job roles but in the art of hospitality. Whether you need
              assistance in selecting a drink, setting up your bowling game, or
              choosing from our diverse menu, you’ll find our staff eager and
              equipped to assist. With a dedication that goes beyond mere
              service, our team ensures that your moments at XLanes LA translate
              into cherished memories.
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border-3 border-white block rounded-2xl shrink-0 overflow-hidden h-64 w-full md:h-auto md:w-1/3 relative bg-amber-200">
            <Image
              src="/images/sports-1.jpg"
              alt="sports 1"
              fill
              className="object-cover w-full"
            />
          </div>
          <p className="flex flex-col w-full md:w-2/3">
            <span className="font-semibold text-lg mb-2">
              Versatile Experience
            </span>
            <span className="mb-4">
              A Melting Pot of Entertainment: Imagine a place where you can
              transition from an intense game-viewing session to a relaxed
              bowling match and then to a sumptuous dinner – all under one roof.
              That’s the versatility XLanes LA offers. Every visit introduces
              you to a new experience, making monotony a word you’ll forget. Our
              eclectic mix of services ensures that whether you’re a sports
              enthusiast, a bowling pro, or a food lover, there’s something
              tailor-made for you. The convergence of diverse experiences
              ensures that every outing to XLanes LA feels fresh, making it the
              perfect spot for every mood and occasion.
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
