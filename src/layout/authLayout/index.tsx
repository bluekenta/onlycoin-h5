const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen bg-[url('@/assets/layout/auth/auth-bg.png')] dark:bg-[url('@/assets/layout/auth/auth-bg-dark.png')] bg-cover bg-no-repeat">
      <div className="w-full h-full bg-[url('@/assets/layout/auth/auth-bg-cover.png')] dark:bg-[url('@/assets/layout/auth/auth-bg-cover-dark.png')] bg-cover bg-no-repeat flex flex-col gap-[20px]">
        <div className="mt-[20px] mx-auto w-[100px] h-[100px] bg-[url('@/assets/layout/auth/auth-top-icon.png')] bg-cover bg-no-repeat"></div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
