const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center mt-24">{children}</main>
  );
};

export default RootLayout;
