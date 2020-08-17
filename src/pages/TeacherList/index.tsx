import React, { useState, FormEvent } from 'react';
import './style.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

interface Teacher {
	id: number;
	subject: string;
	cost: number;
	user_id: number;
	name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
}

const TeacherList: React.FC = () => {
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');
	const [teachers, setTeachers] = useState([]);
	const searchTeachers = async (event: FormEvent) => {
		event.preventDefault();
		const response = await api.get('/classes', {
			params: { subject, week_day, time },
		});

		console.log(response.data);
		setTeachers(response.data);
	};

	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Este são os proffys disponíveis' pageTitle='Estudar'>
				<form id='search-teachers' onSubmit={searchTeachers}>
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
					<Select
						label='Dia da semana'
						name='week_day'
						value={week_day}
						onChange={(e) => setWeekDay(e.target.value)}
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
						name='time'
						label='Hora'
						type='time'
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
					<button type='submit'>Buscar</button>
				</form>
			</PageHeader>
			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</main>
		</div>
	);
};

export default TeacherList;
