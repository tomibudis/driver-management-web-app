import { useState } from "react";

export interface useDisclosureProps {
  defaultIsOpen?: boolean;
}

const useDisclosure = (props: useDisclosureProps = {}) => {
  const [isOpen, setIsOpen] = useState(props.defaultIsOpen || false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useDisclosure;
