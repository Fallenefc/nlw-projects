import React, { createContext, useContext } from 'react';
import useCustomAuth from './hooks/useCustomAuth';

interface AuthContextData {
	signed: boolean;
	user: object | null;
	signIn(email: string, password: string): Promise<void>;
	signOut(): void;
	loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const { user, signIn, signOut, loading } = useCustomAuth();

	return (
		<AuthContext.Provider
			value={{ loading, signed: !!user, signIn, signOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	return context;
};

//export default AuthContext;
