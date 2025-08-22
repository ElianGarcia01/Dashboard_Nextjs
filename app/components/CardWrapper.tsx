import { InfoCard } from "anjrot-components";
import React from "react";
import { fetchCardData } from "../helpers/api";

const CardWrapper = async () => {
      const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidinVoices,
        totalPendingInVoices,
      } = await fetchCardData();
  return (
    <>
      <InfoCard
        title="Collected"
        value={totalPaidinVoices}
        type="collected"
        currency={{ locale: "en-US", currency: "USD" }}
      />
      <InfoCard
        title="Pending"
        value={totalPendingInVoices}
        type="pending"
        currency={{ locale: "en-US", currency: "USD" }}
      />
      <InfoCard
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <InfoCard
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
};

export default CardWrapper;
