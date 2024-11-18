"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Returns = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center p-4">
        <div className="max-w-4xl w-full flex flex-col gap-10 px-4 py-6">
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-4xl sm:text-6xl font-semibold">
              Shipping & Returns
            </h1>
            <h2 className="text-lg sm:text-xl text-gray-700">
              Learn about our shipping policies and easy return process at
              Crucifix.Shop
            </h2>
          </div>
          <div className="text-base sm:text-lg text-gray-800 space-y-4">
            <h3 className="font-semibold text-xl">1st December, 2024</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              venenatis quam vitae odio ultricies, et interdum magna convallis.
              Donec luctus urna eu felis interdum, nec euismod felis euismod.
              Sed interdum quam nec tortor congue, vitae volutpat erat iaculis.
              Integer auctor nec elit sed euismod. Donec viverra leo a sapien
              tristique, vel viverra sem facilisis. Cras tristique velit non
              libero volutpat, sit amet tristique odio tristique.
            </p>
            <p>
              Pellentesque ullamcorper nunc magna, at dignissim urna ullamcorper
              in. Ut congue magna at mi suscipit, eget interdum tortor
              facilisis. Nullam iaculis scelerisque risus, eget lacinia ipsum
              tempus sed. Etiam cursus tristique tortor id tincidunt. Sed tempus
              finibus justo nec gravida. Phasellus interdum, mauris nec placerat
              placerat, nisl risus laoreet mi, quis tincidunt dolor erat vitae
              enim. Nulla tempor augue nec metus scelerisque volutpat.
            </p>
            <p>
              Duis at neque tristique, cursus sapien vel, mollis augue. Integer
              tristique erat risus, vel aliquam augue consequat ac. Donec nec ex
              eu libero facilisis hendrerit. Maecenas vel leo a ante sodales
              tristique a non nunc. Integer suscipit odio leo, et dignissim
              lectus lobortis ac. Fusce nec ligula tincidunt, interdum lectus
              vel, volutpat purus. Nulla sit amet nisl non ipsum malesuada
              fringilla ac a eros.
            </p>
            <p>
              Mauris eget posuere libero, vel dapibus velit. Donec ut purus id
              odio malesuada ultricies. Curabitur tristique, turpis vel interdum
              dapibus, eros nisi scelerisque mauris, at aliquam eros turpis ac
              felis. Nunc pretium dolor eget metus volutpat, in egestas tortor
              auctor. Suspendisse potenti. Etiam sed felis nec ante tristique
              fermentum.
            </p>
            <p>
              Ut et risus mollis, convallis sapien ac, efficitur velit. Sed
              tincidunt, sapien eu posuere feugiat, elit arcu congue mauris,
              euismod feugiat orci libero sed lorem. Nunc suscipit elit non
              neque feugiat scelerisque. Suspendisse potenti. Donec hendrerit
              massa et nisl tempor, eget vestibulum orci consequat.
            </p>
            <p>
              Aliquam vulputate ligula id erat varius, id ullamcorper purus
              posuere. Donec vehicula mi et magna bibendum lobortis. In volutpat
              urna sit amet urna egestas, ut auctor metus gravida. Sed vel
              pharetra arcu. Nullam id leo non orci malesuada pellentesque.
              Aliquam erat volutpat. Donec tincidunt leo quis augue tristique,
              vel viverra tortor malesuada.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Returns;
