"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const PIXEL_ID = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID;

export default function SnapPixel() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!PIXEL_ID) return;

    const check = () => {
      if (localStorage.getItem("lsm_cookie_consent") === "accepted") {
        setEnabled(true);
      }
    };

    check();
    window.addEventListener("lsm:consent-accepted", check);
    return () => window.removeEventListener("lsm:consent-accepted", check);
  }, []);

  if (!PIXEL_ID || !enabled) return null;

  return (
    <Script id="snap-pixel" strategy="afterInteractive">
      {`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function(){a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script',r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');
snaptr('init', '${PIXEL_ID}');
snaptr('track', 'PAGE_VIEW');`}
    </Script>
  );
}
