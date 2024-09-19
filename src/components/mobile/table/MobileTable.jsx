import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Tooltip from '@mui/material/Tooltip';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileTable({ mobile }) {
  return (
    <Sheet variant="outlined">
      <Table
        sx={{
          "--Table-headerUnderlineThickness": "10px",
        }}
        variant="soft"
        borderAxis="bothBetween"
      >
        <thead>
          <tr className="text-[8px] sm:text-sm">
            <th className='md:w-[15%]'>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Performance</th>
            <th>Display</th>
            <th>Rear Camera</th>
            <th>Front Camera</th>
            <th>Ram</th>
            <th>Display Type</th>
          </tr>
        </thead>
        <tbody className="text-[8px] sm:text-sm">
          <AnimatePresence>
            {mobile?.map((row) => (
              <motion.tr
                key={row.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <th scope="row">
                  <Tooltip title={row.name} arrow placement="top">
                    <span>{row.name}</span>
                  </Tooltip>
                </th>
                <td>
                  <Tooltip title={<img src={row.image} alt={row.name} />} arrow placement="top">
                    <img
                      width={"100%"}
                      height={"100%"}
                      src={row.image}
                      srcSet={row.image}
                      className="object-cover"
                      loading="lazy"
                      alt={row.name}
                    />
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.price} arrow placement="top">
                    <span>{row.price}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.performance} arrow placement="top">
                    <span>{row.performance}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.display} arrow placement="top">
                    <span>{row.display}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.rear_camera} arrow placement="top">
                    <span>{row.rear_camera}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.front_camera} arrow placement="top">
                    <span>{row.front_camera}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.ram} arrow placement="top">
                    <span>{row.ram}</span>
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title={row.display_type} arrow placement="top">
                    <span>{row.display_type}</span>
                  </Tooltip>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </Table>  
    </Sheet>
  );
}
