const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full bg-[var(--primary)]">
      {children}
    </main>
  );
};

export default Container;
