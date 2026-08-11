export type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  error?: string;
  isPassword?: boolean;
  autoComplete?: string;
};

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'date' | 'select' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  helpText?: string;
  options?: { label: string; value: string }[];
  error?: string;
  rows?: number
}

export interface CheckboxProps {
  id?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  error?: string;
}
