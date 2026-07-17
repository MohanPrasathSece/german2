import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export const COUNTRIES = [
  { code: 'ch', name: 'Switzerland', dialCode: '41', regex: /^(\+41|0041|0)[1-9]\d{7,8}$/, example: '+41 79 123 45 67' },
  { code: 'fr', name: 'France', dialCode: '33', regex: /^(\+33|0033|0)[1-9]\d{8}$/, example: '+33 6 12 34 56 78' },
  { code: 'be', name: 'Belgium', dialCode: '32', regex: /^(\+32|0032|0)[1-9]\d{7,8}$/, example: '+32 4 12 34 56 78' },
  { code: 'ca', name: 'Canada', dialCode: '1', regex: /^(\+1|001)?[2-9]\d{2}[2-9]\d{6}$/, example: '+1 416 123 4567' },
  { code: 'us', name: 'USA', dialCode: '1', regex: /^(\+1|001)?[2-9]\d{2}[2-9]\d{6}$/, example: '+1 212 123 4567' },
  { code: 'gb', name: 'UK', dialCode: '44', regex: /^(\+44|0044|0)7\d{9}$/, example: '+44 7912 345678' },
  { code: 'de', name: 'Germany', dialCode: '49', regex: /^(\+49|0049|0)[1-9]\d{10,11}$/, example: '+49 151 12345678' },
  { code: 'es', name: 'Spain', dialCode: '34', regex: /^(\+34|0034)?[6-7]\d{8}$/, example: '+34 612 345 678' },
  { code: 'it', name: 'Italy', dialCode: '39', regex: /^(\+39|0039)?\d{9,10}$/, example: '+39 312 345 6789' },
  { code: 'nl', name: 'Netherlands', dialCode: '31', regex: /^(\+31|0031|0)6\d{8}$/, example: '+31 6 12345678' },
  { code: 'se', name: 'Sweden', dialCode: '46', regex: /^(\+46|0046|0)7\d{8}$/, example: '+46 70 123 45 67' },
  { code: 'au', name: 'Australia', dialCode: '61', regex: /^(\+61|0061|0)4\d{8}$/, example: '+61 412 345 678' },
  { code: 'in', name: 'India', dialCode: '91', regex: /^(\+91|0091)?[6-9]\d{9}$/, example: '+91 98765 43210' },
  { code: 'ae', name: 'UAE', dialCode: '971', regex: /^(\+971|00971|0)5\d{7}$/, example: '+971 50 123 4567' },
  { code: 'sg', name: 'Singapore', dialCode: '65', regex: /^(\+65|0065)?[89]\d{7}$/, example: '+65 8123 4567' },
  { code: 'za', name: 'South Africa', dialCode: '27', regex: /^(\+27|0027|0)[6-8]\d{8}$/, example: '+27 82 123 4567' },
  { code: 'br', name: 'Brazil', dialCode: '55', regex: /^(\+55|0055)?\d{10,11}$/, example: '+55 11 91234-5678' },
  { code: 'mx', name: 'Mexico', dialCode: '52', regex: /^(\+52|0052)?\d{10}$/, example: '+52 55 1234 5678' },
  { code: 'jp', name: 'Japan', dialCode: '81', regex: /^(\+81|0081|0)[7-9]0\d{8}$/, example: '+81 90 1234 5678' },
  { code: 'cy', name: 'Cyprus', dialCode: '357', regex: /^(\+357|00357)?9\d{7}$/, example: '+357 99 123456' },
];

export const getCountryByCode = (code: string) => COUNTRIES.find(c => c.code === code) || COUNTRIES[0];

interface CountryDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const CountryDropdown: React.FC<CountryDropdownProps> = ({ value, onChange, className }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`bg-white/5 border-white/10 text-white ${className}`}>
        <SelectValue placeholder="Select Country" />
      </SelectTrigger>
      <SelectContent className="bg-black/90 border-white/10 text-white backdrop-blur-xl">
        {COUNTRIES.map((country) => (
          <SelectItem key={country.code} value={country.code} className="hover:bg-white/10 focus:bg-white/10 focus:text-white cursor-pointer">
            {country.name} (+{country.dialCode})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
