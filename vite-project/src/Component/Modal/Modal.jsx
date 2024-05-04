import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  height: "60%",
  p: 4,
  borderRadius: "15px",
};

export default function BasicModal({ image, firstImage, content }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
        onClick={handleOpen}
        style={{
          width: "30vw",
          height: "40vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      ></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "50vh",
                // background: "red",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  flex: ".5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: `url(${firstImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "50%",
                }}
              ></div>
              <div
                style={{
                  flex: ".5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  //   backgroundImage: `url(${image})`,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  //   backgroundRepeat: "no-repeat",
                }}
              >
                {content}
              </div>
            </div>
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
