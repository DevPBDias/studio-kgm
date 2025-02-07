const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      {children}
    </main>
  );
};

export default Container;
