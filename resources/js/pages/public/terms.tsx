import React from "react";
import Header from "../components/header";11
import Footer from "../components/footer";6



const BookingTerms = () => {
  return (
    <>
    <Header/>
    
    <div className="pl-0 px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Our booking terms and conditions
          </h1>
        </div>

        {/* 1. Reservations */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          1. Reservations
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          All room reservations are subject to availability. To secure a booking,
          a valid credit card or deposit may be required. The hotel reserves the
          right to refuse any reservation at its discretion.
        </p>

        {/* 2. Check-In and Check-Out */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          2. Check-In and Check-Out
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          Guests may check in from <strong>2:00 PM</strong> on the day of arrival.
          Check-out is required by <strong>11:00 AM</strong> on the day of departure.
          Early check-in and late check-out are subject to availability and may incur
          additional charges.
        </p>

        {/* 3. Cancellations and No-Shows */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          3. Cancellations and No-Shows
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          Cancellations made within <strong>48 hours</strong> of the scheduled arrival
          date will incur a cancellation fee equivalent to one night’s stay. Failure
          to arrive without prior notice (“no-show”) will be charged the full amount
          of the first night.
        </p>

        {/* 4. Payments */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          4. Payments
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          Payment for accommodation and services is required at check-in unless
          otherwise agreed. The hotel accepts major credit cards and other forms of
          payment as indicated on our website. Rates are subject to change without
          notice.
        </p>

        {/* 5. Guest Responsibilities */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          5. Guest Responsibilities
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          Guests are expected to conduct themselves in a respectful manner and comply
          with hotel policies. Any damage to rooms, furnishings, or hotel property
          caused by a guest (or their visitors) will be charged to the guest’s
          account. The hotel reserves the right to refuse service or remove any guest
          for inappropriate behavior.
        </p>

        {/* 6. Liability */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          6. Liability
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          The hotel is not responsible for loss, theft, or damage to personal
          belongings left in guest rooms or on hotel premises. Guests are encouraged
          to use the in-room safe or front desk safe deposit facilities. The hotel’s
          liability is limited to cases of gross negligence or willful misconduct.
        </p>

        {/* 7. Smoking and Pets */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          7. Smoking and Pets
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          Smoking is prohibited in all non-smoking rooms and designated areas. A
          cleaning fee will be charged for violations. Pets are only allowed in the
          hotel if specified in advance and may be subject to additional charges and
          policies.
        </p>

        {/* 8. Amendments */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          8. Amendments
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          The hotel reserves the right to amend these terms and conditions at any
          time without prior notice. Continued use of our services constitutes
          acceptance of any changes.
        </p>

        {/* 9. Governing Law */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          9. Governing Law
        </h3>
        <p className="text-[#111418] text-base leading-normal pb-3 pt-1 px-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of the jurisdiction in which the hotel is located. Any
          disputes arising shall be subject to the exclusive jurisdiction of the
          local courts.
        </p>
      </div>
    </div>
    <Footer/></>
   );
};

export default BookingTerms;