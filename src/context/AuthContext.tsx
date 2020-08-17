import React, { createContext, useContext } from 'react';
import useCustomAuth from './hooks/useCustomAuth';

interface User {
	id: number;
	name: string;
	lastname: string;
	whatsapp: string;
	bio: string;
	avatar: string;
	email: string;
}

interface AuthContextData {
	signed: boolean;
	user: User | null;
	signIn(email: string, password: string): Promise<void>;
	signOut(): void;
	loading: boolean;
	error: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const { user, signIn, signOut, loading, error } = useCustomAuth();

	return (
		<AuthContext.Provider
			value={{ loading, signed: !!user, signIn, signOut, user, error }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
};

//export default AuthContext;
