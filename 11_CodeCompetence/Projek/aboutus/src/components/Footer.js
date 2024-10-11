import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Weid's</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ducimus aperiam laborum aliquam architecto molestiae repudiandae
              sint reiciendis qui sapiente voluptatibus voluptates, eligendi
              sequi! Unde adipisci quas voluptas quos deserunt?
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Kontak Kami
            </h3>
            <p className="text-sm">
              Alamat: Jl. Bandar Labuhan, Medan, Indonesia
            </p>
            <p className="text-sm">Telepon: +62 852 6031 1900</p>
            <p className="text-sm">Email: Joenathandaniel33@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Ikuti Kami
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/joenathan.joenathan.528/"
                className="hover:text-white"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://x.com/22Weid" className="hover:text-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/joenathan.daniel/"
                className="hover:text-white"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; 2024 Weid's Website. All rights reserved.
          </p>
          <p className="text-sm">Gweh buat sendiri rooorr.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
