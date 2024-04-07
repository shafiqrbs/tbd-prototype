import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Flex } from '@mantine/core';
import SampleModal from './SampleModal';
import { IconPrinter } from '@tabler/icons-react';
import ReactToPrint from 'react-to-print';

function SampleModalIndex() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                // title="This is a fullscreen modal"
                fullScreen
                // size={`75%`}
                radius={0}

                h={'50px'}
                w={100}
                transitionProps={{ transition: 'pop', duration: 100 }}
            >
                <SampleModal />
            </Modal >

            <Button onClick={open} m={'lg'}>Open Modal</Button>

            <Button

                color={'indigo.6'}
                type='submit'
                m={'lg'}
                leftSection={<IconPrinter size={16} />}>
                <ReactToPrint

                />
            </Button>
        </>
    );
}

export default SampleModalIndex;