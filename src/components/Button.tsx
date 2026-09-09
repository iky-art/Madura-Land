import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  external?: boolean;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  external?: boolean;
}

interface ButtonElProps extends BaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: "button" | "submit";
}

type Props = LinkProps | AnchorProps | ButtonElProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white border border-accent hover:bg-accent-hover hover:-translate-y-px",
  secondary:
    "bg-transparent text-text border border-border hover:border-muted hover:bg-surface-hover hover:-translate-y-px",
  ghost:
    "bg-transparent text-muted border border-border hover:text-text hover:bg-surface-hover",
};

const base =
  "inline-flex items-center gap-2 rounded-[3px] px-5 py-2.5 text-[14.5px] font-medium transition-all duration-150";

export default function Button(props: Props) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonElProps;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
