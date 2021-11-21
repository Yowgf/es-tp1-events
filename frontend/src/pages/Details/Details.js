import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { default as ExpressClient } from '../../clients/express'

import './Detalhe.css'

const Detalhe = () => {
    const handleSubmit = () => {}
    const onSubmit = () => {}
    const register = () => {}
    const getEvent = () => {}
	return (
		<Fragment>
			<div className="header">
			</div>
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
                        <div className="descricao">
                            <p className = "titulos">
                                Descrição:
                            </p>
                        </div>
                        
						<Button
							className="register-button"
							size="small"
							variant="contained"
							color="primary"
							type="submit"
						>
							Register
						</Button>  
					</form>   
					<Button
						className="list-button"
						size="small"
						variant="contained"
						color="primary"
						type="button"
						onClick={getEvent}
					>
						Voltar
					</Button>  
				</div>
				<div className="list-events">
				</div>
			</div>
		</Fragment>
  );
}

export default Detalhe
