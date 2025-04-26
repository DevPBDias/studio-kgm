type MagicBtnProps = {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  link?: string;
  otherClasses?: string;
};

const MagicBtn = ({
  title,
  icon,
  position,
  link,
  otherClasses,
}: MagicBtnProps) => {
  return (
    <a
      href={link}
      className="relative inline-flex h-12 overflow-hidden rounded-lg w-full md:w-60 md:mt-2  focus:outline-none p-[1px]"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--terciary)_0%,var(--primary)_50%,var(--terciary)_100%)]" />
      <span
        className={`hover:bg-[var(--terciary)] hover:text-[var(--primary)] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[var(--primary)] px-7 text-lg font-bold text-[var(--terciary)] backdrop-blur-3xl gap-2 ${otherClasses} `}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </a>
  );
};

export default MagicBtn;
