import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMemberCard = ({
  name,
  role,
  image,
  description,
}: TeamMemberCardProps) => {
  return (
    <motion.div
      className="group relative rounded-[5px] overflow-hidden shadow-none hover:shadow-md  transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative h-40 w-40 mb-6 rounded-full overflow-hidden ">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover 
            "
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h3>
          <p className="text-primary-color1 font-medium mb-3">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
