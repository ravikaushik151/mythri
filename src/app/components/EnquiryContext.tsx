"use client";
import { createContext, useContext, useState } from "react";

type EnquiryContextType = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const EnquiryContext = createContext<EnquiryContextType | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <EnquiryContext.Provider
      value={{
        open,
        openDrawer: () => setOpen(true),
        closeDrawer: () => setOpen(false),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used inside EnquiryProvider");
  }
  return context;
}
