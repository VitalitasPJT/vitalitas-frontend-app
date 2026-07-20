import { Calendar } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'select';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  helpText?: string;
  options?: { label: string; value: string }[];
  error?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  helpText,
  options,
  error,
}: FormFieldProps) {
  if (type === 'select') {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-black">
          {label}
        </label>
        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full h-11 px-3 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none ${
              error ? 'border-red-500 text-gray-900' : 'border-gray-300 text-gray-500'
            } ${value === '' ? 'text-gray-500' : 'text-gray-900'}`}
          >
            <option value="">{placeholder}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6L8 10L12 6"
                stroke="#737373"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
        {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  if (type === 'date') {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-black">
          {label}
        </label>
        <div className="relative">
          <input
            type="date"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full h-11 px-3 py-2 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              error ? 'border-red-500' : 'border-gray-300'
            } ${value === '' ? 'text-gray-500' : 'text-gray-900'}`}
          />
          <Calendar
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
          />
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-11 px-3 py-2 bg-white border rounded-md text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
          error ? 'border-red-500 text-gray-900' : 'border-gray-300 text-gray-900'
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
