export type ServiceCategory = 'branding' | 'web-development' | 'automation';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  features: string[];
  features: string[];
};

export type FormField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options?: { value: string; label: string }[];
};