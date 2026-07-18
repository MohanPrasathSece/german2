import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export const COUNTRIES = [
  { code: 'ch', name: 'Schweiz', dialCode: '41', regex: /^(\+41|0041|0)[1-9]\d{7,8}$/, example: '+41 79 123 45 67' },
  { code: 'fr', name: 'Frankreich', dialCode: '33', regex: /^(\+33|0033|0)[1-9]\d{8}$/, example: '+33 6 12 34 56 78' },
  { code: 'be', name: 'Belgien', dialCode: '32', regex: /^(\+32|0032|0)[1-9]\d{7,8}$/, example: '+32 4 12 34 56 78' },
  { code: 'ca', name: 'Kanada', dialCode: '1', regex: /^(\+1|001)?[2-9]\d{2}[2-9]\d{6}$/, example: '+1 416 123 4567' },
  { code: 'us', name: 'USA', dialCode: '1', regex: /^(\+1|001)?[2-9]\d{2}[2-9]\d{6}$/, example: '+1 212 123 4567' },
  { code: 'gb', name: 'Großbritannien', dialCode: '44', regex: /^(\+44|0044|0)7\d{9}$/, example: '+44 7912 345678' },
  { code: 'de', name: 'Deutschland', dialCode: '49', regex: /^(\+49|0049|0)[1-9]\d{10,11}$/, example: '+49 151 12345678' },
  { code: 'es', name: 'Spanien', dialCode: '34', regex: /^(\+34|0034)?[6-7]\d{8}$/, example: '+34 612 345 678' },
  { code: 'it', name: 'Italien', dialCode: '39', regex: /^(\+39|0039)?\d{9,10}$/, example: '+39 312 345 6789' },
  { code: 'nl', name: 'Niederlande', dialCode: '31', regex: /^(\+31|0031|0)6\d{8}$/, example: '+31 6 12345678' },
  { code: 'se', name: 'Schweden', dialCode: '46', regex: /^(\+46|0046|0)7\d{8}$/, example: '+46 70 123 45 67' },
  { code: 'au', name: 'Australien', dialCode: '61', regex: /^(\+61|0061|0)4\d{8}$/, example: '+61 412 345 678' },
  { code: 'in', name: 'Indien', dialCode: '91', regex: /^(\+91|0091)?[6-9]\d{9}$/, example: '+91 98765 43210' },
  { code: 'ae', name: 'VAE', dialCode: '971', regex: /^(\+971|00971|0)5\d{7}$/, example: '+971 50 123 4567' },
  { code: 'sg', name: 'Singapur', dialCode: '65', regex: /^(\+65|0065)?[89]\d{7}$/, example: '+65 8123 4567' },
  { code: 'za', name: 'Südafrika', dialCode: '27', regex: /^(\+27|0027|0)[6-8]\d{8}$/, example: '+27 82 123 4567' },
  { code: 'br', name: 'Brasilien', dialCode: '55', regex: /^(\+55|0055)?\d{10,11}$/, example: '+55 11 91234-5678' },
  { code: 'mx', name: 'Mexiko', dialCode: '52', regex: /^(\+52|0052)?\d{10}$/, example: '+52 55 1234 5678' },
  { code: 'jp', name: 'Japan', dialCode: '81', regex: /^(\+81|0081|0)[7-9]0\d{8}$/, example: '+81 90 1234 5678' },
  { code: 'cy', name: 'Zypern', dialCode: '357', regex: /^(\+357|00357)?9\d{7}$/, example: '+357 99 123456' },
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
      <SelectTrigger className={`bg-white border-input text-foreground ${className}`}>
        <SelectValue placeholder="Land auswählen" />
      </SelectTrigger>
      <SelectContent className="bg-white border-border text-foreground shadow-md">
        {COUNTRIES.map((country) => (
          <SelectItem key={country.code} value={country.code} className="cursor-pointer">
            {country.name} (+{country.dialCode})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
