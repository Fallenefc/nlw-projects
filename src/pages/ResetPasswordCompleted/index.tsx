import React from 'react';
import FinishPage from '../../components/FinishPage';

const ResetPasswordCompleted: React.FC = () => {
	return (
		<FinishPage
			title='Redefinição enviada'
			text='Agora é só checar o email que enviamos para você, redefinir sua senha e aproveitar os estudos'
			buttonText='Voltar ao login'
		/>
	);
};

export default ResetPasswordCompleted;
