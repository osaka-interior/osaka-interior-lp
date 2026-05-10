"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sendPageView } from "@/lib/gtag";

/**
 * App Router のクライアント遷移時に page_view を送る。
 * 初回表示もマウント後に 1 回計測する（inline の send_page_view: false と対）。
 */
export function GaPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();
    const url = search ? `${pathname}?${search}` : pathname;
    sendPageView(url);
  }, [pathname, searchParams]);

  return null;
}
