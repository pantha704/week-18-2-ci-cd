import { FC } from "react";

const Page: FC = () => (
  <div className="min-h-screen bg-custom-background flex flex-col">
    <div className="flex flex-1">
      <main className="flex-1 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to your dashboard!
          </h2>
          <p className="text-gray-700">
            Here you can manage your settings and view your profile information.
          </p>
        </div>
      </main>
    </div>
  </div>
);

export default Page;
