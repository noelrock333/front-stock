import { useState } from "react";
import { ProductsList } from "../components/products/list"
import Modal from '../shared/Modal';
import { Form } from '../components/products/form';

export const ProductsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}>
                <Form />
            </Modal>
            <ProductsList />
            <button onClick={() => setIsOpen(true)}>Agregar</button>
        </>
    )
}