"use client";

import { useEffect } from "react";
import { snapTrack } from "@/lib/snap";

interface Props {
  transactionId: string;
  price: number;
  productId?: string;
}

export default function PurchaseTracker({ transactionId, price, productId }: Props) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("lsm_cookie_consent") !== "accepted") return;

    const dedupeKey = `snap_purchase_${transactionId}`;
    if (sessionStorage.getItem(dedupeKey)) return;

    snapTrack("PURCHASE", {
      price,
      currency: "EUR",
      transaction_id: transactionId,
      ...(productId ? { item_ids: [productId], item_category: "lissage" } : {}),
      number_items: 1,
    });

    sessionStorage.setItem(dedupeKey, "1");
  }, [transactionId, price, productId]);

  return null;
}
