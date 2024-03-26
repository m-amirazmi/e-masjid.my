export interface LayoutProps {
  children: React.ReactNode;
}

export interface JsonContent {
  component: string;
  value: string;
}

export interface JsonData {
  content: any;
  sections: string[];
}

export interface ComponentProps {
  children: React.ReactNode;
  id: string;
}
