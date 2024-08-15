export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="bg-blue-500 font-semibold p-3" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
