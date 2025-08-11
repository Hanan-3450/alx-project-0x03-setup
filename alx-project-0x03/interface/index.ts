// interface/index.ts

import { ReactNode } from "react";

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

// From components/layouts/Layout.tsx
export interface LayoutProps {
  children: ReactNode;
}
