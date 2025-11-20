import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const LucideIcon = ({
  size = 24,
  className,
  children,
  ...props
}: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    role="img"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    {children}
  </svg>
);

export const ArrowUpRight = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </LucideIcon>
);

export const Sparkles = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M12 4.5 13.5 9 18 10.5 13.5 12 12 16.5 10.5 12 6 10.5 10.5 9 12 4.5Z" />
    <path d="M6 4.5 6.75 6.75 9 7.5 6.75 8.25 6 10.5 5.25 8.25 3 7.5 5.25 6.75 6 4.5Z" />
    <path d="M17 15.5 17.5 17 19 17.5 17.5 18 17 19.5 16.5 18 15 17.5 16.5 17 17 15.5Z" />
  </LucideIcon>
);

export const Send = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="m22 2-7 7" />
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9l20-7Z" />
  </LucideIcon>
);

export const Instagram = (props: IconProps) => (
  <LucideIcon {...props}>
    <rect height="16" rx="4" width="16" x="4" y="4" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <circle cx="17.5" cy="6.5" fill="currentColor" r="0.75" stroke="none" />
  </LucideIcon>
);

export const Linkedin = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M4 9h4v11H4z" />
    <path d="M6 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    <path d="M10 9h3v2.3a3 3 0 0 1 5.8.7V20h-4v-6a1.8 1.8 0 0 0-3.6 0V20H10Z" />
  </LucideIcon>
);

export const PhoneCall = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M14.5 5.5a4 4 0 0 1 4 4" />
    <path d="M14.5 2a7.5 7.5 0 0 1 7.5 7.5" />
    <path d="M9.7 9.7a11 11 0 0 0 4.6 4.6l2.1-2.1a1 1 0 0 1 1-.25 9 9 0 0 0 2.8.45 1 1 0 0 1 1 1V19a2 2 0 0 1-2.2 2 18 18 0 0 1-7.9-3.1 17.7 17.7 0 0 1-5.6-5.6A18 18 0 0 1 2 4.2 2 2 0 0 1 4 2h2.6a1 1 0 0 1 1 1 9 9 0 0 0 .45 2.8 1 1 0 0 1-.25 1z" />
  </LucideIcon>
);

export const Palette = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-2.5a1.5 1.5 0 0 1-1.5-1.5V6c0-1.1-.9-2-2-2Z" />
    <circle cx="8" cy="8" r="1" />
    <circle cx="16" cy="8" r="1" />
    <circle cx="7.5" cy="12" r="1" />
    <circle cx="12" cy="15" r="1" />
  </LucideIcon>
);

export const Code = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
    <path d="m13 4-2 16" />
  </LucideIcon>
);

export const Waves = (props: IconProps) => (
  <LucideIcon {...props}>
    <path d="M2 12c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
    <path d="M2 16c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
  </LucideIcon>
);
