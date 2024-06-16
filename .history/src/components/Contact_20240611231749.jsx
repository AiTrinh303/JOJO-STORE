
import { Facebook, Instagram, Twitter, Google, Pinterest } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="bg-[#2879fe] text-white p-5 flex justify-center">
      <div className="w-1/2 flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your E-mail..."
            className="p-2 rounded-l-lg border-none"
          />
          <button className="p-2 text-white bg-[#444] rounded-r-lg border-none">
            JOIN US
          </button>
        </div>
        <div className="flex gap-2">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
