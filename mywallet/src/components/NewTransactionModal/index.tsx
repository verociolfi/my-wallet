import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState } from "react";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}



export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="react-modal-content"
        overlayClassName="react-overlay-modal">
         
         <button type="button" 
            onClick={onRequestClose} 
            className="react-modal-close">
            <img src={closeImg} alt="fechar modal"/>
        </button>
         <Container onSubmit={handleCreateNewTransaction}>
         
         <h2>Cadastrar transação</h2>

            <form action="">
                <input placeholder="Título" />
                <input placeholder="Valor" type="number" />
                <TransactionTypeContainer>
                    <RadioBox type="button"
                              onClick={()=>{ setType('deposit');}}
                              isActive={type === 'deposit'}
                              activeColor="green"
                    >
                        <img src={incomeImg} alt="entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button"
                            isActive={type === 'withdraw'}
                            onClick={()=>{ setType('withdraw');}}
                            activeColor="red"
                    >
                        <img src={outcomeImg} alt="saída"/>
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>
                
            </form>

         </Container>
      
      
      </Modal>
    )
}