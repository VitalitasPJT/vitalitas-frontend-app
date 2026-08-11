export type PasswordStrengthLevel = 'weak' | 'medium' | 'strong';

export interface PasswordValidationResult {
  hasMinLength: boolean;
  hasUpperAndLower: boolean;
  hasSpecialChar: boolean;
  hasNumber: boolean;
  isValid: boolean;
  strength: PasswordStrengthLevel;
}

const SPECIAL_CHAR_REGEX = /[#$%&@!?^*()_\-+=[\]{};':"\\|,.<>/]/;

/**
 * Fonte única de verdade para a política de senha do sistema.
 * Antes desta extração, a mesma regra (mínimo 8 caracteres, maiúscula +
 * minúscula, caractere especial, número) estava duplicada de forma
 * independente em PasswordRequirements, PasswordStrength e
 * PasswordResetContent — qualquer mudança na regra exigia editar os três
 * arquivos manualmente, com risco real de divergência entre eles.
 *
 * Reutilizável em qualquer fluxo de senha: reset, primeiro acesso,
 * alteração de senha no perfil, etc.
 */
export function usePasswordValidation(password: string): PasswordValidationResult {
  const hasMinLength = password.length >= 8;
  const hasUpperAndLower = /[A-Z]/.test(password) && /[a-z]/.test(password);
  const hasSpecialChar = SPECIAL_CHAR_REGEX.test(password);
  const hasNumber = /[0-9]/.test(password);

  const score = [hasMinLength, hasUpperAndLower, hasSpecialChar, hasNumber].filter(Boolean).length;

  let strength: PasswordStrengthLevel = 'weak';
  if (score >= 4) strength = 'strong';
  else if (score >= 2) strength = 'medium';

  return {
    hasMinLength,
    hasUpperAndLower,
    hasSpecialChar,
    hasNumber,
    isValid: hasMinLength && hasUpperAndLower && hasSpecialChar && hasNumber,
    strength,
  };
}
