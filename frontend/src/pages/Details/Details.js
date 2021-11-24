import { backdropClasses, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { useParams, useNavigate } from 'react-router'
import { default as ExpressClient } from '../../clients/express'
import { AiFillEdit, AiFillDelete, AiOutlineCaretLeft  } from "react-icons/ai";
import './Details.css'

const Details = () => {
    const { id } = useParams()
    console.log(id)

    const navigate = useNavigate()
    const handleSubmit = () => {}
    const onSubmit = () => {}
    const back = () => {
        navigate('/')
    }
	return (
		<Fragment>
			<div className="events-body">
				<div>
					<form
						className="register-event"
						onSubmit={handleSubmit(onSubmit)}
					>
                        <div className="cabecalho">
                            <p className="titulos">
                                Evento:
                            </p>
                            <p className="valores">
                                puxar do BackEnd
                            </p>
                        </div>
                        <div className="cabecalho">
                            <p className="titulos">
                                Data de criação:
                            </p>
                            <p className="valores">
                                puxar do BackEnd
                            </p>
                        </div>
                        <div className="cabecalho">
                            <p className="titulos">
                                Categoria:
                            </p>
                            <p className="valores">
                                puxar do BackEnd
                            </p>
                        </div>
                        <div className="cabecalho">
                            <p className="titulos">
                                Criado por:
                            </p>
                            <p className="valores">
                                puxar do BackEnd
                            </p>
                        </div>
                        <div className='informacoes'>
                            <div className='opcoes'>
                                <div className="descricao">
                                    <p className = "titulos">
                                        Descrição:
                                    </p>
                                </div>
                                <div className="icones">
                                  <AiOutlineCaretLeft size={200} onClick={() => back()} className="back-button" /> 
                                  <AiFillEdit size={200} /> 
                                  <AiFillDelete size={200} /> 
                                </div>
                            </div>

                            <div className="mapa">
                                <p className = "titulos">
                                    Mapa:
                                </p>
                            </div>
                        </div>
					</form>   
				</div>
				<div className="list-events">
				</div>
			</div>
		</Fragment>
  );
}

export default Details
