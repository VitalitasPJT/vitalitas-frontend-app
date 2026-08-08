interface PasswordStrengthProps {
  password: string;
}

function computeStrength(password: string): 'weak' | 'medium' | 'strong' {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[#$%&@!?^*()_\-+=[\]{};':"\\|,.<>/]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;

  if (score <= 1) return 'weak';
  if (score <= 3) return 'medium';
  return 'strong';
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = computeStrength(password);

  const strengthConfig = {
    weak:   { label: 'Fraca',  color: '#fb2c36', width: '33.33%' },
    medium: { label: 'Média',  color: '#eab308', width: '66%'    },
    strong: { label: 'Forte',  color: '#00c950', width: '100%'   },
  };

  const config = strengthConfig[strength];

  return (
    <div className="flex flex-col gap-1.5 w-full mt-2">
      <div className="flex items-center justify-between">
        <p className="modal-strength-text-4k font-['Inter'] font-medium text-[#4a5565] text-xs">
          Força da senha
        </p>
        <p className="modal-strength-text-4k font-['Inter'] font-bold text-xs" style={{ color: config.color }}>
          {config.label}
        </p>
      </div>
      <div className="bg-[#e5e7eb] h-2 rounded-full w-full">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ backgroundColor: config.color, width: config.width }}
        />
      </div>
    </div>
  );
}
