import { Button, FormControl, Input, Modal, Text } from "native-base";

export default function ChangePw({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const padding = 2;
  const fontSize = 18;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Change Password</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Old Password</FormControl.Label>
            <Input type="password" padding={padding} fontSize={fontSize} />
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              isInvalid
              type="password"
              padding={padding}
              fontSize={fontSize}
            />
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              isInvalid
              type="password"
              padding={padding}
              fontSize={fontSize}
            />
            <FormControl.HelperText>
              Password must be at least 8 characters long
            </FormControl.HelperText>
            <FormControl.ErrorMessage isInvalid>
              Passwords do not match
            </FormControl.ErrorMessage>
          </FormControl>
          <Button _text={{ fontWeight: "bold" }}>Submit</Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
