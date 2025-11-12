interface DividerProps {
  className?: string;
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div
        className="w-[90%] h-[1px]"
        style={{ backgroundColor: 'var(--color-line)' }}
      />
    </div>
  );
};
