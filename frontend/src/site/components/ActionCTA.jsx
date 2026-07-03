import { VALID_ROLES, VALID_INTENTS, VALID_SOURCE_SECTIONS, getAppBaseUrl } from '../config/appConfig';

/**
 * ActionCTA is the ONLY allowed way to construct an app-directed CTA.
 * It enforces parameter structures and creates absolute URLs.
 */
export const ActionCTA = ({
  role,
  intent,
  label,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost'
  className = '',
  sourceSection,
  onClick,
  disabled = false,
  ...rest
}) => {
  // Validate params against enums
  const isRoleValid = VALID_ROLES.includes(role);
  const isIntentValid = VALID_INTENTS.includes(intent);
  
  if (import.meta.env.DEV && sourceSection && !VALID_SOURCE_SECTIONS.includes(sourceSection)) {
    console.warn(`ActionCTA Warning: Unknown sourceSection "${sourceSection}". Should be one of: ${VALID_SOURCE_SECTIONS.join(', ')}`);
  }

  // Determine styles
  let variantClass = '';
  if (variant === 'primary') {
    variantClass = 'btn btn-primary';
  } else if (variant === 'secondary') {
    variantClass = 'btn btn-secondary';
  } else if (variant === 'ghost') {
    variantClass = 'btn bg-transparent hover:bg-bg text-primary border border-separator-strong';
  }

  // Base classes for motion and interaction
  const baseClasses = ''; // Addressed by .btn in index.css
  const activeClasses = ''; // Addressed by .btn:active in index.css
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  if (!isRoleValid || !isIntentValid) {
    if (import.meta.env.DEV) {
      console.error(`ActionCTA Error: Invalid role ("${role}") or intent ("${intent}"). Must be one of ROLES:[${VALID_ROLES.join(',')}] INTENTS:[${VALID_INTENTS.join(',')}]`);
    }
    // Fail-safe in production: fallback to a safe route (home) and visually disable to prevent broken navigation
    return (
      <a 
        href="/" 
        className={`btn bg-surface-muted text-text-muted opacity-50 cursor-not-allowed pointer-events-none ${className}`}
        aria-disabled="true"
        onClick={(e) => e.preventDefault()}
      >
        {label || "System Error"}
      </a>
    );
  }

  let href;

  if (intent === 'apply') {
    // Apply links to the marketing contact form, not the app domain
    href = '/contact?type=shelter_rescue';
  } else {
    const baseUrl = getAppBaseUrl();
    const url = new URL(baseUrl);
    
    if (intent === 'register') {
      url.pathname = '/register';
    } else if (intent === 'report_lost') {
      url.pathname = '/lost';
    } else if (intent === 'report_found') {
      url.pathname = '/found';
    }
    
    url.searchParams.set('role', role);
    url.searchParams.set('intent', intent);

    href = url.toString();
  }

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    // Dispatch standard analytics payload
    const payload = {
      role,
      intent,
      source_section: sourceSection || 'unknown'
    };
    
    // In a real app, this would route to a dataLayer or tracking service
    window.dispatchEvent(new CustomEvent('analytics:cta_click', { detail: payload }));
    if (import.meta.env.DEV) {
      console.log('Analytics Event Fired:', payload);
    }
    
    if (onClick) onClick(e);
  };

  return (
    <a
      href={disabled ? '#' : href}
      className={`${baseClasses} ${variantClass} ${activeClasses} ${disabledClasses} ${className}`}
      data-testid={`cta-${role}-${intent}`}
      aria-label={label}
      aria-disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {label}
    </a>
  );
};
