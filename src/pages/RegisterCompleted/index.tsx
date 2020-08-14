import React from 'react';

import './styles.css';
import FinishPage from '../../components/FinishPage';

const RegisterCompleted: React.FC = () => {
	return (
		<FinishPage
			title='Cadastro concluído'
			buttonText='Acessar'
			text='Tudo certo seu cadastro está na lista de professores, agora só ficar de olho no whatsapp.'
		/>
	);
};

export default RegisterCompleted;
