import { IoIosHeartEmpty } from "react-icons/io";
import useMediaQuery from "./hooks/useMediaQuery";
import { MdOutlineSaveAlt } from "react-icons/md";

import { motion } from "framer-motion";
type Props = {};

const data = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/29851866/pexels-photo-29851866/free-photo-of-gateaux-et-tartes-artisanaux-aux-fruits-frais-et-aux-fleurs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "john",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 1365,
    image:
      "https://images.pexels.com/photos/13383272/pexels-photo-13383272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "jammy",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 174,
    image:
      "https://images.pexels.com/photos/9831077/pexels-photo-9831077.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "arya",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 101,
    image:
      "https://images.pexels.com/photos/16314579/pexels-photo-16314579/free-photo-of-femme-gratte-ciel-gratte-ciels-modele.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "bob",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 156,
    image:
      "https://images.pexels.com/photos/14459171/pexels-photo-14459171.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "maria",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 15,
    image:
      "https://images.pexels.com/photos/18131912/pexels-photo-18131912/free-photo-of-mode-hommes-jeune-style.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "mariama",
    desc: "Lorem ipsum dolor sit amet.",
  },

  {
    id: 14,
    image:
      "https://images.pexels.com/photos/18398326/pexels-photo-18398326/free-photo-of-ville-mode-femme-france.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "alissa",
    desc: "Lorem ipsum dolor sit amet.",
  },
];
const App = (props: Props) => {
  // appel avec tout de suite un grande ecran
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      className={`px-8 pt-3 pb-7  bg-gray-800`}
    >
      <div>
        {/* ***************TITRE  */}
        <motion.div
          initial="hidden" //prend en param hidden
          whileInView="visible" //prend en param visible
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            // ********definir le hidden
            hidden: { opacity: 0, x:-200},

            // ****definr le visible
            visible: { opacity: 1, x: 0 },
          }}
          className={`  ${
            isLargeScreen ? "text-5xl " : "text-3xl text-center "
          } text-green-500 font-extrabold mb-8 tracking-widest`}
        >
          WELCOME
        </motion.div>

        {/* ********************PARAGRAPE  */}
        <motion.div

          className={`text-zinc-200 text-md mb-8 text-left tracking-wider ${
            isLargeScreen ? "pr-64 leading-8 mb-9" : ""
          }`}

          initial="hidden" //prend en param hidden
          whileInView="visible" //prend en param visible
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            // ********definir le hidden
            hidden: { opacity: 0, x:-400},

            // ****definr le visible
            visible: { opacity: 1, x: 0 },
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aut
          distinctio sit, velit tempore dolore, voluptates nam ipsam, esse amet
          repellat beatae. Nesciunt excepturi tempore officia placeat voluptatem
          nam, quisquam repellat similique eligendi voluptates neque assumenda
          quibusdam itaque reprehenderit dicta quo, perspiciatis quae fugit.
          Dolor voluptas minima quaerat voluptate maxime.
        </motion.div>

        {/* *****************BUTTON  */}
        <div className="flex gap-8">
          <button
            className={` px-4 py-2 rounded-md bg-green-400 text-zinc-300 font-extrabold`}
          >
            Read more
          </button>

          <button
            className={` px-4 py-2 rounded-md border border-slate-200 text-green-400`}
          >
            Subscribe
          </button>
        </div>
      </div>

      <div
        className={`mt-20  items-center gap-10 ${
          isLargeScreen ? "flex flex-wrap px-14" : "flex flex-col"
        }`}
      >
        {data.map((item) => (
          <div key={item.id} className="flex-col rounded-xl overflow-hidden">
            <div className="w-[250px] h-[300px]">
              <img
                className="object-cover w-full h-full"
                src={item.image}
                alt=""
              />
            </div>

            <div className="">
              <h2 className="text-md text-green-400 font-semibold mt-2">
                {item.name}
              </h2>
              <p className="text-md text-zinc-200">{item.desc}</p>

              <div className="flex gap-5">
                <button className="px-4 py-4  mt-6 mb-2 border border-zinc-200">
                  <IoIosHeartEmpty className=" text-2xl text-green-400 " />
                </button>
                <button className="px-4 py-4  mt-6 mb-2 border border-zinc-200">
                  <MdOutlineSaveAlt className=" text-2xl text-green-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
