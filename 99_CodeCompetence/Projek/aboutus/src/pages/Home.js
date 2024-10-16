import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-1 text-gray-300">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to Weid's Website</h1>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque,
          facere quidem, dolor omnis ipsa autem perferendis modi dolore optio
          vero sunt voluptate velit dignissimos suscipit? Quasi dolores cumque
          et.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod lectus id libero dictum, a eleifend ligula ullamcorper.
          Phasellus vel nulla felis. Nulla facilisi.
        </p>

        <div className="mt-8">
          <img
            src="https://cdn.discordapp.com/attachments/976467324309733376/1293904160735105075/1297318.jpg?ex=6709ba67&is=670868e7&hm=cce899ddebc18c05af2865ddb465dd3dccfa5aa0679b48396da5c53cc5635369&"
            alt="Gambar"
            className="w-full lg:w-1/2 mx-auto rounded-lg shadow-lg"
          />
          <p className="text-center mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptate placeat, voluptas tempore esse cupiditate sunt quisquam ab
            voluptatibus mollitia delectus unde distinctio odit, maiores hic est
            cumque a saepe.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
