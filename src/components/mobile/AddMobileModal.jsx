import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import MobileCard from './MobileCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddMobileModal({ addMobile, mobile, open, setOpen }) {
  const mobileData = [
    {
      name: "iPhone 14 Pro Max",
      image: "/images/iphone.png",
      price: "700$",
      performance: "Snapdragon 7 Gen 3",
      display: "6.78 (17.22 cm)",
      rear_camera: "50 MP + 50 MP",
      front_camera: "50 MP",
      ram: "8GB",
      display_type: "Amoled",
    },
    {
      name: "iPhone 16 Pro Max",
      image: "/images/samsung.png",
      price: "900$",
      performance: "Snapdragon 8 Gen 3",
      display: "6.9 (17.54 cm)",
      rear_camera: "48 MP + 12 MP",
      front_camera: "12 MP",
      ram: "12GB",
      display_type: "Super Retina XDR",
    },
    {
      name: "Google Pixel 8 Pro",
      image: "/images/iphone2.png",
      price: "800$",
      performance: "Google Tensor G3",
      display: "6.7 (17.02 cm)",
      rear_camera: "50 MP + 48 MP",
      front_camera: "11 MP",
      ram: "12GB",
      display_type: "OLED",
    },
  ];

  const [filteredMobiles, setFilteredMobiles] = React.useState([]);

  // Function to filter mobiles that are not present in the 'mobile' array
  const myFn = () => {
    const filtered = mobileData.filter(
      (item) => !mobile.some((selectedMobile) => selectedMobile.name === item.name)
    );
    setFilteredMobiles(filtered);
  };

  React.useEffect(() => {
    myFn();
  }, [mobile]);

  console.log("Filtered Mobiles: ", filteredMobiles);

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>{filteredMobiles.length == 0 ? "No mobile found":"Select a Mobile"}</DialogTitle>
          <DialogContent>{filteredMobiles.length == 0 ? "No mobile found":"Pick the mobile device not in the selected list."}</DialogContent>
          <div className="md:flex md:flex-row">
            <AnimatePresence>
                {filteredMobiles.map((item) => (
                    <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    <MobileCard addMobile={addMobile} item={item} key={item.name} />
                </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
