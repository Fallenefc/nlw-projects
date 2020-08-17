import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TeacherForm: React.FC = () => {
	const history = useHistory();
	const { user } = useAuth();
	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');
	console.log(user?.name);

	const [scheudleItems, setScheudleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	]);

	const setScheudleItemValue = (
		position: number,
		field: string,
		value: string
	) => {
		const updatedScheudleItems = scheudleItems.map((scheudleItem, index) => {
			if (index === position) {
				return { ...scheudleItem, [field]: value };
			}

			return scheudleItem;
		});
		console.log(updatedScheudleItems);
		setScheudleItems(updatedScheudleItems);
	};

	const addNewScheudleItem = () => {
		setScheudleItems([...scheudleItems, { week_day: 0, from: '', to: '' }]);
	};

	const handleCreateClass = (event: FormEvent) => {
		event.preventDefault();

		api
			.post('/classes', {
				subject,
				cost: Number(cost),
				scheudle: scheudleItems,
			})
			.then(() => {
				alert('Cadastro realizado com sucesso');
				history.push('/');
			})
			.catch(() => {
				alert('Erro no cadastro');
			});
	};

	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader
				pageTitle='Dar aulas'
				title='Que ínicrivel que você quer dar aulas'
				description='O primeiro passo é preencher esse formulário de inscrição'
			/>
			<h3>{user?.name}</h3>
			<h3>{user?.lastname}</h3>
			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>Sobre a aula</legend>
						<Select
							label='Matéria'
							name='subject'
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							options={[
								{ value: 'Artes', label: 'Artes' },
								{ value: 'Biologia', label: 'Biologia' },
								{ value: 'Matemática', label: 'Matemática' },
								{ value: 'Inglês', label: 'Inglês' },
								{ value: 'História', label: 'História' },
								{ value: 'Geografia', label: 'Geografia' },
								{ value: 'Português', label: 'Português' },
								{ value: 'Química', label: 'Química' },
								{ value: 'Física', label: 'Física' },
							]}
						/>
						<Input
							label='Custo da sua hora por aula'
							name='cost'
							value={cost}
							onChange={(e) => setCost(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários disponiveis
							<button type='button' onClick={addNewScheudleItem}>
								{' '}
								+ Novo horário
							</button>
						</legend>
						{scheudleItems.map((scheudleItem, index) => {
							return (
								<div key={scheudleItem.week_day} className='scheudle-item'>
									<Select
										label='Dia da semana'
										name='week_day'
										onChange={(e) =>
											setScheudleItemValue(index, 'week_day', e.target.value)
										}
										value={scheudleItem.week_day}
										options={[
											{ value: '0', label: 'Domingo' },
											{ value: '1', label: 'Segunda-feira' },
											{ value: '2', label: 'Terça-feira' },
											{ value: '3', label: 'Quarta-feira' },
											{ value: '4', label: 'Quinta-feira' },
											{ value: '5', label: 'Sexta-feira' },
											{ value: '6', label: 'Sábado' },
										]}
									/>
									<Input
										type='time'
										name='from'
										label='Das'
										value={scheudleItem.from}
										onChange={(e) =>
											setScheudleItemValue(index, 'from', e.target.value)
										}
									/>
									<Input
										type='time'
										name='to'
										label='Até'
										value={scheudleItem.to}
										onChange={(e) =>
											setScheudleItemValue(index, 'to', e.target.value)
										}
									/>
								</div>
							);
						})}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt='Aviso importante' />
							Importante !<br />
							Preencha todos os dados
						</p>
						<button type='submit'>Salvar o cadastro</button>
					</footer>
				</form>
			</main>
		</div>
	);
};

export default TeacherForm;
