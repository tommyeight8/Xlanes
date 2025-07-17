import AccordionItem from "./AccordionItem";

const faqs = [
  {
    title: "Does XLanes offer refunds?",
    content: (
      <>
        <p>
          No, we don’t. <strong>XLanes</strong> only offers store credit that is
          good for up to ONE YEAR from the original reservation date.
        </p>
        <p>
          <strong>
            We require a minimum of at least 24 hours notice for any reservation
            cancellations. We do not offer store credit for any cancellations
            made within 24 hours of your reservation time.
          </strong>
        </p>
      </>
    ),
  },
  {
    title: "Do I need to make reservations for bowling?",
    content: (
      <>
        <p>
          Although reservations are not required, we do highly recommend doing
          so especially when it comes down to Friday and Saturday nights.
        </p>
        <p>
          Please keep in mind that we do not allow same day reservations. Wait
          lists can range from 1 hour to 3 hours depending on the day of the
          week. So we suggest to call ahead to check availability.
        </p>
      </>
    ),
  },
  {
    title: "Do I need to leave a deposit for a lane reservation?",
    content: (
      <p>No, we take full payment when you book your reservation online.</p>
    ),
  },
  {
    title: "Are shoe rentals included in the cost of hourly lane rentals?",
    content: (
      <p>
        No, however shoe rentals are included if you book one of our VIP rooms.
      </p>
    ),
  },
  {
    title: "What is the Friday and Saturday Dress Code?",
    content: (
      <>
        <p>
          NO CAPS (<em>Dressy Hats are allowed</em>)
        </p>
        <p>NO VISORS</p>
        <p>NO BEANIES</p>
        <p>NO BAGGY PANTS</p>
      </>
    ),
  },
  {
    title: "We are running late for our reservation, what can we do?",
    content: (
      <p>
        We understand how difficult it is having your entire group here on time
        so we will do everything possible on our end to accommodate your group
        during the week. Unfortunately, there isn’t much we can do if we have
        full bookings that are back to back on the weekend so we highly
        encourage your group to be on-site 15 minutes prior to your booking.
      </p>
    ),
  },
  {
    title: "Is your facility family friendly?",
    content: (
      <p>
        Absolutely, families love XLanes and we love our families as well!
        Please reach out to{" "}
        <a
          href="mailto:Events@XLanesLA.com"
          className="text-pink-600 font-semibold underline"
        >
          Events@XLanesLA.com
        </a>{" "}
        if you need assistance planning your child’s birthday event!
      </p>
    ),
  },
  {
    title: "How long does it take to finish a game of bowling?",
    content: (
      <p>
        On an average, it’ll take a group of 5–6 about 1 full hour to finish a
        game of bowling on 1 lane.
      </p>
    ),
  },
  {
    title:
      "Do you have a limit as to how many guests we can have in our lanes?",
    content: (
      <p>
        We want all of our guests to have the best experience possible so yes,
        we do have a limit of 6 guests per lane due to our seating layout.
      </p>
    ),
  },
  {
    title: "I want to start planning for an event, how can I reach you?",
    content: (
      <p>
        Please fill out our event inquiry form and we will reach out to you. Or
        please email{" "}
        <a
          href="mailto:Events@XLanesLA.com"
          className="text-pink-600 font-semibold underline"
        >
          Events@XLanesLA.com
        </a>
        .
      </p>
    ),
  },
  {
    title: "How long can my guests expect to stay for an event at XLanes?",
    content: (
      <p>
        On average, we have seen guests stay anywhere from 3–6 hours all
        depending on the size of your group and what packages are planned for
        the event.
      </p>
    ),
  },
  {
    title: "How much of a deposit will I need to put down?",
    content: (
      <p>
        If you are pre-ordering food with us, it is about 50% to lock you in,
        and then the remaining balance 10 days prior to your event. If it’s a
        reservation on the general or VIP lanes, the full payment is processed
        online at <a href="https://xlanesla.com">www.xlanesla.com</a>.
      </p>
    ),
  },
  {
    title: "Can I change my event to a later date?",
    content: (
      <p>
        Yes, you will have 12 months from the date of your event to apply your
        deposit to a future event. The subtotal of your rescheduled event must
        be equal or greater than your original deposit.
      </p>
    ),
  },
  {
    title: "Will someone be assigned to us on the day of our event?",
    content: (
      <p>
        Upon arrival, a manager on duty will be on-site to welcome you and
        assist you in hosting your event here at XLanes.
      </p>
    ),
  },
  {
    title: "Does XLanes validate for parking?",
    content: (
      <p>
        Yes, we validate for 4 hours with our general stamp. If you are a guest
        for an event that goes longer than what our general stamp covers, we do
        have an event stamp available. Please check with your host so you may
        prepare accordingly.
      </p>
    ),
  },
  {
    title: "Are IDs required to enter?",
    content: (
      <>
        <p>
          <strong>ID checks begin at 7 pm Thursday – Sunday.</strong>
        </p>
        <p>
          All guests must be 18 or older with a valid government-issued ID for
          entry. Guests under the age of 18 require a guardian 25 or older with
          them after 7 pm at all times (up to 4 individuals per guardian).
        </p>
        <p>
          <strong>Friday/Saturday (after 9 pm)</strong> – All guests must be 21
          or older with a valid ID for entry.
        </p>
        <p>
          Guests aged between 18 to 20 require an adult aged 25 or older with
          them after 7 pm at all times (up to 4 individuals per guardian).
        </p>
        <p>
          All guests 18 or older must have a valid government-issued ID for
          entry.
        </p>
      </>
    ),
  },
  {
    title:
      "I have my ID but it expired yesterday, can you please make an exception?",
    content: (
      <p>
        Unfortunately, no. Only valid government issued identification cards or
        passports will be accepted.
      </p>
    ),
  },
  {
    title: "Is there a security check upon arrival?",
    content: (
      <p>
        Our commitment is to ensure the safety of all of our guests so it is
        possible for us to provide the best experience for that special night
        out. Management can’t thank our guests enough for being so patient as we
        work through this together.
      </p>
    ),
  },
  {
    title: "Can we bring in a cake?",
    content: (
      <p>
        Absolutely! Cakes to celebrate a birthday are perfectly fine to bring in
        but no other food will be allowed to be brought in. We do have a no
        outside food/beverage policy here at XLanes. Please remember that only
        store-bought cakes are permitted and cakes baked at home will not be
        allowed.
      </p>
    ),
  },
  {
    title: "Can we bring decorations for our event?",
    content: (
      <p>
        We do not allow glitter or confetti. Balloons are okay. We only allow
        “painter’s tape” to put up decorations. Decorations are subject to
        manager approval.
      </p>
    ),
  },
];

export default function AccordionGroup() {
  return (
    <div className="max-w-2xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, idx) => (
        <AccordionItem key={idx} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
}
