const ConfirmInsult = (handleInsultCreation) => {
    const {isOpen, onClose} = useDisclosure();
	
	return (<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to reveal insult?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={handleInsultCreation}>
              Yes
            </Button>
            <Button colorScheme='blue' onClick={onClose}> No </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>);
}

export default ConfirmInsult;